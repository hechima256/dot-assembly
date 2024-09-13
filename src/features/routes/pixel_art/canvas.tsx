import { Color, ColorTimestamp, Mode } from "./art-area";
import { useState } from "react";

type ComponentProps = {
	latestColorInfo: ColorTimestamp;
	mode: Mode;
	selectedColor: Color;
};

export default function Canvas({
	latestColorInfo,
	mode,
	selectedColor,
}: ComponentProps) {
	const [currentColorInfo, setCurrentColorInfo] =
		useState<ColorTimestamp>(latestColorInfo);

	const paintColor = (color: Color) => {
		if (color === currentColorInfo.color) return;
		const now = new Date();
		setCurrentColorInfo({ color: color, timestamp: now });
	};

	return (
		<div
			className="w-screen h-screen flex items-center justify-center"
			style={{ backgroundColor: currentColorInfo.color }} // Tailwindでは直接スタイルを設定
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
						{new Date(currentColorInfo.timestamp).toLocaleString()}
					</p>
				</div>
			)}
		</div>
	);
}
