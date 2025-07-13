const Links = ({ className }: { className: string }) => {
	return (
		<div
			className={`${className} flex  sm:flex-row  items-center justify-center`}
		>
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
	);
};

export default Links;
