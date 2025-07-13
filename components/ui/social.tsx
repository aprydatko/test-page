import Image from "next/image";

interface ISocial {
	width?: number;
	height?: number;
	className?: string;
}

const Social = ({ width, height, className }: ISocial) => {
	return (
		<div
			className={`${className} flex flex-row items-center justify-start`}
		>
			<Image
				width={width}
				height={height}
				src="/images/social/telegram.png"
				alt="Telegram logo"
			/>
			<Image
				width={width}
				height={height}
				src="/images/social/x_social.png"
				alt="X social logo"
			/>
		</div>
	);
};

export default Social;
