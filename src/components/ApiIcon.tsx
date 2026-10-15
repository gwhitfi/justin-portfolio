import { useState } from "react";
import Tooltip from "./Tooltip";

interface ApiIconProps {
    api: string;
}
export default function ApiIcon({ api }: ApiIconProps) {
    const [apiOpen, setApiOpen] = useState(false);
    return (
        <div
            className=""
            onMouseEnter={() => setApiOpen(true)}
            onMouseLeave={() => setApiOpen(false)}
        >
            <div className="hover:cursor-default text-sm px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">{api}</div>
            {apiOpen && <Tooltip text={`${api} API`} />}
        </div>
    );
}
