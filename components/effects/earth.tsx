import { motion } from "framer-motion";

export interface IEarthEffect {
	hide?: boolean;
	top: number;
	right: number;
	transform?: string;
}

const EarthEffect = ({ top, right, transform, hide = false }: IEarthEffect) => {
	const customTransform = transform
		? transform
		: "matrix(-1, -0.05, -0.05, 1, 0, 0)";

	console.log("top", top);
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
			transition={{ duration: 0.8 }}
			className="absolute w-[1016px] h-[1016px]"
			style={{
				opacity: hide ? "0" : "1",
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
