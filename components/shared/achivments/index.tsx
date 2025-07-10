interface AchievementsItems {
	count: string;
	title: string;
}

interface AchievementskProps {
	data: Array<AchievementsItems>;
	className?: string;
}

const Achievements = ({ data = [], className }: AchievementskProps) => {
	return (
		<div
			className={`${className} achievements relative flex flex-row justify-center items-center gap-[20px]`}
		>
			{data.map(({ count, title }, index) => (
				<div
					key={index}
					className="flex-1/3 h-[190px] rounded-[90px] p-[32px] text-white text-center"
					style={{
						background: "var(--achivements-gradient)",
					}}
				>
					<strong className="block mb-[20px] text-[64px] font-bold leading-[77px]">
						{count}
					</strong>
					<span className="text-2xl font-normal leading-[29px]">
						{title}
					</span>
				</div>
			))}
		</div>
	);
};

export default Achievements;
