import ArtArea from "@/features/routes/pixel_art/art-area";
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
					絵が見つかりません。
				</div>
			);
		}
		const len = pixelArt.colorHistory.length;
		const lastColor = len > 0 ? pixelArt.colorHistory[len - 1] : null;
		return lastColor == null ? (
			<div>
				<p>履歴がありません。</p>
			</div>
		) : (
			<ArtArea latestColor={lastColor} />
		);
	} catch (error) {
		console.error("Error fetching pixel art:", error);
		return (
			<div className="text-center text-red-500">
				絵の取得に失敗しました。
			</div>
		);
	}
}
