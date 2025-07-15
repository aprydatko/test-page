import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { Metadata } from "next";

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
		<div className="max-w-[100vw] h-[100vh] relative container @container/wrapper m-auto overflow-clip bg-black">
			{children}
		</div>
	);
}
