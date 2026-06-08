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
        </div>
    );
}
