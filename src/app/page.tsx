import cancel from "@/../public/assets/cancel.png";
import { Editor } from "@/components/editor";
import { Nav } from "@/components/nav";
import Image from "next/image";

export default function Home() {
	return (
		<div className="sm:block flex flex-1">
			<div className="min-h-screen pb-10">
				<div
					id="offer"
					className="hidden flex-row relative justify-center bg-slate-800 py-2 lg:flex">
					<p className="text-slate-50 text-xs font-medium">
						20% off PRO forever! Use the code: “SuperAI20” during{" "}
						<span className="underline underline-offset-4">Checkout</span>. This
						promotion is available this week
					</p>
					<Image
						src={cancel}
						alt="cancel-icon"
						className="absolute right-12 top-[7px] text-white cursor-pointer"
					/>
				</div>

				<Nav />

				<div
					id="main-layout"
					className="md:px-10 px-2 flex flex-col items-center max-w-screen-2xl mx-auto">
					<div className="bg-violet-400 py-3 px-6 rounded-md mt-4 hidden lg:flex flex-row justify-between items-center w-full ">
						<p className="text-white font-medium text-sm">
							Always Write Like a Pro, No Matter Where You Are
						</p>
						<div className="flex flex-row gap-8 justify-center items-center">
							<button className="bg-white px-6 py-2 font-semibold text-sm text-slate-900 rounded-md hover:bg-slate-50">
								Add to Chrome
							</button>
							<Image
								src={cancel}
								alt="cancel-icon"
								className="cursor-pointer"
							/>
						</div>
					</div>
					<p className="font-semibold text-slate-900 text-xs bg-purple-200 px-4 py-1 rounded-full mt-8 text-center">
						Aiseo Paraphrasing Tool
					</p>
					<h2 className="mt-4 max-w-xl text-slate-900 text-4xl font-bold text-center">
						Generate Fresh and Engaging Content with AI
					</h2>
					<div className="w-full mt-32 flex flex-row gap-8 items-end justify-between md:justify-start">
						<div>
							<button className="bg-black text-sm text-white font-medium px-5 py-2 rounded-md hover:bg-gray-900">
								Import From URL
							</button>
						</div>
						<div className="flex flex-col gap-3">
							<p className="font-semibold text-sm text-slate-900">
								Tone of Voice
							</p>
							<select
								className="font-medium text-sm px-4 py-2 rounded-md border-2"
								defaultValue="my-brand-voice">
								<option value="my-brand-voice">My Brand Voice</option>
								<option value="my-brand-tone">My Brand Tone</option>
							</select>
						</div>
						<div className="flex flex-col gap-3">
							<p className="font-semibold text-sm text-slate-900">Language</p>
							<select
								className="font-medium px-4 py-2 text-sm rounded-md border-2"
								defaultValue="english">
								<option value="english">English</option>
								<option value="spanish">Spanish</option>
							</select>
						</div>
					</div>

					<Editor />
				</div>
			</div>
		</div>
	);
}
