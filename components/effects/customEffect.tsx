import { motion } from "motion/react";

export interface CustomEffectProps {
	top: number;
	left: number;
	width?: number;
	height?: number;
	transform: number;
	name?: string;
	opacity?: number;
	hide?: boolean;
	className?: string;
}

const CustomEffect = ({
	top,
	left,
	width,
	height,
	transform,
	name,
	opacity,
	hide,
	className = "",
}: CustomEffectProps) => {
	return (
		<motion.div
			initial={{
				left: `${left}px`,
				top: `${top}px`,
				transform: `rotate(${transform}deg)`,
			}}
			animate={{
				left: `${left}px`,
				top: `${top}px`,
				transform: `rotate(${transform}deg)`,
			}}
			transition={{ duration: 0.8 }}
			className={`absolute z-10 ${className}`}
			style={{
				width: `${width}px`,
				height: `${height}px`,
				background: `var(--header-effect-${name})`,
				filter: "blur(100px)",
				opacity: hide ? "0" : opacity,
			}}
		></motion.div>
	);
};

export default CustomEffect;
