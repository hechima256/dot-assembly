import mongoose from "mongoose";

// PixelArtSchemaは1ピクセルのドット絵を管理します。
const PixelArtSchema = new mongoose.Schema(
	{
		color: { type: String, required: true }, // 現在の色コード（例: "#FF5733"）
		colorHistory: [
			{
				color: { type: String, required: true }, // 色コード（例: "#FF5733"）
				timestamp: { type: Date, required: true }, // 色が変更された日時
			},
		],
	},
	{ timestamps: true },
);

export const PixelArt = mongoose.model("PixelArt", PixelArtSchema);
