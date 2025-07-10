"use client";

import Button from "@/components/ui/button";
import Achievements from "@/components/shared/achivments";
import { achievements } from "@/lib/utils";

const Header2 = () => {
	return (
		<header
			id="header-seaction"
			className="h-screen relative overflow-clip"
			style={{
				background: "url('/images/earth.png') black 100% 50px fixed",
				backgroundRepeat: "no-repeat",
				backgroundSize: "1016px 1016px",
			}}
		>
			<div
				className="absolute top-[-295px] left-[350px] w-[504px] h-[795px] rotate-60"
				style={{
					background: "var(--header-effect-one)",
					filter: "blur(200px)",
				}}
			></div>
			<div
				className="absolute top-[634px] left-[-214px] w-[504px] h-[795px] rotate-72"
				style={{
					background: "var(--header-effect-two)",
					filter: "blur(200px)",
				}}
			></div>
			<div className="m-auto mx-[80px]">
				<div className="mt-[32px] gap-[24px] flex flex-row items-center justify-center">
					<Button state="link">How It Works</Button>
					<Button>Buy Salt AI</Button>
				</div>
			</div>
			<div className="max-w-[1591px] mx-[80px]">
				<div className="relative translate-y-[102px]">
					<h1 className="light">
						A new economic primitive for funding decentralized AI
					</h1>
					<p className="mt-[36px] mb-[36px]">
						We track, rank and pay for the best open source
						decentralized LLMs to compete against OpenAI
					</p>
					<div className="flex flex-row items-center justify-start">
						<Button size="big">Buy Salt AI</Button>
						<Button size="big" state="link">
							Try Now
						</Button>
					</div>
				</div>
			</div>
			<Achievements className="translate-y-[258px]" data={achievements} />
		</header>
	);
};

export default Header2;
