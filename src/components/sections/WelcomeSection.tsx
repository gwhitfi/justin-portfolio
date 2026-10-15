import justin from "../../assets/justin.jpeg";

export default function WelcomeSection() {
    return (
        <div className="bg-zinc-900/60 border border-white/10 shadow-xl backdrop-blur rounded-3xl p-5 flex flex-col items-center gap-5 md:p-15">
            <img src={justin} className="w-32 rounded-full ring-2 ring-indigo-500/60 ring-offset-4 ring-offset-zinc-900" alt="" />
            <h2 className="text-2xl md:text-3xl">Hey, I'm Justin!</h2>
            <div className="flex flex-col gap-4 text-center text-zinc-400 md:text-lg leading-relaxed">
                <p>
                    I'm a <span className="">software developer</span> who also has a diverse
                    professional background in real estate and online retail. I love to create and
                    learn new things, and I'm excited to see what new projects I can work on next.
                </p>
                <p>Check out some of my current and previous projects!</p>
            </div>
        </div>
    );
}
