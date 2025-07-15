import { motion } from "framer-motion";

export interface IMoonEffect {
	hide?: boolean;
	top?: number | string;
}

const MoonEffect = ({ top, hide = false }: IMoonEffect) => {
	return (
		<motion.div
			initial={{
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			}}
			animate={{
				top: `${top}%`,
			}}
			transition={{ duration: 0.8 }}
			className="absolute w-[100%] h-[552px]"
			style={{
				opacity: hide ? "0" : "1",
				backgroundImage: "url('/images/footer_moon.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "0px 0px",
				backgroundSize: "cover",
			}}
		></motion.div>
	);
};

export default MoonEffect;
