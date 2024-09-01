import { PixelArt } from "@/models/PixelArt";
import connectDB from "@/utils/mongodb";

// サーバーコンポーネントでデータを取得
export default async function Home() {
	try {
		await connectDB(); // MongoDBに接続

		// 最新のPixelArtドキュメントを1つ取得
		const pixelArt = await PixelArt.findOne().lean();

		if (!pixelArt) {
			return <div>No Pixel Art found</div>;
		}

		return (
			<div>
				<h1>Current Pixel Art</h1>
				<div
					style={{
						width: "100px",
						height: "100px",
						backgroundColor: pixelArt.color, // 最新の色を背景色として使用
					}}
				/>
				<h2>Color History</h2>
				<ul>
					{pixelArt.colorHistory.map((entry, index) => (
						<li key={index}>
							<span
								style={{
									display: "inline-block",
									width: "20px",
									height: "20px",
									backgroundColor: entry.color,
									marginRight: "10px",
								}}
							/>
							{new Date(entry.timestamp).toLocaleString()}
						</li>
					))}
				</ul>
			</div>
		);
	} catch (error) {
		console.error("Error fetching pixel art:", error);
		return <div>Failed to load Pixel Art</div>;
	}
}
