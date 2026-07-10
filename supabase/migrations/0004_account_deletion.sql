-- Recall: in-app account deletion (App Store Guideline 5.1.1(v) requires
-- any app with account creation to offer account deletion inside the app).
-- Deletes the caller's cloud data and auth identity in one transaction.
-- Idempotent: safe to run any number of times.

create or replace function public.delete_account()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'not authenticated';
  end if;

  -- Explicit deletes are belt-and-braces: every user-owned table already
  -- cascades from auth.users, but this keeps the function correct even if
  -- a future table forgets the cascade. Feedback inboxes (exam_requests,
  -- contact_messages) use on delete set null — those rows are anonymized,
  -- not destroyed.
  delete from public.user_progress where user_id = uid;
  delete from public.user_read_history where user_id = uid;
  delete from public.user_exam_stats where user_id = uid;
  delete from public.user_stats where user_id = uid;
  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.delete_account() from public;
grant execute on function public.delete_account() to authenticated;
