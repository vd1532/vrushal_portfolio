import { test, expect } from "@playwright/test";
import { goto } from "../helpers/test-utils";

test.describe("Resume Download", () => {
  test("resume link exists and points to PDF", async ({ page }) => {
    await goto(page);

    const resumeLink = page.locator('a[href*="resume"]').first();
    await expect(resumeLink).toBeVisible();
    const href = await resumeLink.getAttribute("href");
    expect(href).toMatch(/resume/i);
  });

  test("resume PDF download triggers download event", async ({ page }) => {
    await goto(page);

    const downloadPromise = page.waitForEvent("download");
    await page.locator('a[download]').first().click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/\.pdf$/i);
  });
});
