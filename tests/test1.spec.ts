import { test, expect } from "@playwright/test";

test("画面クリック時に最終更新が表示される", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page.locator("div").first().click();
	await expect(page.getByRole("heading", { name: "最終更新" })).toBeVisible();
});

test("クリック時に更新日時が表示される", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page.locator("div").first().click();
	await expect(page.getByText("/9/1 17:36:00")).toBeVisible();
});
