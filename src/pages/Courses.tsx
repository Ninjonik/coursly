import CourseCard from "../components/courses/CourseCard.tsx";
import SmallCourseCard from "../components/courses/SmallCourseCard.tsx";
import {Carousel} from "@material-tailwind/react";

export default function Courses() {

    return (
        <main className={"w-full flex flex-col gap-32 my-16"}>
            <article className={"flex flex-col gap-16 items-center"}>
                <div className={"flex flex-col gap-8 justify-evenly items-center h-full"}>
                    <div className={"h-1/3 flex flex-col gap-8 justify-center items-center"}>
                        <h2 className={"text-5xl font-bold"}>Ponuka kurzov</h2>
                        <h3 className={"text-xl"}>V našej ponuke kurzov si každý nájde to, čo ho posunie ďalej</h3>
                    </div>
                </div>
            </article>
            <article className={"flex flex-col md:flex-row gap-16 w-full"}>
                <CourseCard avatarSrc={"img/avatars/256_9.png"} name={"Katarína Kováčová"}
                            role={"Frontend Team Lead @ IGPortals"} cardImageSrc={"img/frontend.png"}
                            title={"Frontend Masters"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}/>
                <CourseCard avatarSrc={"img/avatars/256_1.png"} name={"Peter Tóth"} role={"Full-stack Freelancer"}
                            cardImageSrc={"img/fullstack.png"} title={"Fullstack 101"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}/>
                <CourseCard avatarSrc={"img/avatars/256_5.png"} name={"Andrej Baláž"} role={"Native Developer @ Nexly"}
                            cardImageSrc={"img/flutter.jpg"} title={"Flutter 0-100"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}/>
            </article>
            <article className={"flex flex-col md:flex-row gap-16 w-full"}>
                <SmallCourseCard avatarSrc={"img/avatars/256_12.png"}
                            cardImageSrc={"img/js.png"}
                            title={"Svelte Headstart"}
                            description={"Neviete Svelte? Rýchlo!"}/>
                <SmallCourseCard avatarSrc={"img/avatars/256_13.png"}
                            cardImageSrc={"img/angular.png"}
                            title={"Angular Finisher"}
                            description={"Najvyšší čas naučiť sa ho!"}/>
                <SmallCourseCard avatarSrc={"img/avatars/256_14.png"}
                            cardImageSrc={"img/smart.jpg"}
                            title={"OOP Fundamentals"}
                            description={"Základy dobrých kodérov."}/>
            </article>
            <article className={"w-full"}>
                <Carousel className="rounded-xl" autoplay={true}>
                    <img
                        src="img/fullstack.png"
                        alt="Fullstack 101"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="img/flutter.jpg"
                        alt="Flutter 0-100"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="img/frontend.png"
                        alt="Frontend Masters"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            </article>
        </main>
    )
}