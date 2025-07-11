"use client";

import BrandIcon from "@/components/ui/brandIcon";
import { brands } from "@/lib/utils";
import { MotionValue, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const Brands = () => {
	const ref = useRef(null);
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
			<div className="max-w-[1920px] mx-[80px]">
				<div className="translate-y-[400px] relative h-screen flex flex-col items-center">
					<h2 className="text-center">
						Projects integrated into the Arrakis AI Ecosystem
					</h2>
					<div className="mt-[48px] h-[102px] flex justify-center items-center gap-[120px]">
						{brands.map(({ width, height, name, alt }, index) => (
							<BrandIcon
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
