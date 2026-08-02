import { AnchorHTMLAttributes, ReactNode } from "react";
import { MailIntent } from "../content/site";
import { createMailtoHref } from "../utils/mailto";

type MailtoLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  intent: MailIntent;
  children: ReactNode;
};

export function MailtoLink({ intent, children, ...props }: MailtoLinkProps) {
  return (
    <a href={createMailtoHref(intent)} {...props}>
      {children}
    </a>
  );
}
