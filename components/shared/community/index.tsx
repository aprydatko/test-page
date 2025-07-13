"use client";

import Social from "@/components/ui/social";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const Community = () => {
	const ref = useRef(null);
	const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 100);

	console.log("isMobile", isMobile);
	return (
		<section
			ref={ref}
			id="community-seaction"
			className="h-screen relative overflow-clip"
			style={{ scrollSnapAlign: "start" }}
		>
			<div className="flex flex-row justify-start items-center translate-y-[135px] sm:translate-y-[235px]">
				<div className="max-w-[941px] ml-0 xl:ml-[160px] xl:mr-[143px] flex">
					<div className="relative z-30">
						<h2 className="mt-0 sm:mt-[40px]">
							Join our community
						</h2>
						<p className="sm:mt-[36px] mb-[20px]">
							Join us on our mission to to the moon &
							revolutionize open source AI development so that we
							can build a permissionless, democratized, and
							decentralized AI.
						</p>
						<p className="mt-[20px]">
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
					className="absolute top-0 right-0 z-0 opacity-50 lg:opacity-100"
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
