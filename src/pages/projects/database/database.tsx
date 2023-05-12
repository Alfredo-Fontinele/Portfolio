import SongUp from "../../../../src/assets/projects/songup.png";
import TodoList from "../../../../src/assets/projects/todolist.png";
import PasswordGenerator from "../../../../src/assets/projects/password_generator.png";
import ShopNow from "../../../../src/assets/projects/shop_now.png";
import Calculator from "../../../../src/assets/projects/calculator.png";
import FoodBox from "../../../../src/assets/projects/foodbox.png";
import KenzieHub from "../../../../src/assets/projects/kenzie_hub.png";
import KenzieBurguer from "../../../../src/assets/projects/kenzie_burguer.png";
import Nukenzie from "../../../assets/projects/nukenzie.png";
import ReactionNews from "../../../../src/assets/projects/new_reaction.png";
import ClieCont from "../../../../src/assets/projects/clie-cont.png";

import ReactJS from "../../../../src/assets/technologies/react.svg.png";
import NextJS from "../../../../src/assets/technologies/next-js.svg";
import ChakraUI from "../../../../src/assets/technologies/chakraui.svg";
import NodeJS from "../../../../src/assets/technologies/nodejs.png";
import Git from "../../../../src/assets/technologies/git.png";
import Django from "../../../../src/assets/technologies/django.png";
import Jest from "../../../../src/assets/technologies/jest.png";
import TypeScript from "../../../../src/assets/technologies/typescript.svg.png";
import PostgreSQL from "../../../../src/assets/technologies/postgresql.webp";
import TypeORM from "../../../../src/assets/technologies/typeorm.jpg";
import Prisma from "../../../../src/assets/technologies/prisma.png";
import Tailwind from "../../../../src/assets/technologies/tailwind.png";
import Docker from "../../../../src/assets/technologies/docker.png";
import NestJS from "../../../../src/assets/technologies/nestjs.png";
import Express from "../../../../src/assets/technologies/express.png";
import MongoDB from "../../../../src/assets/technologies/mongo-db.png";
import NextEco from "../../../../src/assets/projects/next_eco.png";

const Github =
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg";
const StyledComponents =
    "https://avatars.githubusercontent.com/u/20658825?s=200&v=4";
const FramerMotion =
    "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png";

interface ITechnology {
    name: string;
    icon: string;
}

export interface IProject {
    name: string;
    image: string;
    url: string;
    description: string;
    tecnologies?: ITechnology[];
}

export const DATABASE_PROJECTS: IProject[] = [
    {
        name: "NextEco",
        image: NextEco,
        url: "https://github.com/Alfredo-Fontinele/NextEco",
        description: "Em Andamento",
        tecnologies: [
            { name: "Next.js", icon: NextJS },
            { name: "TypeScript", icon: TypeScript },
            { name: "TailwindCSS", icon: Tailwind },
            { name: "Framer Motion", icon: FramerMotion },
        ],
    },
    {
        name: "ClieCont",
        image: ClieCont,
        url: "https://clie-cont.vercel.app/",
        description: "Plataforma de Contatos",
        tecnologies: [
            { name: "React", icon: ReactJS },
            { name: "ChakraUI", icon: ChakraUI },
            { name: "Node.js", icon: NodeJS },
            { name: "Express.js", icon: Express },
            { name: "TypeScript", icon: TypeScript },
            { name: "PostgreSQL", icon: PostgreSQL },
            { name: "Prisma", icon: Prisma },
            { name: "Jest", icon: Jest },
        ],
    },
    {
        name: "Reaction News",
        image: ReactionNews,
        url: "https://reaction-news.vercel.app/",
        description: "Plataforma de Notícias",
        tecnologies: [
            { name: "React", icon: ReactJS },
            { name: "ChakraUI", icon: ChakraUI },
            { name: "Node.js", icon: NodeJS },
            { name: "Express.js", icon: Express },
            { name: "TypeScript", icon: TypeScript },
            { name: "PostgreSQL", icon: PostgreSQL },
            { name: "Prisma", icon: Prisma },
            { name: "Jest", icon: Jest },
        ],
    },
    {
        name: "Kenzie Hub",
        image: KenzieHub,
        url: "https://react-entrega-kenzie-hub-alfredo-fontinele-alfredo-fontinele.vercel.app/",
        description: "Plataforma de Portfólios",
        tecnologies: [
            { name: "React", icon: ReactJS },
            { name: "Styled Components", icon: StyledComponents },
            { name: "Node.js", icon: NodeJS },
            { name: "Express.js", icon: Express },
            { name: "TypeScript", icon: TypeScript },
            { name: "PostgreSQL", icon: PostgreSQL },
            { name: "TypeORM", icon: TypeORM },
        ],
    },
    {
        name: "Notifly",
        image: "https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg",
        url: "https://github.com/Alfredo-Fontinele/Notifly",
        description: "Microsserviço | API de notificações",
        tecnologies: [
            { name: "Nest.js", icon: NestJS },
            { name: "TypeScript", icon: TypeScript },
            { name: "PostgreSQL", icon: PostgreSQL },
            { name: "Prisma", icon: Prisma },
            { name: "Jest", icon: Jest },
            {
                name: "Clean Architecture (SOLID + TDD)",
                icon: "https://bitloops.com/_next/static/media/hexagonal-architecture.fe302e64.svg",
            },
            {
                name: "Workflow",
                icon: Github,
            },
        ],
    },
];
