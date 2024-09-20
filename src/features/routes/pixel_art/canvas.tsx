import { useEffect, useState } from "react";
import { pushColorDB } from "@/utils/updatedb";
import { Color, ColorTimestamp, Mode } from "@/app/page";

type ComponentProps = {
	mode: Mode;
	selectedColor: Color;
};

export default function Canvas({ mode, selectedColor }: ComponentProps) {
	const [currentColorInfo, setCurrentColorInfo] =
		useState<ColorTimestamp | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchArtData = async () => {
			const response = await fetch("/api/pixelart");
			const resjson = await response.json();
			if (!response.ok) {
				setError(resjson.message);
				return;
			}
			setCurrentColorInfo(resjson.latestColorInfo);
		};

		fetchArtData();
	}, []);

	const paintColor = async (color: Color) => {
		if (color === currentColorInfo?.color) return;
		const prevColorInfo = currentColorInfo;
		setCurrentColorInfo({ color: color, timestamp: new Date() });
		try {
			await pushColorDB(color);
		} catch (error) {
			setCurrentColorInfo(prevColorInfo);
			console.error("更新に失敗しました。", error);
		}
	};

	if (error) {
		return (
			<div className="w-screen h-screen flex items-center justify-center">
				<div>
					<p className="text-4xl text-red-600">エラー: {error}</p>
				</div>
			</div>
		);
	}
	if (currentColorInfo) {
		return (
			<div
				className="w-screen h-screen flex items-center justify-center"
				style={{ backgroundColor: currentColorInfo?.color }} // Tailwindでは直接スタイルを設定
				onClick={() => {
					if (mode === "draw") {
						paintColor(selectedColor);
					} else if (mode === "view") {
						// 何もしない
					} else {
						console.error("Wrong mode.");
					}
				}}
			>
				{mode === "view" && (
					<div>
						<h2 className="text-xl">最終更新</h2>
						<p className="text-4xl">
							{new Date(
								currentColorInfo.timestamp,
							).toLocaleString("ja-JP", {
								timeZone: "Asia/Tokyo",
							})}
						</p>
					</div>
				)}
			</div>
		);
	} else {
		return (
			<div className="w-screen h-screen flex items-center justify-center">
				<div>
					<p className="text-4xl">Loading...</p>
				</div>
			</div>
		);
	}
}
