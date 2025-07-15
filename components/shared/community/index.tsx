"use client";

import Social from "@/components/ui/social";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Community = () => {
	const ref = useRef(null);
	const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });

	return (
		<section
			ref={ref}
			id="community-seaction"
			className="h-screen relative overflow-clip"
			style={{ scrollSnapAlign: "start" }}
		>
			<div className="flex flex-row translate-y-[135px] sm:translate-y-[230px]">
				<div className="max-w-[941px] ml-0 2xl:ml-[80px] 2xl:mr-[63px] flex">
					<div className="relative z-30 mt-[110px]">
						<h2>Join our community</h2>
						<p className="sm:mt-[36px] mb-[25px]">
							Join us on our mission to to the moon &
							revolutionize open source AI development so that we
							can build a permissionless, democratized, and
							decentralized AI.
						</p>
						<p className="mt-[25px]">
							Let the fate of AI be in our hands and not that of
							big tech companies.
						</p>
						<Social
							width={isMobile ? 32 : 64}
							height={isMobile ? 32 : 64}
							className="gap-[1rem] sm:gap-[2rem]"
						/>
					</div>
				</div>
				<Image
					className="absolute top-0 right-[110px] z-0 opacity-50 lg:opacity-100"
					width={isMobile ? 242 : 484}
					height={isMobile ? 242 : 484}
					src="/images/moon.png"
					alt="Photo Moon"
				/>
			</div>
		</section>
	);
};

export default Community;
