import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";

interface TeamMemberProps {
    name: string;
    role: string;
    description: string;
    avatarSrc: string; // cesta k obrázku avatara (zložka img/avatars/256_1-256_16)
    type?: boolean; // Voliteľná vlastnosť na ovládanie zarovnania
}

export default function TeamMemberCard({ name, role, description, avatarSrc, type }: TeamMemberProps) {
    return (
        <Card color="transparent" shadow={false} className={`w-full w-1/2 p-4 ${type && "place-self-end"}`}>
            <CardBody className="mb-6 p-0 flex flex-row gap-4">
                <Avatar size="lg" variant="circular" src={avatarSrc} alt={name} className={`${type && "order-last"}`} />
                <div className={`flex w-full flex-col gap-0.5 text-left ${type ? "text-right" : "text-left"}`}>
                    <Typography color="blue-gray">{role}</Typography>
                    <Typography variant="h5" color="blue-gray">
                        {name}
                    </Typography>
                    <Typography color="blue-gray">{description}</Typography>
                </div>
            </CardBody>
        </Card>
    );
}
