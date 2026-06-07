interface TooltipProps {
    text: string;
}

export default function Tooltip({ text }: TooltipProps) {
    return (
        <div className="absolute top-full bg-neutral-900 z-10 border border-neutral-700 p-2 rounded-xl text-center whitespace-nowrap">
            <p>{text}</p>
        </div>
    );
}
