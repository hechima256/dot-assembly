import mongoose from "mongoose";

const PixelArtSchema = new mongoose.Schema(
	{
		color: { type: String, required: true },
		colorHistory: [
			{
				_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
				color: { type: String, required: true },
				timestamp: { type: Date, required: true },
			},
		],
	},
	{ timestamps: true },
);
PixelArtSchema.set("toJSON", {
	transform: (doc, ret) => {
		delete ret._id;
		return ret;
	},
});
// 既に定義されているか確認し、定義されていない場合にのみモデルを作成
function getModel() {
	return mongoose.model("PixelArt", PixelArtSchema);
}
export const PixelArt = (mongoose.models.PixelArt || getModel()) as ReturnType<
	typeof getModel
>;
