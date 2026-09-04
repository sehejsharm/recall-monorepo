-- Recall: bound the two public feedback inboxes.
--
-- exam_requests and contact_messages accept inserts from anon with
-- `with check (true)` (migration 0002). That is intentional — the whole point
-- is unauthenticated "request an exam" / "contact us" — but with no length cap
-- an abuser holding the publishable key (which ships in the client, by design)
-- can insert arbitrarily large rows and run up storage cost. These CHECK
-- constraints put a ceiling on each free-text field without changing who may
-- write. The limits sit comfortably above the client's own maxlengths so no
-- legitimate submission is ever rejected.
--
-- Idempotent: drop-then-add so re-running is safe.

alter table public.exam_requests
  drop constraint if exists exam_requests_len,
  add constraint exam_requests_len
    check (char_length(exam_name) between 1 and 120 and char_length(note) <= 2000);

alter table public.contact_messages
  drop constraint if exists contact_messages_len,
  add constraint contact_messages_len
    check (
      char_length(message) between 1 and 4000
      and (email is null or char_length(email) <= 320)
    );
