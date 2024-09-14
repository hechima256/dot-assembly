import { Colors } from "@/constants/colors";
import { Color, Mode } from "./art-area";

type ComponentProps = {
	mode: Mode;
	setMode: React.Dispatch<React.SetStateAction<Mode>>;
	selectedColor: Color;
	setSelectedColor: React.Dispatch<React.SetStateAction<Color>>;
};

export default function FloatingMenu({
	mode,
	setMode,
	selectedColor,
	setSelectedColor,
}: ComponentProps) {
	const handleModeChange = (newMode: "view" | "draw") => {
		setMode(newMode);
	};

	const handleColorChange = (newColor: Color) => {
		setSelectedColor(newColor);
	};

	return (
		<div className="h-14 absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center space-x-3 px-1 sm:px-3">
			{/* カラーピッカー */}
			<div className="h-full flex space-x-2 overflow-x-scroll items-center rounded-3xl bg-white bg-opacity-40 px-2 shadow-lg">
				{Object.values(Colors).map((color) => (
					<div
						key={color}
						className={`flex-shrink-0 w-10 h-10 rounded-full cursor-pointer transition-all ${
							color === selectedColor ? "w-12 h-12" : ""
						}`}
						style={{ backgroundColor: color }}
						onClick={() => handleColorChange(color)}
					/>
				))}
			</div>

			{/* モード切り替えボタン */}
			<div className="h-full flex items-center space-x-1 text-white bg-white bg-opacity-40 px-2 rounded-2xl shadow-lg">
				<button
					className={`h-10 px-3 py-2 rounded-xl text-sm ${
						mode === "view"
							? "bg-blue-500"
							: "bg-gray-200 text-black"
					}`}
					onClick={() => handleModeChange("view")}
				>
					View
				</button>
				<button
					className={`h-10 px-3 py-2 rounded-xl text-sm ${
						mode === "draw"
							? "bg-blue-500"
							: "bg-gray-200 text-black"
					}`}
					onClick={() => handleModeChange("draw")}
				>
					Draw
				</button>
			</div>
		</div>
	);
}
