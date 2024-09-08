"use client";

import { useState } from "react";

export default function FloatingMenu() {
	const [mode, setMode] = useState<"view" | "draw">("view"); // Track the current mode

	const handleModeChange = (newMode: "view" | "draw") => {
		setMode(newMode);
	};

	return (
		<div className="absolute bottom-0 w-full bg-gray-800 text-white flex items-center justify-between p-4">
			<div className="flex space-x-4">
				{/* Color Palette (Dummy colors for example) */}
				<div className="w-10 h-10 bg-red-500 cursor-pointer"></div>
				<div className="w-10 h-10 bg-green-500 cursor-pointer"></div>
				<div className="w-10 h-10 bg-blue-500 cursor-pointer"></div>
			</div>
			<div>
				<button
					className={`px-4 py-2 rounded-lg ${mode === "view" ? "bg-blue-500" : "bg-gray-500"}`}
					onClick={() => handleModeChange("view")}
				>
					View Mode
				</button>
				<button
					className={`px-4 py-2 rounded-lg ${mode === "draw" ? "bg-blue-500" : "bg-gray-500"}`}
					onClick={() => handleModeChange("draw")}
				>
					Draw Mode
				</button>
			</div>
		</div>
	);
}
