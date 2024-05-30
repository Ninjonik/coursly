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
        <Card className="w-full md:max-w-[24rem] overflow-hidden flex flex-row h-32 md:h-16 items-center justify-between gap-4 pl-4">
            <div className={"flex flex-row py-4 gap-4 items-center"}>
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
                className={"w-32 h-32 md:w-16 md:h-16"}
            />
        </Card>
    );
}