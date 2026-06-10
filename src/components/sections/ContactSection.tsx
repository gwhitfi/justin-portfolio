export default function ContactSection() {
    return (
        <div
            id="contact"
            className="bg-neutral-950 rounded-2xl p-5 flex flex-col items-center gap-5 w-full md:p-15"
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl">Contact</h2>
            <p className="">
                <a className="underline text-lg" href="mailto:JustinWClemson@gmail.com">
                    Email
                </a>{" "}
                is the best way to contact me, feel free to reach out!
            </p>
            <p>
                View my{" "}
                <a
                    href="https://drive.google.com/file/d/1ylfwHzjxOfg5b6AIPKactL3NEZG3fQP8/view?usp=sharing"
                    target="_blank"
                    className="underline"
                >
                    Resume
                </a>{" "}
            </p>
        </div>
    );
}
