"use client";

import { useState } from "react";
import Canvas from "./canvas";
import FloatingMenu from "./floating-menu";

export enum Color {
	Red = "#FF4500",
	Orange = "#FFA800",
	Yellow = "#FFD635",
	DarkGreen = "#00A368",
	LightGreen = "#7EED56",
	DarkBlue = "#2450A4",
	Blue = "#3690EA",
	LightBlue = "#51E9F4",
	DarkPurple = "#811E9F",
	Purple = "#B44AC0",
	LightPink = "#FF99AA",
	Brown = "#9C6926",
	White = "#FFFFFF",
	LightGray = "#D4D7D9",
	Gray = "#898D90",
	Black = "#000000",
}

export type ColorTimestamp = {
	color: string;
	timestamp: Date;
};
export type Mode = "view" | "draw";

export default function ArtArea({
	latestColorInfo,
}: {
	latestColorInfo: ColorTimestamp;
}) {
	const [mode, setMode] = useState<Mode>("view"); // Track the current mode
	const [selectedColor, setSelectedColor] = useState<Color>(Color.Red);

	return (
		<div className="w-screen h-screen">
			<Canvas
				latestColorInfo={latestColorInfo}
				mode={mode}
				selectedColor={selectedColor}
			/>
			<FloatingMenu
				mode={mode}
				setMode={setMode}
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/>
		</div>
	);
}
