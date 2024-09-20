"use server";

import { PixelArt } from "@/models/PixelArt";
import { Colors } from "@/constants/colors";
import connectDB from "./mongodb";
import { Color } from "@/app/page";

export const pushColorDB = async (color: Color) => {
	try {
		if (!Object.values(Colors).includes(color)) {
			// 色が選択肢の中から選ばれているかのバリデーション
			throw new Error("Invalid color");
		}
		await connectDB();
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
