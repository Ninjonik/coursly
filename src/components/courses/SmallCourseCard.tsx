import {
    Card,
    Typography,
    Avatar,
} from "@material-tailwind/react";

interface SmallCourseCardProps {
    avatarSrc: string;
    cardImageSrc: string;
    title: string;
    description: string;
}

export default function SmallCourseCardProps({avatarSrc, cardImageSrc, title, description}: SmallCourseCardProps) {
    return (
        <Card className="max-w-[24rem] overflow-hidden flex flex-row h-16 items-center gap-4 pl-4">
            <div className={"flex flex-row py-4 gap-4"}>
                <Avatar
                    size="lg"
                    variant="circular"
                    src={avatarSrc}
                    alt={"Course's author"}
                />
                <div className={"flex flex-col justify-center items-center"}>
                    <Typography variant="h5" color="blue-gray">
                        {title}
                    </Typography>
                    <Typography variant="h6" color="gray" className="mt-3 font-normal">
                        {description}
                    </Typography>
                </div>
            </div>
            <img
                src={cardImageSrc}
                alt={title}
                className={"w-16 h-16"}
            />
        </Card>
    );
}