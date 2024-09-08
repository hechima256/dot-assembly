import Canvas from "./canvas";
import FloatingMenu from "./floating-menu";

export type ColorHistoryProps = {
	color: string;
	timestamp: Date;
};

export default function ArtArea({
	colorHistory,
}: {
	colorHistory: ColorHistoryProps;
}) {
	return (
		<div>
			<Canvas colorHistory={colorHistory} />
			<FloatingMenu />
		</div>
	);
}
