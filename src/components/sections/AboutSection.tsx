const SKILLS = [
    ["Languages", "TypeScript, JavaScript, Python, C++, Rust, SQL, Java, C#"],
    ["Frontend", "React, Next.js, Tailwind CSS"],
    ["Backend & data", "Node.js, PostgreSQL, Prisma, REST APIs, OAuth 2.0 / PKCE"],
    ["Tools", "Git, GitHub Actions, Vitest, Linux, Vercel, Claude Code, Codex"],
] as const;

export default function AboutSection() {
    return (
        <section id="about" className="flex scroll-mt-20 flex-col items-center gap-8 border-t border-ink/10 pt-12">
            <h2 className="text-2xl md:text-3xl">About</h2>
            <div className="flex max-w-2xl flex-col gap-4 leading-relaxed text-body">
                <p>
                    I finished my Bachelor of Science in Computer Science at Western Governors University in March 2026. I
                    have spent nearly 15 years in business after earning a BA in History from Clemson University in 2012.
                    I have worked in real estate (property management, sales, flipping, development, and investing) and
                    managed the warehouse and shipping for an online retailer moving hundreds of products every day.
                </p>
                <p>
                    My background shapes what I build, finding solutions to problems I experience every day managing
                    rental properties and other business management issues. Work Order Fox is the prime example, which
                    came from a desire to create a simple but elegant application for managing everyday work orders that
                    can be automated with the help of agentic AI.
                </p>
            </div>
            <dl className="grid w-full max-w-2xl gap-x-6 gap-y-3 rounded-2xl border border-ink/10 bg-surface/60 p-5 text-sm sm:grid-cols-[auto_1fr] sm:gap-y-2.5">
                {SKILLS.map(([group, items]) => (
                    <div key={group} className="flex flex-col gap-1 sm:contents">
                        <dt className="font-mono text-xs font-medium text-accent sm:pt-0.5">{group}</dt>
                        <dd className="text-body">{items}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
