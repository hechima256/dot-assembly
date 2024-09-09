"use client";

import { useState } from "react";
enum Color {
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

export default function FloatingMenu() {
	const [mode, setMode] = useState<"view" | "draw">("view"); // Track the current mode

	const handleModeChange = (newMode: "view" | "draw") => {
		setMode(newMode);
	};

	return (
		<div className="absolute bottom-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between">
			<div className="flex space-x-4">
				{/* Color Palette (Example colors based on image) */}
				<div className="w-10 h-10 bg-red-500 rounded-full cursor-pointer"></div>
				<div className="w-10 h-10 bg-green-500 rounded-full cursor-pointer"></div>
				<div className="w-10 h-10 bg-yellow-500 rounded-full cursor-pointer"></div>
			</div>

			{/* Display current mode */}
			<div className="text-lg">
				{mode === "view" ? "Viewing Mode" : "Drawing Mode"}
			</div>

			{/* Mode Switch Buttons */}
			<div>
				<button
					className={`px-4 py-2 mx-2 rounded-lg ${mode === "view" ? "bg-blue-500" : "bg-gray-500"}`}
					onClick={() => handleModeChange("view")}
				>
					View Mode
				</button>
				<button
					className={`px-4 py-2 mx-2 rounded-lg ${mode === "draw" ? "bg-blue-500" : "bg-gray-500"}`}
					onClick={() => handleModeChange("draw")}
				>
					Draw Mode
				</button>
			</div>
		</div>
	);
}
