interface TooltipProps {
    text: string;
}

export default function Tooltip({ text }: TooltipProps) {
    return (
        <div className="absolute top-full bg-zinc-900/90 backdrop-blur z-10 border border-white/10 shadow-lg p-2 rounded-xl text-center whitespace-nowrap">
            <p>{text}</p>
        </div>
    );
}
