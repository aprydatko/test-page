interface DashIconProps {
	className?: string;
}

const DashIcon = ({ className }: DashIconProps) => {
	return (
		<>
			<svg
				width="14"
				height="2"
				viewBox="0 0 14 2"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
			>
				<path
					d="M1 1H13"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</>
	);
};

export default DashIcon;
