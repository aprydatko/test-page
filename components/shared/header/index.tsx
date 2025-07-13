"use client";

import { useRef, useState } from "react";
import {
	AnimatePresence,
	motion,
	MotionValue,
	useScroll,
	useTransform,
} from "motion/react";
import Button from "@/components/ui/button";
import Achievements from "@/components/shared/achivments";
import { achievements } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const Header = ({
	nextState,
	setNextState,
}: {
	nextState: boolean;
	setNextState: (nextState: boolean) => void;
}) => {
	const ref = useRef(null);
	const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 100);

	return (
		<header
			id="header-seaction"
			className="h-screen relative overflow-clip"
			style={{ scrollSnapAlign: "start" }}
			ref={ref}
		>
			<div className="relative m-auto z-20">
				<div className="pt-4 sm:pt-8 gap-[1rem] sm:gap-[1.5rem] flex flex-row items-center justify-center">
					<Button state="link">LLM Leaderboard</Button>
					<Button>Buy Salt AI</Button>
				</div>
			</div>
			<motion.div
				style={{
					maxWidth: nextState ? "1591px" : "1632px",
				}}
				className="relative z-20"
			>
				<motion.div
					animate={{ y: nextState ? (isMobile ? -120 : -140) : 0 }}
					transition={{ duration: 0.5 }}
					className="relative translate-y-[142px] md:translate-y-[242px]"
				>
					<h1
						className={`${
							nextState ? "light 2xl:text-[125px]" : ""
						} 2xl:text-9xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl`}
					>
						A new economic primitive for funding decentralized AI
					</h1>
					<motion.p
						style={{
							marginTop: nextState ? "2.25rem" : "",
							marginBottom: nextState ? "2.25rem" : "",
						}}
					>
						We track, rank and pay for the best open source
						decentralized LLMs to compete against OpenAI
					</motion.p>
					<div className="flex flex-row items-center justify-start">
						<Button size="big">Buy Salt AI</Button>
						<Button
							onClick={() => setNextState(true)}
							size="big"
							state="link"
						>
							Try Now
						</Button>
					</div>
				</motion.div>
			</motion.div>
			<AnimatePresence>
				{nextState && (
					<Achievements
						className="translate-y-[172px] md:translate-y-[258px]"
						data={achievements}
					/>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
