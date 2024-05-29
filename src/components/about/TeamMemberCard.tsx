import {Avatar, Card, CardBody, Typography} from "@material-tailwind/react";

interface TeamMemberCardProps {
    type?: boolean
}

export default function TeamMemberCard({type = false}: TeamMemberCardProps) {
    return(
        <Card color="transparent" shadow={false} className={`w-full w-1/2 p-4 ${type && "place-self-end"}`}>
            <CardBody className="mb-6 p-0 flex flex-row gap-4">
                <Avatar
                    size="lg"
                    variant="circular"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="tania andrew"
                    className={`${type && "order-last"}`}
                />
                <div className={`flex w-full flex-col gap-0.5 ${type ? "text-right" : "text-left"}`}>
                    <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                    <Typography variant="h5" color="blue-gray">
                        Tania Andrew
                    </Typography>
                    <Typography color="blue-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid hic itaque laborum maiores nam nobis nulla, reiciendis reprehenderit sequi sint unde ut voluptate. Doloremque illum optio repudiandae totam voluptatem!</Typography>
                </div>
            </CardBody>
        </Card>
    );
}
