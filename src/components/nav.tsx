import logo from "@/../public/assets/logo.png";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

export const Nav = () => {
	return (
		<div
			id="nav-large"
			className="border border-b-2 border-slate-200 py-4 px-10 flex flex-row justify-between">
			<Image src={logo} width={100} alt="logo" />
			<div className="hidden flex-row gap-8 items-center lg:flex">
				<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
					Instant Blog Generator
				</p>
				<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
					Readability Improver
				</p>
				<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
					Bypass AI Detection
				</p>
				<p className="text-gray-700 text-sm font-semibold hover:text-gray-900 cursor-pointer">
					Article Generator
				</p>
				<button className="bg-gray-800 text-sm font-semibold text-slate-50 px-4 py-2 rounded-md hover:bg-gray-700">
					Dashboard
				</button>
			</div>
			<div className="lg:hidden block text-slate-900">
				<FiMenu />
			</div>
		</div>
	);
};
