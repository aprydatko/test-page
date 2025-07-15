"use client";

import BrandIcon from "@/components/ui/brandIcon";
import { brands } from "@/lib/utils";
import { motion } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Brands = () => {
	const ref = useRef(null);
	const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
	return (
		<section
			ref={ref}
			id="brands-seaction"
			className="h-screen relative overflow-clip"
			style={{ scrollSnapAlign: "start" }}
		>
			<div className="">
				<div className="translate-y-[150px] sm:translate-y-[300px] 2xl:translate-y-[400px] relative h-screen flex flex-wrap flex-col items-center">
					<h2 className="text-center">
						Projects integrated into the Arrakis AI Ecosystem
					</h2>
					<motion.div
						initial={{
							transform: "translateX(100%)",
						}}
						animate={{
							transform: "translateX(0px)",
						}}
						transition={{
							duration: 0.6,
						}}
						className="mt-[3rem] w-[100%] h-auto lg:h-[102px] flex flex-col lg:flex-row justify-between items-center gap-[2rem] lg:gap-[1rem] 2xl:[7.5rem]"
					>
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
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Brands;
