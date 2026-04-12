import { test, expect } from "@playwright/test";
import { waitForPageReady, goto } from "../helpers/test-utils";

test.describe("Theme Toggle", () => {
  test("toggles between dark and light mode", async ({ page }) => {
    await goto(page);
    await waitForPageReady(page);

    const html = page.locator("html");
    const toggle = page.locator('[data-testid="theme-toggle"]');
    await expect(toggle).toBeVisible();

    // Use force:true to bypass pointer-events interception on mobile
    await toggle.click({ force: true });
    await page.waitForTimeout(400);
    const classAfterFirst = await html.getAttribute("class");

    await toggle.click({ force: true });
    await page.waitForTimeout(400);
    const classAfterSecond = await html.getAttribute("class");

    expect(classAfterFirst).not.toEqual(classAfterSecond);
  });

  test("theme persists after reload", async ({ page }) => {
    await goto(page);
    await waitForPageReady(page);

    const toggle = page.locator('[data-testid="theme-toggle"]');
    await toggle.click({ force: true });
    await page.waitForTimeout(400);

    const classBefore = await page.locator("html").getAttribute("class");

    await page.reload();
    await waitForPageReady(page);

    const classAfter = await page.locator("html").getAttribute("class");
    expect(classAfter).toContain(classBefore?.includes("dark") ? "dark" : "light");
  });
});
