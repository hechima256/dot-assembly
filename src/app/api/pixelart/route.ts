import { PixelArt } from "@/models/PixelArt";
import connectDB from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		await connectDB();
		const pixelArt = await PixelArt.findOne().lean();
		if (!pixelArt) {
			return NextResponse.json(
				{ status: "error", message: "絵が見つかりません" },
				{ status: 404 },
			);
		}

		const len = pixelArt.colorHistory.length;
		const lastColor = len > 0 ? pixelArt.colorHistory[len - 1] : null;
		delete lastColor?._id; // propsに渡すために除外
		if (!lastColor) {
			return NextResponse.json(
				{ status: "error", message: "絵の履歴がありません" },
				{ status: 404 },
			);
		}

		return NextResponse.json({ status: "success", data: lastColor });
	} catch (error) {
		console.error("Error in GET request:", error);

		return NextResponse.json(
			{ status: "error", message: "サーバーエラーが発生しました" },
			{ status: 500 },
		);
	}
}
