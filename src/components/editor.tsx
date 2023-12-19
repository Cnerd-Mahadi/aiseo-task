"use client";

import energy from "@/../public/assets/energy.png";
import { Parser } from "@alkhipce/editorjs-react";
import { IParser } from "@alkhipce/editorjs-react/dist/types/ParserData";
import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { Switch } from "./ui/switch";

const EditorTool = dynamic(() => import("@/lib/editorjs/index"), {
	ssr: false,
});

export const Editor = () => {
	const [data, setData] = useState<OutputData | undefined>();
	const [readOnly, setReadOnly] = useState<OutputData | undefined>();

	const handleParaphrase = () => {
		setReadOnly(data);
	};

	return (
		<div
			id="editor-section"
			className="flex lg:flex-row flex-col w-full mt-10 justify-center space-y-8 lg:space-y-0">
			<div className="flex-1">
				<div className="border-2 rounded-md rounded-b-none lg:rounded-r-none border-slate-300 xl:h-24 lg:h-36 h-24 sm:hidden md:flex flex-col justify-center">
					<div className="flex flex-row justify-around items-center px-4 flex-wrap gap-4 ">
						<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
							Shorten
						</p>
						<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
							Fluency
						</p>
						<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
							Expand
						</p>
						<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
							Format
						</p>
						<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
							Simplify
						</p>
						<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
							Custom
						</p>
						<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
							Advanced
						</p>
						<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
							Bypass AI
						</p>
					</div>
				</div>
				<div className="border-2 rounded-md rounded-t-none rounded-br-md lg:rounded-r-none border-slate-300 border-t-0 h-[500px]">
					<div className="py-5 flex flex-col px-6 gap-4 ">
						<EditorTool
							data={data}
							onChange={setData}
							holder="editorjs-container"
						/>
						<div className="flex flex-row justify-between items-end">
							<p className="text-slate-700 font-medium text-sm">Word Count</p>
							<div className="flex flex-row gap-4">
								<button className="bg-black text-sm font-semibold text-slate-50 px-4 py-2 rounded-md hover:bg-gray-900">
									Set Goals
								</button>
								<button
									onClick={handleParaphrase}
									className="bg-indigo-600 text-sm font-semibold text-slate-50 px-4 py-2 rounded-md hover:bg-indigo-500">
									Paraphrase
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex-1">
				<div className="border-2 rounded-md rounded-b-none lg:rounded-l-none border-slate-300 lg:border-l-0 xl:h-24 lg:h-36 h-24 flex flex-col justify-center">
					<div className="px-4 flex flex-row justify-around items-center flex-wrap gap-4">
						<div className="bg-gray-950 text-sm font-semibold text-white px-4 py-2 rounded-full hover:bg-gray-900 cursor-pointer flex flex-row gap-2 items-center">
							<Image src={energy} width={10} alt="energy-icon" />
							<p>Super Charge</p>
						</div>
						<div className="text-sm font-semibold text-gray-900  cursor-pointer flex flex-row items-center gap-3">
							<p>Show Similiarity</p>
							<Switch />
						</div>
						<p className="text-slate-900 bg-slate-200 py-2 px-3 text-sm font-semibold hover:bg-gray-300 cursor-pointer rounded-full">
							Uniqueness
						</p>
						<p className="text-slate-900 bg-sky-100 py-2 px-3 text-sm font-semibold hover:bg-sky-200 cursor-pointer rounded-full">
							Long Form
						</p>
					</div>
				</div>
				<div className="border-2 rounded-md rounded-t-none lg:rounded-bl-none rounded-tr-none  border-slate-300 border-t-0 lg:border-l-0 h-[500px] px-6 py-4">
					<div className="py-5 flex flex-col px-6 gap-4 overflow-y-auto h-[450px]">
						{readOnly !== undefined && <Parser data={readOnly as IParser} />}
					</div>
				</div>
			</div>
		</div>
	);
};
