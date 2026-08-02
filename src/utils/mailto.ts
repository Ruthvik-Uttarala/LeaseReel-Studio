import { MailIntent } from "../content/site";

export function createMailtoHref(intent: MailIntent): string {
  const params = new URLSearchParams({ subject: intent.subject, body: intent.body });
  return `mailto:${encodeURIComponent(intent.to)}?${params.toString()}`;
}
