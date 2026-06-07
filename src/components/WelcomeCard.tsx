import justin from "../assets/justin.jpeg";

export default function WelcomeCard() {
    return (
        <div className="flex flex-col max-w-xl items-center rounded-2xl text-white bg-neutral-800 justify-center p-5 gap-2">
            <img src={justin} className="w-36 rounded-full" alt="" />
            <h2 className="text-2xl mb-3">Hey, I'm Justin!</h2>
            <div className="flex flex-col text-center text-lg gap-2 text">
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
