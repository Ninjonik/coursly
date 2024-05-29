import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button, Avatar,
} from "@material-tailwind/react";

interface CourseCardProps {
    avatarSrc: string;
    name: string;
    role: string;
    cardImageSrc: string;
    title: string;
    description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
                                                   avatarSrc,
                                                   name,
                                                   role,
                                                   cardImageSrc,
                                                   title,
                                                   description,
                                               }) => {
    return (
        <Card className="mt-6 w-96" shadow={true}>
            <CardHeader shadow={false} className="relative h-56">
                <div className={"flex flex-col justify-center items-start"}>
                    <div className={"p-2 flex flex-row gap-2"}>
                        <Avatar src={avatarSrc} />
                        <div className={"flex flex-col text-left text-black"}>
                            <h3 className={"font-bold text-xl"}>{name}</h3>
                            <h3 className={"text-medium"}>{role}</h3>
                        </div>
                    </div>
                    <img
                        src={cardImageSrc}
                        alt="card-image"
                        className={"w-full h-48"}
                    />
                </div>
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button color={"deep-purple"}>Zobraziť</Button>
            </CardFooter>
        </Card>
    );
};

export default CourseCard;
