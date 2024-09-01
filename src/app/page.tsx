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

		return (
			<div className="p-4">
				<h1 className="text-2xl font-bold mb-4">Current Pixel Art</h1>
				<div
					className="w-24 h-24"
					style={{ backgroundColor: pixelArt.color }} // Tailwindでは直接スタイルを設定
				/>
				<h2 className="text-xl font-semibold mt-4">Color History</h2>
				<ul className="mt-2 space-y-2">
					{pixelArt.colorHistory.map((entry, index) => (
						<li key={index} className="flex items-center">
							<span
								className="block w-5 h-5 mr-2"
								style={{ backgroundColor: entry.color }} // Tailwindでは直接スタイルを設定
							/>
							{new Date(entry.timestamp).toLocaleString()}
						</li>
					))}
				</ul>
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
