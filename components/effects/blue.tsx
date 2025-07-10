interface BlueEffectProps {
	top: number;
	left: number;
	width: number;
	height: number;
	rotate: number;
}

const BlueEffect = ({ top, left, width, height, rotate }: BlueEffectProps) => {
	return (
		<div
			className={`absolute top-[${top}px] left-[${left}px] w-[${width}px] h-[${height}px] rotate-${rotate}`}
			style={{
				background: "var(--header-effect-one)",
				// filter: "blur(200px)",
			}}
		></div>
	);
};

export default BlueEffect;
