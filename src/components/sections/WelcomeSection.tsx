import justin from "../../assets/justin.jpeg";

export default function WelcomeSection() {
    return (
        <div className="bg-neutral-950 rounded-2xl p-5 flex flex-col items-center gap-5 md:p-15">
            <img src={justin} className="w-32 rounded-full" alt="" />
            <h2 className="text-2xl md:text-3xl">Hey, I'm Justin!</h2>
            <div className="flex flex-col gap-5 md:text-2xl">
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
