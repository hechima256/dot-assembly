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
		<div className="h-20 absolute bottom-0 w-full bg-gray-800 text-white flex items-center justify-between py-4">
			<div className="mx-2 flex space-x-2 overflow-x-scroll items-center">
				{Object.values(Colors).map((color) => (
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
