"use client";

import { useState } from "react";
import Canvas from "./canvas";
import FloatingMenu from "./floating-menu";
import { Colors } from "@/constants/colors";

export type Color = (typeof Colors)[keyof typeof Colors];

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
	const [selectedColor, setSelectedColor] = useState<Color>(Colors.Red);

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
