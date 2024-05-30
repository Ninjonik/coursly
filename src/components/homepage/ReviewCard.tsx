import { Avatar, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

interface ReviewProps {
    name: string;
    role: string;
    avatarSrc: string;
    quote: string;
}

export default function ReviewCard({ name, role, avatarSrc, quote }: ReviewProps) {
    return (
        <Card color="transparent" shadow={true} className="w-full max-w-[26rem] p-4 h-64 md:h-64 flex flex-col justify-between text-center md:text-left">
            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
                <Typography className="font-bold" variant={"h4"}>
                    "{quote}"
                </Typography>
            </CardHeader>
            <CardBody className="mb-6 p-0 flex flex-row gap-4">
                <Avatar size="lg" variant="circular" src={avatarSrc} alt={name} />
                <div className="flex w-full flex-col gap-0.5">
                    <Typography variant="h5" color="blue-gray">
                        {name}
                    </Typography>
                    <Typography color="blue-gray">{role}</Typography>
                </div>
            </CardBody>
        </Card>
    );
}
