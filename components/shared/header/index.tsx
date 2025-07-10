"use client";

import Button from "@/components/ui/button";
import BlueEffect from "@/components/effects/blue";
import OrangeEffect from "@/components/effects/orange";

const Header = () => {
	return (
		<header
			id="header-seaction"
			className="h-screen relative overflow-clip"
			style={{
				background: "url('/images/earth.png') black 100% 150px fixed",
				backgroundRepeat: "no-repeat",
				backgroundSize: "1016px 1016px",
			}}
		>
			<BlueEffect
				top={-295}
				left={600}
				width={504}
				height={795}
				rotate={60}
			/>
			<OrangeEffect
				top={634}
				left={-214}
				width={504}
				height={795}
				rotate={72}
			/>
			<div className="m-auto mx-[80px]">
				<div className="mt-[32px] gap-[24px] flex flex-row items-center justify-center">
					<Button state="link">How It Works</Button>
					<Button>Buy Salt AI</Button>
				</div>
			</div>
			<div className="max-w-[1632px] mx-[80px]">
				<div className="relative translate-y-[242px]">
					<h1 className="text-white">
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
		</header>
	);
};

export default Header;
