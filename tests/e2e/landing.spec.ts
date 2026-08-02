import { expect, test } from "@playwright/test";

test("homepage loads without console errors and exposes the core offer", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/");
  await expect(page).toHaveTitle(/Rental Property Videos From Existing Photos/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Turn listing photos");
  await expect(page.getByText("$149").first()).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://www.leasereelstudio.com/");
  expect(errors).toEqual([]);
});

test("navigation anchors, demo tabs, FAQ, and footer modal work", async ({ page }) => {
  await page.goto("/");

  const demoLink = page.getByRole("link", { name: "Demo" });
  if (await demoLink.isVisible()) {
    await demoLink.click();
  } else {
    await page.getByRole("button", { name: /Open menu/i }).click();
    await page.getByRole("dialog", { name: /Mobile navigation/i }).getByRole("link", { name: "Demo" }).click();
  }
  await expect(page.locator("#demo")).toBeInViewport();

  await page.getByRole("tab", { name: /Website Video/ }).click();
  await expect(page.getByRole("tabpanel")).toContainText("Property overview");

  await page.getByRole("button", { name: /What photographs do you need/i }).click();
  await expect(page.getByText(/8-15 clear/)).toBeVisible();

  await page.locator("footer").scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "Privacy" }).click({ force: true });
  await expect(page.getByRole("dialog", { name: "Privacy" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Privacy" })).toBeHidden();
});

test("mobile menu opens and page has no horizontal overflow at 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 760 });
  await page.goto("/");

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);

  await page.getByRole("button", { name: /Open menu/i }).click();
  await expect(page.getByRole("dialog", { name: /Mobile navigation/i })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: /Mobile navigation/i })).toBeHidden();
});

test("mailto CTAs point to the pilot inbox", async ({ page }) => {
  await page.goto("/");
  const href = await page.getByRole("link", { name: "Request the $149 pilot" }).getAttribute("href");
  expect(href).toContain("mailto:hello%40leasereelstudio.com");
  expect(href).toContain("LeaseReel+pilot+for+%5BProperty+Name%5D");
});
