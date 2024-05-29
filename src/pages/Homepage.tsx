import {Button} from "@material-tailwind/react";
import ReviewCard from "../components/homepage/ReviewCard.tsx";

export default function Homepage() {


    return (
        <main className={"w-full flex flex-col gap-32 my-16"}>
            <article className={"flex flex-col gap-16 items-center h-screen"}>
                <div className={"flex flex-col gap-8 justify-evenly items-center h-full"}>
                    <div className={"h-1/3 flex flex-col gap-8 justify-center items-center"}>
                        <h2 className={"text-5xl font-bold"}>Odkryte svet príležitostí s Courslio</h2>
                        <h3 className={"text-xl"}>Získajte prístup k najlepším kurzom, ktoré vám pomôžu na ceste k
                            úspechu</h3>
                        <Button color={"purple"} className={"w-64"}>Odkryť skrytý talent</Button>
                    </div>
                    <img
                        className="h-2/3 w-full rounded-lg object-cover object-top"
                        src="img/smart.jpg"
                        alt="inspirational image"
                    />
                </div>
            </article>
            <article className={"flex flex-col gap-4 text-start justify-self-start"}>
                <h2 className={"text-3xl font-bold"}>Vaše hodnotenie</h2>
                <h3 className={"text-xl"}>Ako to vidia tí, ktorí už prešli Courslio kurzami?</h3>
                <div className={"flex items-center flex-col md:flex-row mt-4 gap-8"}>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </div>
            </article>
        </main>
    )
}