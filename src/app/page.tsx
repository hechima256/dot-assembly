"use client";
import { Colors } from "@/constants/colors";
import Canvas from "@/features/routes/pixel_art/canvas";
import FloatingMenu from "@/features/routes/pixel_art/floating-menu";
import { PixelArt } from "@/models/PixelArt";
import connectDB from "@/utils/mongodb";
import { useEffect, useState } from "react";
export type Color = (typeof Colors)[keyof typeof Colors];

export type ColorTimestamp = {
	color: string;
	timestamp: Date;
};
export type Mode = "view" | "draw";

export default function ArtArea() {
	const [mode, setMode] = useState<Mode>("view"); // Track the current mode
	const [selectedColor, setSelectedColor] = useState<Color>(Colors.Red);

	return (
		<div className="w-screen h-screen">
			<Canvas mode={mode} selectedColor={selectedColor} />
			<FloatingMenu
				mode={mode}
				setMode={setMode}
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/>
		</div>
	);
}
