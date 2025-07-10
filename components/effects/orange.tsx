interface OrangeEffectProps {
	top: number;
	left: number;
	width: number;
	height: number;
	rotate: number;
}

const OrangeEffect = ({
	top,
	left,
	width,
	height,
	rotate,
}: OrangeEffectProps) => {
	return (
		<div
			className={`absolute top-[${top}px] left-[${left}px] w-[${width}px] h-[${height}px] rotate-${rotate}`}
			style={{
				background: "var(--header-effect-one)",
				filter: "blur(200px)",
			}}
		></div>
	);
};

export default OrangeEffect;
