import { test, expect } from "@playwright/test";
import { disableAnimations, waitForPageReady, goto } from "../helpers/test-utils";

const viewports = [
  { name: "mobile-small", width: 320, height: 568 },
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1024, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
];

test.describe("Responsive Layout", () => {
  for (const vp of viewports) {
    test(`layout at ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await goto(page);
      await waitForPageReady(page);
      await disableAnimations(page);
      await expect(page).toHaveScreenshot(`responsive-${vp.name}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.03,
      });
    });
  }
});
