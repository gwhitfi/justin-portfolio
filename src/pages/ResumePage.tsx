import { useEffect } from "react";

// Placeholder: the resume content goes here later.
export default function ResumePage() {
    useEffect(() => {
        document.title = "Resume | Justin Whitfield";
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <section className="flex min-h-[50vh] flex-col gap-8 pt-6 md:pt-8">
            <h1 className="text-3xl md:text-4xl">Resume</h1>
        </section>
    );
}
