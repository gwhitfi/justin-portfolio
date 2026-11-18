import { MapPin } from "lucide-react";
import { AVAILABILITY, LOCATION } from "../data/profile";

// Location and availability. One line with a dot between them on wider screens, two tidy lines on phones.
// `className` sets the alignment (items-* while stacked, justify-* once in a row).
export default function LocationLine({ className = "" }: { className?: string }) {
    return (
        <p className={`flex flex-col gap-x-2 gap-y-0.5 font-mono text-xs text-muted sm:flex-row sm:items-center ${className}`}>
            <span className="flex items-center gap-1.5">
                <MapPin size={14} aria-hidden="true" />
                {LOCATION}
            </span>
            <span aria-hidden="true" className="max-sm:hidden">
                ·
            </span>
            <span>{AVAILABILITY}</span>
        </p>
    );
}
