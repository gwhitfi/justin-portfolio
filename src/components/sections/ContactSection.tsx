export default function ContactSection() {
    return (
        <div id="contact" className="flex scroll-mt-28 justify-center gap-3">
            <a
                href="mailto:JustinWClemson@gmail.com"
                className="w-32 rounded-full bg-accent py-2 text-center text-sm font-medium text-zinc-950 shadow-lg shadow-accent/20 transition hover:brightness-110"
            >
                Email
            </a>
            <a
                href="https://drive.google.com/file/d/1ylfwHzjxOfg5b6AIPKactL3NEZG3fQP8/view?usp=sharing"
                target="_blank"
                className="w-32 rounded-full border border-white/15 py-2 text-center text-sm font-medium text-zinc-100 transition hover:bg-white/10"
            >
                Resume
            </a>
        </div>
    );
}
