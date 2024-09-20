import { PixelArt } from "@/models/PixelArt";
import connectDB from "@/utils/mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // 暫定的処置。Next.js15でGETがキャッシュなしに修正されるらしい
export async function GET(request: Request) {
	try {
		await connectDB();
		const pixelArt = await PixelArt.findOne().lean();
		if (!pixelArt) {
			return Response.json(
				{ message: "絵が見つかりません" },
				{ status: 404 },
			);
		}

		const len = pixelArt.colorHistory.length;
		const lastColor = len > 0 ? pixelArt.colorHistory[len - 1] : null;
		delete lastColor?._id; // propsに渡すために除外
		if (!lastColor) {
			return Response.json(
				{ message: "絵の履歴がありません" },
				{ status: 404 },
			);
		}

		return Response.json({ latestColorInfo: lastColor }, { status: 200 });
	} catch (error) {
		console.error("Error in GET request:", error);

		return Response.json(
			{ message: "サーバーエラーが発生しました" },
			{ status: 500 },
		);
	}
}
