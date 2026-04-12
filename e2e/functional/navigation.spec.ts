import { test, expect } from "@playwright/test";
import { goto } from "../helpers/test-utils";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await goto(page);
  });

  test("navbar is visible and sticky", async ({ page }) => {
    const nav = page.locator("nav").first();
    await expect(nav).toBeVisible();
    await page.evaluate(() => window.scrollBy(0, 1000));
    await page.waitForTimeout(300);
    await expect(nav).toBeVisible();
    const box = await nav.boundingBox();
    expect(box?.y).toBeLessThanOrEqual(10);
  });

  test("all nav section links exist", async ({ page }) => {
    const sections = ["experience", "research", "technical-projects", "skills", "education", "certifications", "contact"];
    for (const id of sections) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });
});

test.describe("Mobile Navigation", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("hamburger menu opens and closes", async ({ page }) => {
    await goto(page);
    const hamburger = page.locator('[data-testid="mobile-menu-toggle"]');
    await expect(hamburger).toBeVisible();

    // Use force:true in case container intercepts pointer events on mobile
    await hamburger.click({ force: true });
    const mobileMenu = page.locator('[data-testid="mobile-menu"]');
    await expect(mobileMenu).toBeVisible();

    // Click outside to close
    await page.locator("body").click({ position: { x: 10, y: 200 } });
    await page.waitForTimeout(400);
    await expect(mobileMenu).not.toBeVisible();
  });

  test("mobile menu links are minimum 44px height", async ({ page }) => {
    await goto(page);
    await page.locator('[data-testid="mobile-menu-toggle"]').click({ force: true });
    await page.waitForTimeout(300);
    const links = page.locator('[data-testid="mobile-menu"] button');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const box = await links.nth(i).boundingBox();
      expect(box?.height).toBeGreaterThanOrEqual(44);
    }
  });
});
