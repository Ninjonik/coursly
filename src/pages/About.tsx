import TeamMemberCard from "../components/about/TeamMemberCard.tsx";

const teamMembers = [
    {
        name: 'Katarína Kováčová',
        role: 'Frontend Team Lead @ IGPortals',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        avatarSrc: 'img/avatars/256_9.png',
    },
    {
        name: 'Peter Tóth',
        role: 'Full-stack Freelancer',
        description: 'Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.',
        avatarSrc: 'img/avatars/256_1.png',
        type: true,
    },
    {
        name: 'Andrej Baláž',
        role: 'Native Developer @ Nexly',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra diam.',
        avatarSrc: 'img/avatars/256_5.png',
    },
    {
        name: 'Martina Šimková',
        role: 'UX/UI Designer @ Creative Labs',
        description: 'Proin eget tortor risus. Vivamus vestibulum lorem id ligula porta felis euismod semper.',
        avatarSrc: 'img/avatars/256_12.png',
        type: true,
    },
];

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
                        <h3 className={"text-xl"}>Začínali sme so zdokonaľovaním samých seba a pokračujeme láskou k
                            učeniu</h3>
                    </div>
                </div>
            </article>
            <article className="flex flex-col gap-16 w-full">
                {teamMembers.map((member) => (
                    <TeamMemberCard key={member.name} {...member} />
                ))}
            </article>
        </main>
    )
}