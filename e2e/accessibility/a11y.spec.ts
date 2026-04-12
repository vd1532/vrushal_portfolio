import { test, expect } from "@playwright/test";
import { waitForPageReady, goto, BASE_PATH } from "../helpers/test-utils";

test.describe("Accessibility", () => {
  test("page has exactly one h1", async ({ page }) => {
    await goto(page);
    await waitForPageReady(page);
    await expect(page.locator("h1")).toHaveCount(1);
  });

  test("page has multiple h2 section headings", async ({ page }) => {
    await goto(page);
    await waitForPageReady(page);
    const h2Count = await page.locator("h2").count();
    expect(h2Count).toBeGreaterThanOrEqual(4);
  });

  test("all images have alt text", async ({ page }) => {
    await goto(page);
    await waitForPageReady(page);
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("theme toggle has accessible label", async ({ page }) => {
    await goto(page);
    await waitForPageReady(page);
    const toggle = page.locator('[data-testid="theme-toggle"]');
    const ariaLabel = await toggle.getAttribute("aria-label");
    expect(ariaLabel).toBeTruthy();
  });

  test("interactive elements are focusable via keyboard", async ({ page }) => {
    await goto(page);
    await page.keyboard.press("Tab");
    const focused = page.locator(":focus");
    await expect(focused).toBeVisible();
  });

  test("project detail page h1 is visible", async ({ page }) => {
    await page.goto(`${BASE_PATH}/projects/tolerogenic-lysops-nanoparticles/`);
    await waitForPageReady(page);
    await expect(page.locator("h1")).toBeVisible();
  });
});
