"use client";

import Button from "@/components/ui/button";
import Table from "@/components/ui/table";
import BackToTop from "@/components/ui/backToTop";

import { tableMocks } from "@/lib/utils";

const Leaderboard = () => {
	return (
		<section
			id="header-seaction"
			className="h-screen relative overflow-clip"
			style={{
				background: "url('/images/earth.png') black 110% -800px fixed",
				backgroundRepeat: "no-repeat",
				backgroundSize: "1016px 1016px",
			}}
		>
			<div
				className="absolute top-[-395px] left-[450px] w-[504px] h-[795px] rotate-135"
				style={{
					background: "var(--header-effect-one)",
					filter: "blur(200px)",
				}}
			></div>
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
