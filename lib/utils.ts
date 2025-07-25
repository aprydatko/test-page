/* eslint-disable @typescript-eslint/no-explicit-any */
export const tableMocks = [
	{
		id: 1,
		state: "down",
		model_name: "meta-llama/Meta-Llama-3-70B-Instruct",
		average: 77.88,
		arc: 71.42,
		hellaswag: 85.69,
		mmlu: 80.06,
		truthfulqa: 61.81,
		winogrande: 82.87,
		gsm8k: 85.44,
		usage: "1,190,580",
	},
	{
		id: 2,
		state: null,
		model_name: "saltlux/luxia-21.4b-alignment-v1.0",
		average: 77.74,
		arc: 77.47,
		hellaswag: 91.88,
		mmlu: 68.1,
		truthfulqa: 79.17,
		winogrande: 87.37,
		gsm8k: 71.11,
		usage: "1,185,234",
	},
	{
		id: 3,
		state: "up",
		model_name: "zhengr/MixTAO-7Bx2-MoE-v8.1",
		average: 77.5,
		arc: 73.81,
		hellaswag: 89.22,
		mmlu: 64.92,
		truthfulqa: 78.57,
		winogrande: 87.37,
		gsm8k: 71.11,
		usage: "1,178,889",
	},
	{
		id: 4,
		state: "down",
		model_name: "yunconglong/Truthful_DPO_TomGrc_FusionNet_7Bx2_MoE_13B",
		average: 77.44,
		arc: 74.91,
		hellaswag: 89.3,
		mmlu: 64.67,
		truthfulqa: 78.02,
		winogrande: 88.24,
		gsm8k: 69.52,
		usage: "1,177,065",
	},
	{
		id: 5,
		state: null,
		model_name: "JaeyeonKang/CCK_Asura_v1",
		average: 77.43,
		arc: 73.89,
		hellaswag: 89.07,
		mmlu: 64.44,
		truthfulqa: 72.02,
		winogrande: 84.24,
		gsm8k: 69.5,
		usage: "1,122,065",
	},
	{
		id: 6,
		state: "down",
		model_name: "fblgit/UNA-SimpleSmaug-34b-v1beta",
		average: 77.48,
		arc: 72.19,
		hellaswag: 81.07,
		mmlu: 64.41,
		truthfulqa: 72.12,
		winogrande: 84.94,
		gsm8k: 69.5,
		usage: "1,122,022",
	},
	{
		id: 7,
		state: "up",
		model_name: "TomGrc/FusionNet_34Bx2_MoE_v0.1",
		average: 77.88,
		arc: 73.19,
		hellaswag: 83.07,
		mmlu: 64.41,
		truthfulqa: 72.11,
		winogrande: 84.94,
		gsm8k: 69.5,
		usage: "1,192,022",
	},
	{
		id: 8,
		state: null,
		model_name: "migtissera/Tess-72B-v1.5b",
		average: 77.82,
		arc: 73.11,
		hellaswag: 83.07,
		mmlu: 64.41,
		truthfulqa: 71.11,
		winogrande: 80.94,
		gsm8k: 69.5,
		usage: "1,422,022",
	},
];

export const achievements = [
	{
		count: "1,873",
		title: "LLM models",
	},
	{
		count: "$326,734",
		title: "Paid to data scientists",
	},
	{
		count: "6,557",
		title: "Developers",
	},
];

export const brands = [
	{
		name: "solana",
		alt: "Solana logo company",
		width: 334,
		height: 50,
	},
	{
		name: "arweave",
		alt: "Arweave logo company",
		width: 420,
		height: 100,
	},
	{
		name: "bittensor",
		alt: "Bittensor logo company",
		width: 328,
		height: 58,
	},
	{
		name: "brand_4",
		alt: "Pinterest logo company",
		width: 102,
		height: 102,
	},
	{
		name: "telegram",
		alt: "Telegram logo company",
		width: 102,
		height: 102,
	},
];

export const debounce = function (fn: () => void, t = 300) {
	let timer: string | number | NodeJS.Timeout | undefined;
	return function (...args: []) {
		clearTimeout(timer);

		timer = setTimeout(() => {
			fn(...args);
		}, t);
	};
};
