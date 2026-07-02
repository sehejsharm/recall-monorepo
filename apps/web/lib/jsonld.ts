/**
 * Serialise structured data for a `<script type="application/ld+json">` tag.
 *
 * `JSON.stringify` alone is unsafe inside a `<script>` element: a literal
 * `</script>` (or `<!--`) in any string value would close the tag early and
 * allow markup injection. Escaping `<`, `>` and `&` to their unicode escapes
 * keeps the JSON valid while making script-breakout impossible — defence in
 * depth even though our JSON-LD is built from app-authored content today.
 */
export function jsonLdHtml(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}
