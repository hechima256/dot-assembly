import { test, expect } from "@playwright/test";

test("drawモードクリックで最終更新が消える", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page.getByRole("button", { name: "Draw" }).click();
	await expect(page.getByRole("heading", { name: "最終更新" })).toBeHidden();
	await page.getByRole("button", { name: "View" }).click();
	await expect(page.getByRole("heading", { name: "最終更新" })).toBeVisible();
});

test("色の更新チェック", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page.getByRole("button", { name: "Draw" }).click();

	const pinkElement = page.locator("div:nth-child(11)");
	await pinkElement.click();
	const drawColor = await pinkElement.evaluate(
		(el) => window.getComputedStyle(el).backgroundColor,
	);
	const artElement = page.locator(".w-screen > .w-screen");
	await artElement.click();
	const artColor = await artElement.evaluate(
		(el) => window.getComputedStyle(el).backgroundColor,
	);
	console.log(artColor);

	expect(artColor).toBe(drawColor);

	// リロード後に保持されているか
	await page.goto("http://localhost:3000/");
	const reloadArtColor = await artElement.evaluate(
		(el) => window.getComputedStyle(el).backgroundColor,
	);
	expect(reloadArtColor).toBe(drawColor);
});
