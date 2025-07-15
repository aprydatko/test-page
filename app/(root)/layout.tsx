export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-[100vh] relative container @container/wrapper m-auto overflow-clip">
			{children}
		</div>
	);
}
