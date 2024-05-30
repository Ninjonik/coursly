import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

interface TeamMemberProps {
    name: string;
    role: string;
    description: string;
    avatarSrc: string; // cesta k obrázku avatara (zložka img/avatars/256_1-256_16)
    type?: boolean; // Voliteľná vlastnosť na ovládanie zarovnania
}

export default function TeamMemberCard({ name, role, description, avatarSrc, type }: TeamMemberProps) {
    return (
        <motion.div initial={{x: -400}} whileInView={{x: 0}} transition={{ duration: 1 }} className={`w-full md:w-2/3 ${type && "place-self-end"}`}>
            <Card color="transparent" shadow={false} className={`w-full p-4`}>
                <CardBody className="mb-6 p-0 flex flex-row gap-4">
                    <Avatar size="xxl" variant="circular" src={avatarSrc} alt={name} className={`${type && "order-last"}`} />
                    <div className={`flex w-full flex-col gap-0.5 text-left ${type ? "text-right" : "text-left"}`}>
                        <Typography color="blue-gray" variant={"h6"}>{role}</Typography>
                        <Typography variant="h4" color="blue-gray">
                            {name}
                        </Typography>
                        <Typography color="blue-gray" variant={"paragraph"}>{description}</Typography>
                    </div>
                </CardBody>
            </Card>
        </motion.div>
    );
}
