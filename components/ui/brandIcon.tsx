import Image from "next/image";

interface BrandIconProps {
	name?: string;
	width?: number;
	height?: number;
	alt?: string;
	className?: string;
}

const BrandIcon = ({
	className,
	name,
	width,
	height,
	alt = "",
}: BrandIconProps) => {
	return (
		<Image
			className={className}
			src={`/images/brands/${name}.png`}
			width={width}
			height={height}
			alt={alt}
		/>
	);
};

export default BrandIcon;
