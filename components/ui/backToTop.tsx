import ArrowIcon from "@/components/icons/Arrow";

interface BackToTopProps {
	disabled?: boolean;
	onClick?: () => void;
}

const BackToTop = ({ disabled = false, onClick }: BackToTopProps) => {
	const b_disabled = disabled ? "disabled" : "";
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${b_disabled} btn_to_top-gradient flex justify-center items-center w-[56px] h-[56px] rounded-full cursor-pointer`}
		>
			<ArrowIcon />
		</button>
	);
};

export default BackToTop;
