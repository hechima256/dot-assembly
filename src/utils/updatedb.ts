"use server";

import { Color } from "@/features/routes/pixel_art/art-area";
import { PixelArt } from "@/models/PixelArt";
import { Colors } from "@/constants/colors";

export const pushColorDB = async (color: Color) => {
	try {
		if (!Object.values(Colors).includes(color)) {
			// 色が選択肢の中から選ばれているかのバリデーション
			throw new Error("Invalid color");
		}

		const pixelArt = await PixelArt.findOne();
		if (!pixelArt) throw new Error("PixelArt not found");

		pixelArt.color = color;
		pixelArt.colorHistory.push({
			color: color,
			timestamp: new Date(),
		});
		await pixelArt.save();
	} catch (error) {
		console.error("on update error: ", error);
		throw new Error("色の更新に失敗しました");
	}
};
