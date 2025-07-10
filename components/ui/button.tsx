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
			? "h-[75px] pt-[22px] pb-[24px] px-[48px] text-2xl"
			: "h-[52px] pt-[14px] pb-[16px] px-[32px] text-lg";
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
