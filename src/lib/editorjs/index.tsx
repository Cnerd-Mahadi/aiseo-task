"use client";

import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";

import { Dispatch, SetStateAction, useEffect, useRef } from "react";
export const EDITOR_TOOLS = {
	header: {
		class: Header,
	},
};

interface EditorToolProps {
	data: OutputData | undefined;
	onChange: Dispatch<SetStateAction<OutputData | undefined>>;
	holder: string;
}

export type refType = null | EditorJS;

export default function EditorTool({
	data,
	onChange,
	holder,
}: EditorToolProps) {
	const ref = useRef<refType>();

	useEffect(() => {
		//initialize editor if we don't have a reference
		if (!ref.current) {
			const editor = new EditorJS({
				holder: holder,
				tools: EDITOR_TOOLS,
				data,
				async onChange(api, event) {
					const data = await api.saver.save();
					onChange(data);
				},
			});
			ref.current = editor;
		}

		//add a return function handle cleanup
		return () => {
			if (ref.current && ref.current.destroy) {
				ref.current.destroy();
			}
		};
	}, []);

	return <div id={holder} className="prose max-w-full" />;
}
