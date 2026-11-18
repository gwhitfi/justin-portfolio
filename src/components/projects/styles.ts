// Shared link attributes and button styles, so every button on the page matches.
export const external = { target: "_blank", rel: "noreferrer" } as const;

// Both buttons carry a border (transparent on the primary) so they are the same height side by side.
const button =
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border px-4 py-2 text-center text-sm font-medium transition active:scale-[0.98]";

export const primaryButton = `${button} border-transparent bg-accent text-white shadow-lg shadow-accent/20 hover:brightness-110`;
export const secondaryButton = `${button} border-ink/15 text-ink hover:border-ink/30 hover:bg-ink/10`;

// Small mono text links ("GitHub →", "View CI runs on GitHub →"). The vertical padding is tap area.
export const textLink = "rounded-sm py-2 font-mono text-xs font-medium underline-offset-4 transition hover:underline";

// The frame shared by the highlight and earlier-project cards. Not clipped (the screenshot rounds its own
// corners), so a keyboard focus ring on the screenshot is never cut off.
export const card =
    "flex flex-col rounded-2xl border border-ink/10 bg-surface/80 shadow-xs transition duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5";
