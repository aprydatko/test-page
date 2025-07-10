import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";

const inter = Inter({
	subsets: ["latin"],
});

const my_font = localFont({
	src: [
		{
			path: "../public/fonts/clash-grotesk-medium.otf",
			weight: "500",
			style: "medium",
		},
	],
	variable: "--font-clash-grotesk",
});

export const metadata: Metadata = {
	title: {
		template: `%s | Test task`,
		default: APP_NAME,
	},
	description: APP_DESCRIPTION,
	metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${my_font.variable} antialiased`}
			>
				<svg
					className="w-0 h-0 absolute"
					aria-hidden="true"
					focusable="false"
				>
					<linearGradient
						id="color-gradient"
						x1="-2.01899"
						y1="5.45455"
						x2="16.4269"
						y2="10.0481"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="var(--color-purple)" />
						<stop offset="0.495" stopColor="var(--color-orange)" />
						<stop offset="1" stopColor="var(--color-red)" />
					</linearGradient>
				</svg>
				{children}
			</body>
		</html>
	);
}
