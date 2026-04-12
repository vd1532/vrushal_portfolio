import { test, expect } from "@playwright/test";
import { goto } from "../helpers/test-utils";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await goto(page);
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
  });

  test("all form fields are present and interactable", async ({ page }) => {
    await expect(page.locator('#contact input[name="name"]')).toBeVisible();
    await expect(page.locator('#contact input[name="email"]')).toBeVisible();
    await expect(page.locator('#contact textarea[name="message"]')).toBeVisible();
    await expect(page.locator('#contact button[type="submit"]')).toBeVisible();
  });

  test("shows validation errors for empty required fields on submit", async ({ page }) => {
    const submitBtn = page.locator('#contact button[type="submit"]');
    await submitBtn.click();

    const nameError = page.locator('#contact p').filter({ hasText: /required/i }).first();
    await expect(nameError).toBeVisible({ timeout: 3000 });
  });

  test("rejects invalid email format", async ({ page }) => {
    await page.fill('#contact input[name="name"]', "Test User");
    await page.fill('#contact input[name="email"]', "not-an-email");
    await page.fill('#contact textarea[name="message"]', "Test message");

    await page.locator('#contact button[type="submit"]').click();

    const emailError = page.locator('#contact p').filter({ hasText: /valid email/i }).first();
    await expect(emailError).toBeVisible({ timeout: 3000 });
  });

  test("user can fill out the form fields", async ({ page }) => {
    await page.fill('#contact input[name="name"]', "Jane Doe");
    await page.fill('#contact input[name="email"]', "jane@example.com");
    await page.fill('#contact input[name="subject"]', "Collaboration");
    await page.fill('#contact textarea[name="message"]', "Hello, I'd like to connect.");

    await expect(page.locator('#contact input[name="name"]')).toHaveValue("Jane Doe");
    await expect(page.locator('#contact input[name="email"]')).toHaveValue("jane@example.com");
    await expect(page.locator('#contact textarea[name="message"]')).toHaveValue(
      "Hello, I'd like to connect."
    );
  });
});
