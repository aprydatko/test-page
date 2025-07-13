import { ReactNode } from "react";

interface ButtonProps {
	size?: "small" | "big";
	state?: "default" | "link";
	children: ReactNode;
	className?: string;
	onClick?: () => void;
}

const Button = ({
	size = "small",
	state = "default",
	className,
	children,
	onClick,
}: ButtonProps) => {
	const b_size =
		size === "big"
			? "h-[50px] sm:h-[75px] pt-[22px] pb-[24px] px-[24px] sm:px-[48px] text-sm sm:text-2xl"
			: "h-[40px] sm:h-[52px] pt-[14px] pb-[16px] px-[16px] sm:px-[32px] text-xs sm:text-lg";
	const b_state = state === "link" ? "btn-link" : "btn-default";
	return (
		<button onClick={onClick}>
			<span className={`btn ${className} ${b_size} ${b_state}`}>
				{children}
			</span>
		</button>
	);
};

export default Button;
