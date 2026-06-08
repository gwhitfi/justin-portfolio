import { useState } from "react";
import Tooltip from "./Tooltip";

interface TechIconProps {
    icon: string;
}
export default function TechIcon({ icon }: TechIconProps) {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    return (
        <div
            className=""
            onMouseEnter={() => setTooltipOpen(true)}
            onMouseLeave={() => setTooltipOpen(false)}
        >
            <i className={`${icon} text-3xl md:text-4xl lg:text-5xl relative`}></i>
            {tooltipOpen && <Tooltip text={icon.split("-")[1]} />}
        </div>
    );
}
