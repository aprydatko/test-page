"use client";

import { useEffect, useRef, useState } from "react";
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
import { AnimatePresence, motion } from "motion/react";
import { debounce } from "@/lib/utils";
// import Lenis from "lenis";

// export const metadata = {
// 	title: "Home",
// };

// const slides = [
// 	{ id: 1, color: "#1abc9c", text: "Slide 1" },
// 	{ id: 2, color: "#3498db", text: "Slide 2" },
// 	{ id: 3, color: "#9b59b6", text: "Slide 3" },
// 	{ id: 4, color: "#e67e22", text: "Slide 4" },
// 	{ id: 5, color: "#e74c3c", text: "Slide 5" },
// ];

const slides = [
	{ id: 1, color: "#1abc9c", name: "header" },
	{ id: 2, color: "#3498db", name: "cutting_edge" },
	{ id: 3, color: "#9b59b6", name: "brands" },
	{ id: 4, color: "#e67e22", name: "leaderboard" },
	{ id: 5, color: "#e74c3c", name: "community" },
	{ id: 6, color: "#e01c3c", name: "footer" },
];

const MAX_COUNT = 5;

const Homepage = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [activeScroll, setActiveScroll] = useState<string | "down" | "up">(
		"down"
	);
	const [slideIndex, setSlideIndex] = useState(0);
	const [activeSection, setActiveSection] = useState("header_first");
	const [nextState, setNextState] = useState(false);
	const [earthEffectConfig, setEarthEffectConfig] = useState<IEarthEffect>(
		effects["earth"].header_first
	);
	const [blueEffectConfig, setBlueEffectConfig] = useState<CustomEffectProps>(
		effects["blue"].header_first
	);
	const [orangeEffectConfig, setOrangeEffectConfig] =
		useState<CustomEffectProps>(effects["orange"].header_first);

	const wheel = (e: { deltaY: number }) => {
		const delta = e.deltaY;

		// Check max and min delta index
		if (
			(slideIndex === MAX_COUNT && delta > 0) ||
			(slideIndex === 0 && delta < 0)
		) {
			return;
		}

		const down = () => {
			setActiveSection(slides[slideIndex - 1].name);
			setSlideIndex(slideIndex - 1);
		};
		const up = () => {
			setActiveSection(slides[slideIndex + 1].name);
			setSlideIndex(slideIndex + 1);
		};
		const slide_down = debounce(down, 300);
		const slide_up = debounce(up, 300);

		// Scroll up or down
		if (delta < 0) {
			setActiveScroll("down");
			slide_down();
		}
		if (delta > 0) {
			setActiveScroll("up");
			slide_up();
		}
	};

	const updateEffects = (screen: string) => {
		if (screen === "header") {
			setEarthEffectConfig(effects["earth"].header_first);
			setBlueEffectConfig(effects["blue"].header_first);
			setOrangeEffectConfig(effects["orange"].header_first);
		}
		if (screen === "header_second") {
			setEarthEffectConfig(effects["earth"].header_second);
			setBlueEffectConfig(effects["blue"].header_second);
			setOrangeEffectConfig(effects["orange"].header_second);
		}
		if (screen === "cutting_edge") {
			setEarthEffectConfig(effects["earth"].cutting_edge);
			setBlueEffectConfig(effects["blue"].cutting_edge);
			setOrangeEffectConfig(effects["orange"].cutting_edge);
		}
		if (screen === "brands") {
			setEarthEffectConfig(effects["earth"].brands);
			setBlueEffectConfig(effects["blue"].brands);
			setOrangeEffectConfig(effects["orange"].brands);
		}
		if (screen === "leaderboard") {
			setEarthEffectConfig(effects["earth"].leaderboard);
			setOrangeEffectConfig(effects["orange"].leaderboard);
		}
	};

	useEffect(() => {
		console.log("activeSection", activeSection);
		updateEffects(activeSection);
	}, [activeSection]);

	// useEffect(() => {
	// 	const lenis = new Lenis();
	// 	function raf(time: number) {
	// 		lenis.raf(time);
	// 		requestAnimationFrame(raf);
	// 	}

	// 	requestAnimationFrame(raf);
	// }, []);

	const handleNextState = () => {
		setNextState(true);
		setActiveSection("header_second");
		// setEarthEffectConfig(effects["earth"].header_second);
		// setBlueEffectConfig(effects["blue"].header_second);
		// setOrangeEffectConfig(effects["orange"].header_second);
	};

	const checkHideEffect = (effect: string) => {
		switch (effect) {
			case "earth":
				return (
					activeSection === "community" || activeSection === "footer"
				);
			case "blue":
				return (
					activeSection === "leaderboard" ||
					activeSection === "community" ||
					activeSection === "footer"
				);
			case "orange":
				return (
					activeSection === "community" || activeSection === "footer"
				);
		}
	};

	return (
		// <div className="h-[600vh] relative container m-auto overflow-clip">
		<div className="@9xl/wrapper:mx-[5rem] @7xl/wrapper:mx-[4rem] @5xl/wrapper:mx-[2rem] @xs/wrapper:mx-[1rem]">
			{/* Effects */}
			<EarthEffect
				hide={checkHideEffect("earth")}
				{...earthEffectConfig}
			/>
			<CustomEffect
				hide={checkHideEffect("blue")}
				width={504.81}
				height={795.74}
				name="blue"
				{...blueEffectConfig}
			/>{" "}
			<CustomEffect
				hide={checkHideEffect("orange")}
				width={504.81}
				height={795.74}
				name="orange"
				{...orangeEffectConfig}
			/>
			{/* Sections */}
			{/* <Header nextState={nextState} setNextState={setNextState} />
			<CuttingEdge />
			<Brands />
			<Leaderboard />
			<Community />
			<Footer /> */}
			<AnimatePresence mode="wait">
				<motion.div
					ref={ref}
					onWheel={wheel}
					key={slides[slideIndex].id}
					initial={{ y: activeScroll === "up" ? "100%" : "0%" }}
					animate={{ y: 0 }}
					exit={{ y: activeScroll === "up" ? "-100%" : "100%" }}
					transition={{ duration: 0.6, ease: "easeInOut" }}
					// style={{
					// 	position: "absolute",
					// 	top: 0,
					// 	left: 0,
					// 	width: "100%",
					// 	height: "100%",
					// 	background: slides[slideIndex].color,
					// 	display: "flex",
					// 	alignItems: "center",
					// 	justifyContent: "center",
					// 	fontSize: "4rem",
					// 	color: "white",
					// }}
				>
					{slides[slideIndex].name === "header" && (
						<Header
							nextState={nextState}
							setNextState={handleNextState}
						/>
					)}
					{slides[slideIndex].name === "cutting_edge" && (
						<CuttingEdge />
					)}
					{slides[slideIndex].name === "brands" && <Brands />}
					{slides[slideIndex].name === "leaderboard" && (
						<Leaderboard />
					)}
					{slides[slideIndex].name === "community" && <Community />}
					{slides[slideIndex].name === "footer" && <Footer />}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

/* 

	<AnimatePresence mode="wait">
				<motion.div
					ref={ref}
					onWheel={wheel}
					key={slides[slideIndex].id}
					initial={{ y: "10%" }}
					animate={{ y: 0 }}
					exit={{ y: "-100%" }}
					transition={{ duration: 0.6, ease: "easeInOut" }}
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						background: slides[slideIndex].color,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: "4rem",
						color: "white",
					}}
				>
					{slides[slideIndex].text}
				</motion.div>
			</AnimatePresence>

*/

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
