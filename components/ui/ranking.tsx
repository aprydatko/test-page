import ArrowIcon from "@/components/icons/Arrow";
import DashIcon from "@/components/icons/Dash";

interface BackToTopProps {
	state?: "up" | "down";
	onClick?: () => void;
}

const Ranking = ({ state, onClick }: BackToTopProps) => {
	const type =
		state === "up" ? "stroke-green-light" : "stroke-red-light rotate-180";

	return (
		<button
			onClick={onClick}
			className="flex justify-center items-center w-[24px] h-[24px] text-center cursor-pointer"
		>
			{!state ? (
				<DashIcon className="stroke-gray" />
			) : (
				<ArrowIcon className={type} />
			)}
		</button>
	);
};

export default Ranking;
