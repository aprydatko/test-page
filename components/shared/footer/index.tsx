"use client";

import Button from "@/components/ui/button";
import { useRef } from "react";
import Social from "@/components/ui/social";
import { useMediaQuery } from "react-responsive";
import Links from "@/components/ui/links";

const Footer = () => {
	const ref = useRef(null);
	const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
	return (
		<footer
			ref={ref}
			id="footer-seaction"
			className="h-screen relative overflow-clip"
			style={{
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				scrollSnapAlign: "start",
			}}
		>
			<div className="flex flex-row justify-center items-center translate-y-[165px] lg:translate-y-[265px]">
				<p className="text-[1rem] leading-none">
					Join our community and harvest $SALT
				</p>
			</div>
			<div className="max-w-[1760px] absolute bottom-[70px] left-0 w-[100%]">
				<div className="flex flex-row justify-center items-center">
					<Button
						className="h-[22px] text-[18px] leading-[22px] p-0"
						size="small"
						state="link"
					>
						How It Works
					</Button>
					<Button
						className="h-[22px] text-[18px] leading-[22px] p-0"
						size="small"
						state="link"
					>
						Buy Salt AI
					</Button>
				</div>
				<hr className="w-[100%] h-[1px] mt-[24px] mb-[24px] bg-white opacity-50" />
				<div className="flex items-center justify-between">
					<Social
						width={isMobile ? 16 : 32}
						height={isMobile ? 16 : 32}
						className="gap-[16px]"
					/>
					<Links className="gap-[1rem] sm:gap-[1.5]" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
