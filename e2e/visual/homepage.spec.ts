import { test, expect } from "@playwright/test";
import { disableAnimations, waitForPageReady, setTheme, goto } from "../helpers/test-utils";

test.describe("Homepage Visual Regression", () => {
  test.beforeEach(async ({ page }) => {
    await goto(page);
    await waitForPageReady(page);
    await disableAnimations(page);
  });

  test("full page screenshot - light mode", async ({ page }) => {
    await setTheme(page, "light");
    await expect(page).toHaveScreenshot("homepage-light.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
    });
  });

  test("full page screenshot - dark mode", async ({ page }) => {
    await setTheme(page, "dark");
    await expect(page).toHaveScreenshot("homepage-dark.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
    });
  });
});
