"use client";

import { ColorTimestampProps } from "./art-area";
import { useState } from "react";

export default function Canvas({
	latestColor,
}: {
	latestColor: ColorTimestampProps;
}) {
	const [showHistory, setShowHistory] = useState<Boolean>(false);

	const toggleHistory = () => {
		setShowHistory(!showHistory);
	};

	return (
		<div
			className="w-screen h-screen flex items-center justify-center"
			style={{ backgroundColor: latestColor.color }} // Tailwindでは直接スタイルを設定
			onClick={toggleHistory}
		>
			{showHistory && (
				<div>
					<h2 className="text-xl">最終更新</h2>
					<p className="text-4xl">
						{new Date(latestColor.timestamp).toLocaleString()}
					</p>
				</div>
			)}
		</div>
	);
}
