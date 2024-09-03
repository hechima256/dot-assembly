import { PixelArt } from "@/models/PixelArt";
import connectDB from "@/utils/mongodb";

// サーバーコンポーネントでデータを取得
export default async function Home() {
	try {
		await connectDB(); // MongoDBに接続

		// 最新のPixelArtドキュメントを1つ取得
		const pixelArt = await PixelArt.findOne().lean();

		if (!pixelArt) {
			return (
				<div className="text-center text-red-500">
					No Pixel Art found
				</div>
			);
		}
		const lastColor = pixelArt.colorHistory[0];
		return (
			<div
				className="w-screen h-screen flex items-center justify-center"
				style={{ backgroundColor: pixelArt.color }} // Tailwindでは直接スタイルを設定
			>
				<p className="text-4xl">
					{new Date(lastColor.timestamp).toLocaleDateString()}
				</p>
			</div>
		);
	} catch (error) {
		console.error("Error fetching pixel art:", error);
		return (
			<div className="text-center text-red-500">
				Failed to load Pixel Art
			</div>
		);
	}
}
