"use client";

import Button from "@/components/ui/button";
import Achievements from "@/components/shared/achivments";
import EarthEffect from "@/components/effects/earth";
import CustomEffect from "@/components/effects/customEffect";

import { achievements } from "@/lib/utils";

const Header2 = () => {
	return (
		<header
			id="header-seaction"
			className="h-[1080px] relative bg-black overflow-clip"
		>
			<EarthEffect top={46} right={-92} />
			<CustomEffect
				name="blue"
				top={-299.67}
				left={393.14}
				width={504.81}
				height={795.74}
				transform={-82.13}
			/>
			<CustomEffect
				name="orange"
				top={719.48}
				left={82.22}
				width={504.81}
				height={795.74}
				transform={-64.68}
			/>
			<div className="relative m-auto mx-[80px] z-20">
				<div className="mt-[32px] gap-[24px] flex flex-row items-center justify-center">
					<Button state="link">How It Works</Button>
					<Button>Buy Salt AI</Button>
				</div>
			</div>
			<div className="relative max-w-[1591px] mx-[80px] z-20">
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
			<Achievements
				className="translate-y-[258px] mx-[80px]"
				data={achievements}
			/>
		</header>
	);
};

export default Header2;
