import justin from "../../assets/justin.webp";
import LocationLine from "../LocationLine";
import { external, primaryButton, secondaryButton } from "../projects/styles";
import { DEMO_URL, GITHUB_URL, WORK_ORDER_FOX_URL } from "../../data/profile";

export default function WelcomeSection() {
    return (
        <section className="flex flex-col items-center gap-6 pt-6 md:flex-row md:items-start md:gap-8 md:pt-8">
            <a
                href={GITHUB_URL}
                {...external}
                aria-label="Justin Whitfield on GitHub"
                title="GitHub profile"
                className="group shrink-0 rounded-full focus-visible:outline-offset-8"
            >
                <img
                    src={justin}
                    width={320}
                    height={352}
                    className="size-24 rounded-full object-cover object-top ring-2 ring-accent/60 ring-offset-4 ring-offset-page transition duration-300 group-hover:scale-[1.03] group-hover:ring-accent md:size-28 lg:size-36"
                    alt=""
                />
            </a>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <h1 className="text-2xl min-[360px]:text-3xl md:text-4xl">Hey, I'm Justin!</h1>
                    {/* Two lines on phones, one line with a dot between them from sm up. */}
                    <p className="flex flex-col font-mono text-sm text-accent sm:block">
                        <span>Software developer</span>
                        <span aria-hidden="true" className="max-sm:hidden">
                            {" · "}
                        </span>
                        <span>B.S. Computer Science, WGU 2026</span>
                    </p>
                    <LocationLine className="items-center sm:justify-center md:justify-start" />
                </div>
                <div className="flex max-w-2xl flex-col gap-3 leading-relaxed text-body">
                    <p>
                        I built and run{" "}
                        <a
                            href={WORK_ORDER_FOX_URL}
                            {...external}
                            className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
                        >
                            Work Order Fox
                        </a>
                        , a multi-tenant SaaS that my property management business uses daily. I've spent nearly 15
                        years in real estate and online retail before software, so I have business administration
                        experience as well. I have experience with bookkeeping, accounting, managing inventory, and
                        coordinating logistics with shipping partners like USPS, UPS, and FedEx.
                    </p>
                    <p>
                        In software, I have been coding for years and have a solid understanding of software
                        engineering fundamentals. I've since expanded my skills and use AI tools like Claude Code and
                        Codex every day to learn and ship faster. I review and understand everything I ship. I
                        especially enjoy building MCP servers and agentic features, like the one that lets Claude Code
                        draft work orders in Work Order Fox. I'm looking for a junior software engineering role.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                    <a href={DEMO_URL} {...external} className={primaryButton}>
                        Try the live demo
                    </a>
                    <a href="#projects" className={secondaryButton}>
                        See my projects
                    </a>
                </div>
            </div>
        </section>
    );
}
