import { Maximize2 } from "lucide-react";

interface ScreenshotButtonProps {
    src: string;
    alt: string;
    // Accessible name, e.g. "Enlarge Job Scraper screenshot".
    label: string;
    onClick: () => void;
    // Shape and border of the frame.
    className?: string;
    // Aspect ratio and crop of the image inside it.
    imageClassName?: string;
    lazy?: boolean;
}

// A screenshot that opens the lightbox. The corner badge shows it can be enlarged where there is no hover or cursor.
export default function ScreenshotButton({ src, alt, label, onClick, className = "", imageClassName = "", lazy = false }: ScreenshotButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            className={`group/shot relative block w-full cursor-zoom-in overflow-hidden ${className}`}
        >
            <img
                src={src}
                alt={alt}
                loading={lazy ? "lazy" : undefined}
                className={`w-full transition duration-500 group-hover/shot:scale-[1.02] ${imageClassName}`}
            />
            <span
                aria-hidden="true"
                className="pointer-events-none absolute right-2 bottom-2 flex size-7 items-center justify-center rounded-full border border-ink/15 bg-page/80 text-ink opacity-75 transition group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100"
            >
                <Maximize2 size={13} />
            </span>
        </button>
    );
}
