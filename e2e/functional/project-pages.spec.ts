import { test, expect } from "@playwright/test";
import { disableAnimations, waitForPageReady, goto, BASE_PATH } from "../helpers/test-utils";

const projectSlugs = [
  "tolerogenic-lysops-nanoparticles",
  "enzymatic-synthesis-perfumery-esters",
  "green-synthesis-schiffs-base",
];

test.describe("Project Detail Pages", () => {
  for (const slug of projectSlugs) {
    test(`project page "${slug}" loads and has content`, async ({ page }) => {
      await page.goto(`${BASE_PATH}/projects/${slug}/`);
      await waitForPageReady(page);

      await expect(page.locator("h1")).toBeVisible();
      const content = await page.textContent("main");
      expect(content?.length).toBeGreaterThan(100);

      const backLink = page.locator('a').filter({ hasText: /back/i }).first();
      await expect(backLink).toBeVisible();
    });
  }

  test('clicking "View Details" from homepage navigates to project page', async ({ page }) => {
    await goto(page);
    await waitForPageReady(page);

    const projectLink = page.locator('#research a[href*="/projects/"]').first();
    await projectLink.scrollIntoViewIfNeeded();
    await projectLink.click();
    await page.waitForURL(/\/projects\//);

    await expect(page.locator("h1")).toBeVisible();
  });
});
