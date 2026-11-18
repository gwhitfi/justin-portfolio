export default function ServicePill({ name }: { name: string }) {
    return (
        <span className="rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-accent">{name}</span>
    );
}
