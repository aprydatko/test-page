"use client";

import Image from "next/image";

const Community = () => {
	return (
		<section
			id="community-seaction"
			className="h-screen relative overflow-clip"
			style={{
				background:
					"url('/images/footer_moon.png') black 50% -135% fixed",
				backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
			}}
		>
			<div className="flex flex-row justify-start items-center translate-y-[235px]">
				<div className="max-w-[941px] ml-[160px] mr-[143px] flex">
					<div className="relative">
						<h2 className="mt-[40px]">Join our community</h2>
						<p className="mt-[36px] mb-[20px]">
							Join us on our mission to to the moon &
							revolutionize open source AI development so that we
							can build a permissionless, democratized, and
							decentralized AI.
						</p>
						<p className="mt-[20px]">
							Let the fate of AI be in our hands and not that of
							big tech companies.
						</p>
						<div className="flex flex-row items-center justify-start gap-[32px]">
							<Image
								width={64}
								height={64}
								src="/images/social/telegram.png"
								alt="Telegram logo"
							/>
							<Image
								width={64}
								height={64}
								src="/images/social/x_social.png"
								alt="X social logo"
							/>
						</div>
					</div>
				</div>
				<Image
					width={484}
					height={484}
					src="/images/moon.png"
					alt="Photo Moon"
				/>
			</div>
		</section>
	);
};

export default Community;
