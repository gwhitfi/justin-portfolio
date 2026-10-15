import justin from "../../assets/justin.jpeg";

export default function WelcomeSection() {
    return (
        <section className="flex flex-col items-center gap-6 pt-6 text-center md:flex-row md:pt-8 md:text-left">
            <img
                src={justin}
                className="w-24 shrink-0 rounded-full ring-2 ring-accent/60 ring-offset-4 ring-offset-zinc-950 md:w-32"
                alt=""
            />
            <div className="flex flex-col gap-3">
                <h2 className="text-xl md:text-3xl">Hey, I'm Justin!</h2>
                <div className="flex flex-col gap-3 text-sm text-zinc-400 leading-relaxed">
                    <p>
                        I'm a <span className="">software developer</span> who also has a diverse
                        professional background in real estate and online retail. I love to create
                        and learn new things, and I'm excited to see what new projects I can work on
                        next.
                    </p>
                    <p>Check out some of my current and previous projects!</p>
                </div>
            </div>
        </section>
    );
}
