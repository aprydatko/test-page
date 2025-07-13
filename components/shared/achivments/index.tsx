import { motion, stagger } from "motion/react";

interface AchievementsItems {
	count: string;
	title: string;
}

interface AchievementskProps {
	data: Array<AchievementsItems>;
	className?: string;
}

const list = {
	visible: {
		opacity: 1,
		translate: "translateY(200px)",
		transition: {
			when: "beforeChildren",
			delayChildren: stagger(0.1),
		},
	},
	hidden: {
		opacity: 0,
		translate: "translateY(0px)",
		transition: {
			when: "afterChildren",
		},
	},
};

const item = {
	visible: { opacity: 1, y: -100 },
	hidden: { opacity: 0, y: 0 },
};

const Achievements = ({ data = [], className }: AchievementskProps) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			variants={list}
			className={`${className} relative flex flex-col lg:flex-row justify-center items-center gap-[20px]`}
		>
			{data.map(({ count, title }, index) => (
				<motion.div
					variants={item}
					key={index}
					className=" lg:flex-1/3 w-[100%] h-auto lg:h-[190px] rounded-[90px]  p-[1rem] lg:p-[32px] text-white text-center"
					style={{
						background: "var(--achivements-gradient)",
					}}
				>
					<strong className="block mb-[1rem] lg:mb-[20px] text-[2rem] lg:text-[4rem] md:text-[3rem] font-bold leading-9 lg:leading-[77px] md:leading-14">
						{count}
					</strong>
					<span className="text-sm lg:text-2xl font-normal leading-none lg:leading-[29px]">
						{title}
					</span>
				</motion.div>
			))}
		</motion.div>
	);
};

export default Achievements;
