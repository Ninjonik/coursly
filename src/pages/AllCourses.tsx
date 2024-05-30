import CourseCard from "../components/courses/CourseCard.tsx";

const courses = [
    {
        avatarSrc: 'img/avatars/256_9.png',
        name: 'Katarína Kováčová',
        role: 'Frontend Team Lead @ IGPortals',
        cardImageSrc: 'img/frontend.png',
        title: 'Frontend Masters',
        description: 'Ponorte sa do hĺbok frontendového vývoja a staňte sa majstrom v tvorbe webových stránok a webových aplikácií. Naučte sa všetko od HTML a CSS až po JavaScript a frameworky ako React a Angular.',
    },
    {
        avatarSrc: 'img/avatars/256_1.png',
        name: 'Peter Tóth',
        role: 'Full-stack Freelancer',
        cardImageSrc: 'img/fullstack.png',
        title: 'Fullstack 101',
        description: 'Ovládnite frontendový aj backendový vývoj a staňte sa univerzálnym webovým vývojárom. Naučte sa jazyky ako HTML, CSS, JavaScript, Python, Node.js a databázové systémy ako MySQL a PostgreSQL.',
    },
    {
        avatarSrc: 'img/avatars/256_5.png',
        name: 'Andrej Baláž',
        role: 'Native Developer @ Nexly',
        cardImageSrc: 'img/flutter.jpg',
        title: 'Flutter 0-100',
        description: 'Vytvárajte krásne a natívne mobilné aplikácie pre iOS a Android pomocou Flutteru. Naučte sa od základov Flutteru až po pokročilé koncepty ako state management a push notifikácie.',
    },
    {
        avatarSrc: 'img/avatars/256_3.png',
        name: 'Martina Šimková',
        role: 'UX/UI Designer @ Creative Labs',
        cardImageSrc: 'img/uiux.jpg',
        title: 'UX/UI Design Essentials',
        description: 'Naučte sa navrhovať intuitívne a pútavé užívateľské rozhrania (UI) a užívateľské skúsenosti (UX) pre webové stránky a mobilné aplikácie. Získajte znalosti o typografii, kompozícii, farebnej palete a testovaní použiteľnosti.',
    },
    {
        avatarSrc: 'img/avatars/256_2.png',
        name: 'Michal Novák',
        role: 'Backend Developer @ StartupX',
        cardImageSrc: 'img/backend.jpg',
        title: 'Backend Development with Python',
        description: 'Vytvárajte robustné a škálovateľné backendové systémy pomocou jazyka Python. Naučte sa frameworky ako Django a Flask, databázové systémy ako PostgreSQL a NoSQL databázy ako MongoDB.',
    },
    {
        avatarSrc: 'img/avatars/256_4.png',
        name: 'Jana Horvátová',
        role: 'Data Scientist @ DataPro',
        cardImageSrc: 'img/datascience.webp',
        title: 'Data Science with Python',
        description: 'Naučte sa analyzovať a spracovávať veľké objemy dát pomocou Pythonu. Získajte znalosti o strojovom učení, hlbokom učení, vizualizácii dát a reportovaní.',
    },
    {
        avatarSrc: 'img/avatars/256_6.png',
        name: 'Ján Novák',
        role: 'Graphic Designer @ DesignEvo',
        cardImageSrc: 'img/graphicdesign.avif',
        title: 'Graphic Design Fundamentals',
        description: 'Naučte sa základy grafického dizajnu a vytvorte pútavé vizuály pre rôzne platformy. Získajte znalosti o typografii, kompozícii, farebnej palete a softvéroch ako Adobe Photoshop a Illustrator.',
    },
    {
        avatarSrc: 'img/avatars/256_7.png',
        name: 'Zuzana Horvátová',
        role: 'Social Media Manager @ Webflow',
        cardImageSrc: 'img/socialmedia.jpg',
        title: 'Social Media Marketing Strategies',
        description: 'Vytvorte efektívne stratégie sociálnych médií a oslovte svoje cieľové publikum. Naučte sa písať pútavý obsah, budovať online komunitu a analyzovať výsledky kampaní.',
    },
    {
        avatarSrc: 'img/avatars/256_8.png',
        name: 'Peter Mrkvička',
        role: 'SEO Specialist @ SEO.sk',
        cardImageSrc: 'img/seo.jpeg',
        title: 'Search Engine Optimization (SEO)',
        description: 'Naučte sa optimalizovať svoje webové stránky pre vyhľadávače a získajte viac organickej návštevnosti. Získajte znalosti o kľúčových slovách, budovaní spätných odkazov a technickom SEO.',
    },
];

export default function AllCourses() {

    return (
        <main className={"w-full flex flex-col gap-32 my-16"}>
            <article className={"flex flex-col gap-16 items-center"}>
                <div className={"flex flex-col gap-8 justify-evenly items-center h-full"}>
                    <div className={"h-1/3 flex flex-col gap-8 justify-center items-center"}>
                        <h2 className={"text-5xl font-bold"}>Ponuka kurzov</h2>
                    </div>
                </div>
            </article>
            <article className={"grid grid-cols-1 grid-rows-9 md:grid-cols-3 md:grid-rows-3 gap-16 w-full"}>
                {courses.map((course) => (
                    <CourseCard key={course.title} {...course} />
                ))}
            </article>
        </main>
    )
}