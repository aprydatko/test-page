"use client";

import Button from "@/components/ui/button";
import Table from "@/components/ui/table";
import BackToTop from "@/components/ui/backToTop";

import { tableMocks } from "@/lib/utils";
import { useRef } from "react";

const Leaderboard = () => {
	const ref = useRef(null);
	return (
		<section
			ref={ref}
			id="leaderboard-seaction"
			className="h-screen relative overflow-clip"
			style={{ scrollSnapAlign: "start" }}
		>
			<div className="">
				<div className="flex flex-col md:flex-row justify-between items-center md:items-start pt-[1rem] xl:pt-[80px]">
					<h2>LLM Leaderboard</h2>
					<Button className="mt-4 lg:mt-0" size="big">
						Submit your model
					</Button>
				</div>
				<p className="mt-[1rem] lg:mt-[2rem] 2xl:leading-[36px]">
					We evaluate LLMs on key benchmarks using the Eleuther AI, a
					framework to test LLMs on a large number of different
					evaluation tasks. <br /> The higher the score, the better
					the LLM.
				</p>
				<Table
					className="block 2xl:inline-table h-auto xl:h-[50vh] 2xl:x-[auto] overflow-x-scroll"
					data={tableMocks}
				/>
				<div className="mt=[1rem] lg:mt-[34px] flex flex-row items-center justify-end">
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
