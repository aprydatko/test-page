interface ArrowIconProps {
	className?: string;
}

const ArrowIcon = ({ className }: ArrowIconProps) => {
	return (
		<>
			<svg
				width="14"
				height="16"
				viewBox="0 0 14 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
			>
				<path
					id="arrow_icon"
					d="M7 1L13 7M7 1L1 7M7 1V15"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</>
	);
};

export default ArrowIcon;
