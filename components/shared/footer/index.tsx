"use client";

import Image from "next/image";
import Button from "@/components/ui/button";

const Footer = () => {
	return (
		<footer
			id="community-seaction"
			className="h-screen relative overflow-clip"
			style={{
				background:
					"url('/images/footer_moon.png') black 50% -80% fixed",
				backgroundSize: "contain",
			}}
		>
			<div className="flex flex-row justify-center items-center translate-y-[265px]">
				<p className="text-[32px] leading-[32px]">
					Join our community and harvest $SALT
				</p>
			</div>
			<div className="max-w-[1760px] mx-[80px] absolute bottom-[70px] left-0 w-[100%]">
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
					<div className="flex flex-row items-center justify-start gap-[16px]">
						<Image
							width={36}
							height={36}
							src="/images/social/telegram.png"
							alt="Telegram logo"
						/>
						<Image
							width={36}
							height={36}
							src="/images/social/x_social.png"
							alt="X social logo"
						/>
					</div>
					<div className="flex flex-row items-center justify-center gap-[24px]">
						<a
							className="text-[12px] text-gray-text hover:text-white no-underline"
							href="#terms"
						>
							Terms of Use
						</a>
						<a
							className="text-[12px] text-gray-text hover:text-white no-underline"
							href="#terms"
						>
							Privacy Policy
						</a>
						<a
							className="text-[12px] text-gray-text hover:text-white no-underline"
							href="#terms"
						>
							Cookie Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
