import { test, expect } from "@playwright/test";

test("アクセス時に最終更新が表示される", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await expect(page.getByRole("heading", { name: "最終更新" })).toBeVisible();
});

test("色が表示される", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await expect(page.locator(".h-full").first()).toBeVisible();
	await expect(page.locator("div:nth-child(3)")).toBeVisible();
	await expect(page.locator("div:nth-child(11)")).toBeVisible();
	await expect(page.locator("div:nth-child(16)")).toBeVisible();
});
