import {Button, Input, Textarea} from "@material-tailwind/react";
import { motion } from "framer-motion";
import {childVariants, routeVariants} from "../Routes.tsx";

export default function Contact() {

    return (
        <motion.main variants={routeVariants} initial="initial" animate="final" className={"w-full flex flex-col gap-32 my-16"}>
            <article className={"flex flex-col gap-16 items-center h-screen"}>
                <motion.div variants={childVariants} initial="initial" animate="final" className={"flex flex-col gap-8 justify-evenly items-center h-full"}>
                    <div className={"h-1/3 flex flex-col gap-8 justify-center items-center"}>
                        <h2 className={"text-5xl font-bold"}>Kontaktujte nás</h2>
                        <h3 className={"text-xl"}> Sme vám vždy k dispozícií a snažíme sa vám vždy čo najviac pomôcť.</h3>
                    </div>
                    <img
                        className="h-2/3 w-full rounded-lg object-cover object-top rounded-[20%]"
                        src="img/contact.jpg"
                        alt="contact us image"
                    />
                </motion.div>
            </article>
            <article className={"flex flex-col gap-4 w-full md:w-2/3 bg-white relative rounded-3xl self-center -top-96 p-8 shadow-md -mb-72"}>
                <h2 className={"font-bold text-2xl"}>Kontaktujte nás</h2>
                <div className={"flex flex-col md:flex-row md:justify-evenly gap-4"}>
                    <Input label="Vaše meno" crossOrigin={undefined} />
                    <Input label="Predmet správy" crossOrigin={undefined} />
                </div>
                <Input label="Vaša e-mailová adresa" crossOrigin={undefined} />
                <Textarea label={"Správa"}></Textarea>
                <Button className={"place-self-end"}>Odoslať</Button>
            </article>
        </motion.main>
    )
}