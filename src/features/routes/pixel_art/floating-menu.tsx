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
	const [selectedColor, setSelectedColor] = useState<Color>(Color.White);

	const handleModeChange = (newMode: "view" | "draw") => {
		setMode(newMode);
	};

	const handleColorChange = (newColor: Color) => {
		setSelectedColor(newColor);
	};

	return (
		<div className="h-20 absolute bottom-0 w-full bg-gray-800 text-white flex items-center justify-between py-4">
			<div className="mx-2 flex space-x-2 overflow-x-scroll items-center">
				{Object.values(Color).map((color) => (
					<div
						key={color}
						className={`flex-shrink-0 size-10 rounded-xl cursor-pointer relative transition-all ${
							color === selectedColor ? "size-12" : ""
						}`}
						style={{ backgroundColor: color }}
						onClick={() => {
							handleColorChange(color);
						}}
					/>
				))}
			</div>

			{/* Mode Switch Buttons */}
			<div className="mr-2 flex justify-center">
				<button
					className={`px-4 py-2 rounded-lg text-sm md:text-base ${
						mode === "view" ? "bg-blue-500" : "bg-gray-500"
					} w-auto`}
					onClick={() => handleModeChange("view")}
				>
					View
				</button>
				<button
					className={`ml-1 px-4 py-2 rounded-lg text-sm md:text-base ${
						mode === "draw" ? "bg-blue-500" : "bg-gray-500"
					} w-auto`}
					onClick={() => handleModeChange("draw")}
				>
					Draw
				</button>
			</div>
		</div>
	);
}
