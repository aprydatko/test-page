"use client";

import { useState } from "react";
import CuttingEdge from "@/components/shared/section-cutting-edge";
import Header from "@/components/shared/header";
import EarthEffect, { IEarthEffect } from "@/components/effects/earth";
import { effects } from "@/lib/config";
import CustomEffect, {
	CustomEffectProps,
} from "@/components/effects/customEffect";
import Brands from "@/components/shared/brands";
import Leaderboard from "@/components/shared/leaderboard";
import Community from "@/components/shared/community";
import Footer from "@/components/shared/footer";

// export const metadata = {
// 	title: "Home",
// };

const Homepage = () => {
	const [activeSection, setActiveSection] = useState("header_start");
	const [nextState, setNextState] = useState(false);
	const [earthEffectConfig, setEarthEffectConfig] = useState<IEarthEffect>(
		effects["earth"].header_first
	);
	const [blueEffectConfig, setBlueEffectConfig] = useState<CustomEffectProps>(
		effects["blue"].header_first
	);
	const [orangeEffectConfig, setOrangeEffectConfig] =
		useState<CustomEffectProps>(effects["orange"].header_first);

	return (
		// <div className="h-[600vh] relative container m-auto overflow-clip">
		<div className="@9xl/wrapper:mx-[5rem] @7xl/wrapper:mx-[4rem] @5xl/wrapper:mx-[2rem] @xs/wrapper:mx-[1rem]">
			{/* Effects */}
			{/* <EarthEffect {...earthEffectConfig} />
			<CustomEffect name="blue" {...blueEffectConfig} />
			<CustomEffect name="orange" {...orangeEffectConfig} /> */}
			{/* Sections */}
			<Header nextState={nextState} setNextState={setNextState} />
			<CuttingEdge />
			<Brands />
			<Leaderboard />
			<Community />
			<Footer />
		</div>
	);
};

// function ParallaxSection({ bg, text }) {
// 	const ref = useRef(null);
// 	const { scrollYProgress } = useScroll({
// 		target: ref,
// 		offset: ["start end", "end start"],
// 	});

// 	// Элементы двигаются по-разному
// 	const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
// 	const yForeground = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

// 	return (
// 		<section
// 			ref={ref}
// 			style={{
// 				height: "100vh",
// 				position: "relative",
// 				overflow: "hidden",
// 			}}
// 		>
// 			<motion.div
// 				style={{
// 					y: yBackground,
// 					position: "absolute",
// 					top: 0,
// 					left: 0,
// 					width: "100%",
// 					height: "100%",
// 					backgroundImage: `url(${bg})`,
// 					backgroundSize: "cover",
// 					zIndex: 1,
// 				}}
// 			/>
// 			<motion.div
// 				style={{
// 					// y: yForeground,
// 					position: "absolute",
// 					top: 0,
// 					left: 0,
// 					width: "100%",
// 					height: "100%",
// 					display: "flex",
// 					alignItems: "center",
// 					justifyContent: "center",
// 					zIndex: 2,
// 					color: "white",
// 					fontSize: "4rem",
// 				}}
// 			>
// 				<h1>{text}</h1>
// 			</motion.div>
// 		</section>
// 	);
// }

export default Homepage;
