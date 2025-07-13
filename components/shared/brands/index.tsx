"use client";

import BrandIcon from "@/components/ui/brandIcon";
import { brands } from "@/lib/utils";
import { MotionValue, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const Brands = () => {
	const ref = useRef(null);
	const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
	const [nextState, setNextState] = useState(false);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 100);
	return (
		<section
			ref={ref}
			id="brands-seaction"
			className="h-screen relative overflow-clip"
			style={{ scrollSnapAlign: "start" }}
		>
			<div className="">
				<div className="translate-y-[150px] sm:translate-y-[300px] xl:translate-y-[400px] relative h-screen flex flex-wrap flex-col items-center">
					<h2 className="text-center">
						Projects integrated into the Arrakis AI Ecosystem
					</h2>
					<div className="mt-[3rem] h-auto lg:h-[102px] flex flex-col lg:flex-row justify-center items-center gap-[2rem] lg:gap-[1rem] 2xl:[7.5rem]">
						{brands.map(({ width, height, name, alt }, index) => (
							<BrandIcon
								className={`w-${isMobile ? "auto" : width}`}
								key={index}
								width={width}
								height={height}
								name={name}
								alt={alt}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands;
