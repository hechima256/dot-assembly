import mongoose from "mongoose";

const PixelArtSchema = new mongoose.Schema(
	{
		color: { type: String, required: true },
		colorHistory: [
			{
				color: { type: String, required: true },
				timestamp: { type: Date, required: true },
			},
		],
	},
	{ timestamps: true },
);

// 既に定義されているか確認し、定義されていない場合にのみモデルを作成
export const PixelArt =
	mongoose.models.PixelArt || mongoose.model("PixelArt", PixelArtSchema);
