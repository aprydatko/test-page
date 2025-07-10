"use client";

import Button from "@/components/ui/button";

const Header = () => {
	return (
		<header
			id="header-seaction"
			className="h-screen relative overflow-clip"
			style={{
				background: "url('/images/earth.png') black 110% -200px fixed",
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
			<div className="max-w-[1149px] mx-[80px]">
				<div className="relative translate-y-[285px]">
					<h2 className="max-w-[900px] leading-[75px]">
						Crowdsourcing our collective intelligence to build the
						best AI
					</h2>
					<p className="mt-[32px] mb-[20px] leading-[32px]">
						Open source AI has been lagging behind the likes of
						Google and OpenAI by billions of dollars.
					</p>
					<p className="mt-[20px] leading-[32px]">
						Salt aims to solve that by rewarding open source
						developers who contribute to the democratization of AI.
						We run competitions between AI models to find and reward
						the best AI models. As a result, our users will be able
						to access the latest cutting edge AI models.
					</p>
					<Button size="big">Use The Cutting Edge AI</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
