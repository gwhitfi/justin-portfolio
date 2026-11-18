import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

export interface LightboxImage {
    src: string;
    alt: string;
}

interface LightboxProps {
    images: LightboxImage[];
    index: number;
    onIndexChange?: (index: number) => void;
    onClose: () => void;
}

const control =
    "flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-zinc-900/90 font-mono text-xs text-zinc-100 transition hover:border-white/30 hover:bg-zinc-800 focus-visible:outline-white";

// Full-screen image viewer: close button, Escape, previous/next (buttons and arrow keys), zoom (button, or click or
// tap the image), focus kept inside while open and returned afterwards, page scroll locked.
export default function Lightbox({ images, index, onIndexChange, onClose }: LightboxProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const [zoomed, setZoomed] = useState(false);
    const current = images[index];
    const many = images.length > 1 && onIndexChange;

    const go = (delta: number) => {
        if (!onIndexChange) return;
        setZoomed(false);
        onIndexChange((index + delta + images.length) % images.length);
    };

    useEffect(() => {
        const previous = document.activeElement as HTMLElement | null;
        const { overflow, paddingRight } = document.body.style;
        // Where the scrollbar takes up room, pad by its width so the page behind doesn't jump sideways when it goes.
        const scrollbar = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
        closeRef.current?.focus();
        return () => {
            document.body.style.overflow = overflow;
            document.body.style.paddingRight = paddingRight;
            previous?.focus();
        };
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowRight") go(1);
            else if (e.key === "ArrowLeft") go(-1);
            else if (e.key === "Tab" && dialogRef.current) {
                const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button");
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                const active = document.activeElement;
                if (!dialogRef.current.contains(active)) {
                    // Focus was dropped (a click on the image, say): bring it back instead of tabbing into the page behind.
                    e.preventDefault();
                    first.focus();
                } else if (e.shiftKey && active === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && active === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    return (
        <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            onClick={onClose}
            className="fixed inset-0 z-50 flex animate-fade-in flex-col bg-black/85 backdrop-blur-sm"
        >
            <div className="flex items-center gap-3 p-3 sm:p-4" onClick={(e) => e.stopPropagation()}>
                <p className="line-clamp-2 min-w-0 flex-1 font-mono text-xs text-zinc-200 sm:line-clamp-1 sm:text-sm">{current.alt}</p>
                {many && (
                    <p className="shrink-0 font-mono text-xs text-zinc-400 sm:text-sm">
                        {index + 1} of {images.length}
                    </p>
                )}
                <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className={`w-11 ${control}`}>
                    <X size={20} aria-hidden="true" />
                </button>
            </div>
            <div className={`flex min-h-0 flex-1 ${zoomed ? "overflow-auto" : "items-center justify-center overflow-hidden"} px-3 sm:px-16`}>
                <img
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    onClick={(e) => {
                        e.stopPropagation();
                        setZoomed((z) => !z);
                    }}
                    className={`animate-fade-in ${
                        zoomed
                            ? "m-auto w-[250%] max-w-none cursor-zoom-out rounded-lg sm:w-[160%]"
                            : "max-h-full max-w-full cursor-zoom-in rounded-xl shadow-2xl"
                    }`}
                />
            </div>
            <div className="flex items-center justify-center gap-3 p-3 sm:p-4" onClick={(e) => e.stopPropagation()}>
                {many && (
                    <button type="button" onClick={() => go(-1)} aria-label="Previous screenshot" className={`w-11 ${control}`}>
                        <ChevronLeft size={20} aria-hidden="true" />
                    </button>
                )}
                <button type="button" onClick={() => setZoomed((z) => !z)} className={`w-28 ${control}`}>
                    {zoomed ? <ZoomOut size={16} aria-hidden="true" /> : <ZoomIn size={16} aria-hidden="true" />}
                    {zoomed ? "Zoom out" : "Zoom in"}
                </button>
                {many && (
                    <button type="button" onClick={() => go(1)} aria-label="Next screenshot" className={`w-11 ${control}`}>
                        <ChevronRight size={20} aria-hidden="true" />
                    </button>
                )}
            </div>
        </div>
    );
}
