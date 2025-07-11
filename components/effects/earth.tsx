import { motion } from "framer-motion";

export interface IEarthEffect {
	top: number;
	right: number;
	transform?: string;
}

const EarthEffect = ({ top, right, transform }: IEarthEffect) => {
	const customTransform = transform
		? transform
		: "matrix(-1, -0.05, -0.05, 1, 0, 0)";
	return (
		<motion.div
			initial={{
				right: `${right}px`,
				top: `${top}px`,
				transform: `${customTransform}`,
			}}
			animate={{
				top: `${top}px`,
				right: `${right}px`,
				transform: `${customTransform}`,
			}}
			transition={{ duration: 0.5 }}
			className="absolute w-[1016px] h-[1016px]"
			style={{
				top: `${top}px`,
				right: `${right}px`,
				backgroundImage: "url('/images/earth.png')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "1016px 1016px",
				backgroundPosition: "50% 50%",
			}}
		>
			Earch
		</motion.div>
	);
};

export default EarthEffect;
