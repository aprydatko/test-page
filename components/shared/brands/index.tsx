"use client";

import BrandIcon from "@/components/ui/brandIcon";
import { brands } from "@/lib/utils";

const Brands = () => {
	return (
		<header
			id="brands-seaction"
			className="h-screen relative overflow-clip"
			style={{
				background: "url('/images/earth.png') black 120% -50px fixed",
				backgroundRepeat: "no-repeat",
				backgroundSize: "1016px 1016px",
			}}
		>
			<div
				className="absolute top-[-450px] left-[350px] w-[504px] h-[795px] rotate-118"
				style={{
					background: "var(--header-effect-one)",
					filter: "blur(200px)",
				}}
			></div>
			<div
				className="absolute top-[400px] left-[514px] w-[504px] h-[795px] rotate-130"
				style={{
					background: "var(--header-effect-two)",
					filter: "blur(200px)",
				}}
			></div>
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
		</header>
	);
};

export default Brands;
