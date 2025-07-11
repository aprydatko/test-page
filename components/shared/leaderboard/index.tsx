"use client";

import Button from "@/components/ui/button";
import Table from "@/components/ui/table";
import BackToTop from "@/components/ui/backToTop";

import { tableMocks } from "@/lib/utils";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const Leaderboard = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 100);
	return (
		<section
			ref={ref}
			id="leaderboard-seaction"
			className="h-screen relative overflow-clip"
			style={{ scrollSnapAlign: "start" }}
		>
			<div className="max-w-[1920px] mx-[80px]">
				<div className="flex flex-row justify-between mt-[80px]">
					<h2>LLM Leaderboard</h2>
					<Button size="big">Submit your model</Button>
				</div>
				<p className="mt-[32px] leading-[36px]">
					We evaluate LLMs on key benchmarks using the Eleuther AI, a
					framework to test LLMs on a large number of different
					evaluation tasks. <br /> The higher the score, the better
					the LLM.
				</p>
				<Table data={tableMocks} />
				<div className="mt-[34px] flex flex-row items-center justify-end">
					<Button className="mr-[32px]" size="small" state="link">
						View full leaderboard
					</Button>
					<BackToTop />
				</div>
			</div>
		</section>
	);
};

export default Leaderboard;
