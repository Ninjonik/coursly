import {Button} from "@material-tailwind/react";
import ReviewCard from "../components/homepage/ReviewCard.tsx";
import { motion } from "framer-motion";
import {childVariants, routeVariants} from "../Routes.tsx";
import {Link} from "react-router-dom";

export default function Homepage() {


    return (
        <motion.main variants={routeVariants} initial="initial" animate="final" className={"w-full flex flex-col gap-32 my-0 md:my-16"}>
            <motion.article initial={{opacity: 0, x: -400}} whileInView={{opacity: 1, x: 0}} transition={{ duration: 0.5 }} className={"flex flex-col gap-16 items-center h-screen"}>
                <motion.div variants={childVariants} initial="initial" animate="final" className={"flex flex-col gap-8 justify-evenly items-center h-full"}>
                    <div className={"h-1/3 flex flex-col gap-8 justify-center items-center"}>
                        <h2 className={"text-3xl md:text-5xl font-bold"}>Odhaľte svet príležitostí s Courslio</h2>
                        <h3 className={"text-lg md:text-xl"}>Získajte prístup k najlepším kurzom, ktoré vám pomôžu na ceste k
                            úspechu</h3>
                        <Link to={"/courses"}><Button color={"purple"} className={"w-64"}>Odhaliť skrytý talent</Button></Link>
                    </div>
                    <img
                        className="h-2/3 w-full rounded-lg object-cover object-top"
                        src="img/smart.jpg"
                        alt="inspirational image"
                    />
                </motion.div>
            </motion.article>
            <motion.article initial={{opacity: 0, x: -400}} whileInView={{opacity: 1, x: 0}} transition={{ duration: 0.5 }} className={"flex flex-col gap-4 text-center md:text-left justify-self-start"}>
                <h2 className={"text-3xl font-bold"}>Vaše hodnotenie</h2>
                <h3 className={"text-xl"}>Ako to vidia tí, ktorí už prešli Courslio kurzami?</h3>
                <div className={"flex items-center flex-col md:flex-row mt-4 gap-8"}>
                    <ReviewCard
                        name="Katarína Kováčová"
                        role="Frontend Developer"
                        avatarSrc="img/avatars/256_9.png"
                        quote="Tento kurz mi pomohol posunúť sa na novú úroveň."
                    />
                    <ReviewCard
                        name="Peter Tóth"
                        role="Web Designer"
                        avatarSrc="img/avatars/256_1.png"
                        quote="Odporúčam všetkým, ktorí chcú zlepšiť svoje zručnosti."
                    />
                    <ReviewCard
                        name="Andrej Baláž"
                        role="Marketing Manager"
                        avatarSrc="img/avatars/256_5.png"
                        quote="Skvelý kurz s praktickými ukážkami a výborným lektorom."
                    />
                </div>
            </motion.article>
        </motion.main>
    )
}