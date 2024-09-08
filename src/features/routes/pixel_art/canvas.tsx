"use client";

import { ColorHistoryProps } from "./art-area";
import { useState } from "react";

export default function Canvas({
	colorHistory,
}: {
	colorHistory: ColorHistoryProps;
}) {
	const [showHistory, setShowHistory] = useState<Boolean>(false);

	const toggleHistory = () => {
		setShowHistory(!showHistory);
	};

	return (
		<div
			className="w-screen h-screen flex items-center justify-center"
			style={{ backgroundColor: colorHistory.color }} // Tailwindでは直接スタイルを設定
			onClick={toggleHistory}
		>
			{showHistory && (
				<div>
					<h2 className="text-xl">最終更新</h2>
					<p className="text-4xl">
						{new Date(colorHistory.timestamp).toLocaleString()}
					</p>
				</div>
			)}
		</div>
	);
}
