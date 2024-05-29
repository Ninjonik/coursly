import {Avatar, Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";

export default function ReviewCard() {
    return <Card color="transparent" shadow={true} className="w-full max-w-[26rem] p-4">
        <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
            <Typography className="font-bold" variant={"h4"}>
               "Otvára dvere dokorán"
            </Typography>
        </CardHeader>
        <CardBody className="mb-6 p-0 flex flex-row gap-4">
            <Avatar
                size="lg"
                variant="circular"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
            />
            <div className="flex w-full flex-col gap-0.5">
                <Typography variant="h5" color="blue-gray">
                    Tania Andrew
                </Typography>
                <Typography color="blue-gray">Frontend Lead @ Google</Typography>
            </div>
        </CardBody>
    </Card>;
}
