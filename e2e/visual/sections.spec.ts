import { test, expect } from "@playwright/test";
import { disableAnimations, waitForPageReady, goto } from "../helpers/test-utils";

const sections = [
  "experience",
  "research",
  "technical-projects",
  "skills",
  "education",
  "certifications",
  "contact",
];

test.describe("Section Visual Regression", () => {
  test.beforeEach(async ({ page }) => {
    await goto(page);
    await waitForPageReady(page);
    await disableAnimations(page);
  });

  for (const section of sections) {
    test(`section "${section}" matches baseline`, async ({ page }) => {
      const el = page.locator(`#${section}`);
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
      await expect(el).toHaveScreenshot(`section-${section}.png`, {
        maxDiffPixelRatio: 0.03,
      });
    });
  }
});
