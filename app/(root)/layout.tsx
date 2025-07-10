import Header from "@/components/shared/header";
import Header2 from "@/components/shared/header2";
import Brands from "@/components/shared/brands";
import CuttingEdge from "@/components/shared/section-cutting-edge";
import Leaderboard from "@/components/shared/leaderboard";
import Community from "@/components/shared/community";
import Footer from "@/components/shared/footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="container m-auto flex flex-col">
			<Header />
			{/* <Header2 />
			<CuttingEdge />
			<Brands />
			<Leaderboard />
			<Community /> */}
			{/* <main className="wrapper">{children}</main> */}
			{/* <Footer /> */}
		</div>
	);
}
