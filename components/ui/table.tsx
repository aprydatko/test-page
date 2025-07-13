import Ranking from "@/components/ui/ranking";

interface TableData {
	id: number;
	state: null | string;
	model_name: string;
	average: number;
	arc: number;
	hellaswag: number;
	mmlu: number;
	truthfulqa: number;
	winogrande: number;
	gsm8k: number;
	usage: string;
}

interface TableProps {
	data?: Array<TableData>;
	className?: string;
}

const Table = ({ className, data = [] }: TableProps) => {
	const titles = [
		{
			name: "",
			size: "first",
			align: "left",
		},
		{
			name: "#",
			size: "number",
			align: "left",
		},
		{
			name: "Model Name",
			size: "big",
			align: "left",
		},
		{
			name: "Average",
			size: "default",
			align: "right",
		},
		{
			name: "ARC",
			size: "default",
			align: "right",
		},
		{
			name: "HellaSwag",
			size: "default",
			align: "right",
		},
		{
			name: "MMLU",
			size: "default",
			align: "right",
		},
		{
			name: "TruthfulQA",
			size: "default",
			align: "right",
		},
		{
			name: "Winogrande",
			size: "default",
			align: "right",
		},
		{
			name: "GSM8K",
			size: "default",
			align: "right",
		},
		{
			name: "Usage",
			size: "last",
			align: "right",
		},
	];

	const getSizeByColumn = (type: string) => {
		switch (type) {
			case "first":
				return "w-[54px]";
			case "last":
				return "w-auto";
			case "number":
				return "w-[38px]";
			case "big":
				return "w-[332px]";
			default:
				return "w-auto";
		}
	};

	const short_name = (text: string) =>
		text.length > 38 ? text.slice(0, 37) + "…" : text;

	const headers = titles.map(({ name, size, align }, index) => (
		<th
			className={`${getSizeByColumn(
				size
			)} pt-[1rem] lg:pt-[22.5px] py-[1rem] lg:py-[22.5px] px-[6px] first:pl-[24px] last:pr-[24px] font-semibold text-xs lg:text-base text-${align} leading-[19px] lg:leading-[19px] letter tracking-[0px] text-gray-light`}
			key={index}
			scope="col"
		>
			{name}
		</th>
	));

	const rows = data.map(
		({
			id,
			state,
			model_name,
			average,
			arc,
			hellaswag,
			mmlu,
			truthfulqa,
			winogrande,
			gsm8k,
			usage,
		}) => (
			<tr
				className={`text-base font-normal leading-none lg:leading-[19px]
 text-white ${id % 2 ? "bg-purple-light" : "transparent"}`}
				key={id}
			>
				<td className="flex items-center justify-end pt-[1rem] lg:pt-[22px] px-[6px]">
					{state === "up" && <Ranking state="up" />}
					{state === "down" && <Ranking state="down" />}
					{!state && <Ranking />}
				</td>
				<td className="pt-[1rem] lg:pt-[26.5px] py-[1rem] lg:py-[26.5px] px-[6px] text-xs lg:text-base text-center">
					{id}
				</td>
				<td className="pt-[1rem] lg:pt-[26.5px] py-[1rem] lg:py-[26.5px] px-[6px] text-xs lg:text-base text-left">
					{short_name(model_name)}
				</td>
				<td className="pt-[1rem] lg:pt-[26.5px] py-[1rem] lg:py-[26.5px] px-[6px] text-xs lg:text-base text-right">
					{average}
				</td>
				<td className="pt-[1rem] lg:pt-[26.5px] py-[1rem] lg:py-[26.5px] px-[6px] text-xs lg:text-base text-right">
					{arc}
				</td>
				<td className="pt-[1rem] lg:pt-[26.5px] py-[1rem] lg:py-[26.5px] px-[6px] text-xs lg:text-base text-right">
					{hellaswag}
				</td>
				<td className="pt-[1rem] lg:pt-[26.5px] py-[1rem] lg:py-[26.5px] px-[6px] text-xs lg:text-base text-right">
					{mmlu}
				</td>
				<td className="pt-[1rem] lg:pt-[26.5px] py-[1rem] lg:py-[26.5px] px-[6px] text-xs lg:text-base text-right">
					{truthfulqa}
				</td>
				<td className="pt-[1rem] lg:pt-[26.5px] py-[1rem] lg:py-[26.5px] px-[6px] text-xs lg:text-base text-right">
					{winogrande}
				</td>
				<td className="pt-[1rem] lg:pt-[26.5px] py-[1rem] lg:py-[26.5px] px-[6px] text-xs lg:text-base text-right">
					{gsm8k}
				</td>
				<td className="pt-[1rem] lg:pt-[26.5px] py-[1rem] lg:py-[26.5px] px-[6px] text-xs lg:text-base text-right last:pr-[24px]">
					{usage}
				</td>
			</tr>
		)
	);

	return (
		<table
			className={`${className} table-fixed w-[100%] bg-[var(--color-background)]`}
		>
			<thead>
				<tr className="bg-transparent box-border">{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default Table;
