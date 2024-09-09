import Canvas from "./canvas";
import FloatingMenu from "./floating-menu";

export type ColorTimestampProps = {
	color: string;
	timestamp: Date;
};

export default function ArtArea({
	latestColor,
}: {
	latestColor: ColorTimestampProps;
}) {
	return (
		<div>
			<Canvas latestColor={latestColor} />
			<FloatingMenu />
		</div>
	);
}
