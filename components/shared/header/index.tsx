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

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const Header = () => {
	const ref = useRef(null);
	const [nextState, setNextState] = useState(false);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 100);

	return (
		<header
			id="header-seaction"
			className="h-screen relative overflow-clip"
			style={{ scrollSnapAlign: "start" }}
			ref={ref}
		>
			<div className="relative m-auto mx-[80px] z-20">
				<div className="pt-[32px] gap-[24px] flex flex-row items-center justify-center">
					<Button state="link">LLM Leaderboard</Button>
					<Button>Buy Salt AI</Button>
				</div>
			</div>
			<motion.div
				style={{
					maxWidth: nextState ? "1591px" : "1632px",
				}}
				className="relative mx-[80px] z-20"
			>
				<motion.div
					animate={{ y: nextState ? -140 : 0 }}
					transition={{ duration: 0.5 }}
					className="relative translate-y-[242px]"
				>
					<h1 className={`${nextState ? "light" : ""}`}>
						A new economic primitive for funding decentralized AI
					</h1>
					<motion.p
						style={{
							marginTop: nextState ? "36px" : "32px",
							marginBottom: nextState ? "36px" : "32px",
						}}
					>
						We track, rank and pay for the best open source
						decentralized LLMs to compete against OpenAI
					</motion.p>
					<div className="flex flex-row items-center justify-start">
						<Button size="big">Buy Salt AI</Button>
						<Button size="big" state="link">
							Try Now
						</Button>
					</div>
				</motion.div>
			</motion.div>
			<AnimatePresence>
				{nextState && (
					<Achievements
						className="translate-y-[258px] mx-[80px]"
						data={achievements}
					/>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
