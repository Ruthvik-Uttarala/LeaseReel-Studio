import { describe, expect, it } from "vitest";
import { createMailtoHref } from "../utils/mailto";

describe("createMailtoHref", () => {
  it("encodes recipient, subject, and body", () => {
    const href = createMailtoHref({
      to: "hello@leasereelstudio.com",
      subject: "LeaseReel pilot for [Property Name]",
      body: "Property URL:\nNumber of available photos:"
    });

    expect(href).toContain("mailto:hello%40leasereelstudio.com");
    expect(href).toContain("subject=LeaseReel+pilot+for+%5BProperty+Name%5D");
    expect(href).toContain("body=Property+URL%3A%0ANumber+of+available+photos%3A");
  });
});
