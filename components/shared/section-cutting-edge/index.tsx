"use client";

import Button from "@/components/ui/button";
import { useRef } from "react";

const CuttingEdge = () => {
	const ref = useRef(null);

	return (
		<section
			id="cutting-edge-seaction"
			className="h-screen relative overflow-clip"
			style={{ scrollSnapAlign: "start" }}
			ref={ref}
		>
			<div className="max-w-[1149px] relative z-20">
				<div className="relative translate-y-[185px] 2xl:translate-y-[285px]">
					{/* translate-y-[285px] */}
					<h2 className="lg:max-w-[900px]">
						Crowdsourcing our collective intelligence to build the
						best AI
					</h2>
					<p className="mb-[10px] leading-normal">
						Open source AI has been lagging behind the likes of
						Google and OpenAI by billions of dollars.
					</p>
					<p className="mt-[10px] leading-normal">
						Salt aims to solve that by rewarding open source
						developers who contribute to the democratization of AI.
						We run competitions between AI models to find and reward
						the best AI models. As a result, our users will be able
						to access the latest cutting edge AI models.
					</p>
					<Button size="big">Use The Cutting Edge AI</Button>
				</div>
			</div>
		</section>
	);
};

export default CuttingEdge;
