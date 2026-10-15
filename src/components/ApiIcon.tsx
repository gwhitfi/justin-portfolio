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
            <div className="hover:cursor-default px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">{api}</div>
            {apiOpen && <Tooltip text={`${api} API`} />}
        </div>
    );
}
