import TeamMemberCard from "../components/about/TeamMemberCard.tsx";

export default function About() {

    return (
        <main className={"w-full flex flex-col gap-32 my-16"}>
            <article className={"flex flex-col gap-16 items-center h-screen"}>
                <div className={"flex flex-col gap-8 justify-evenly items-center h-full"}>
                    <img
                        className="h-2/3 w-full rounded-lg object-cover object-top"
                        src="img/about.jpg"
                        alt="abous us image"
                    />
                    <div className={"h-1/3 flex flex-col gap-8 justify-center items-center"}>
                        <h2 className={"text-5xl font-bold"}>Kto sme?</h2>
                        <h3 className={"text-xl"}> Začínali sme so zdokonaľovaním samých seba a pokračujeme láskou k učeniu</h3>
                    </div>
                </div>
            </article>
            <article className={"flex flex-col gap-16 w-full"}>
                <TeamMemberCard />
                <TeamMemberCard type={true} />
                <TeamMemberCard />
                <TeamMemberCard type={true} />
            </article>
        </main>
    )
}