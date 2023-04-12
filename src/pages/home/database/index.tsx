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

export interface ITech {
    name: string;
    image: string;
}

export const DATABASE: ITech[] = [
    {
        name: "React",
        image: ReactJS,
    },
    {
        name: "Next.js",
        image: NextJS,
    },
    {
        name: "Tailwind CSS",
        image: Tailwind,
    },
    {
        name: "ChakraUI",
        image: ChakraUI,
    },
    {
        name: "Nest.js",
        image: NestJS,
    },
    {
        name: "Node.js",
        image: NodeJS,
    },
    {
        name: "TypeScript",
        image: TypeScript,
    },
    {
        name: "Docker",
        image: Docker,
    },
    {
        name: "PostgreSQL",
        image: PostgreSQL,
    },
    {
        name: "Prisma",
        image: Prisma,
    },
    {
        name: "Express.js",
        image: Express,
    },
    {
        name: "TypeORM",
        image: TypeORM,
    },
    {
        name: "Jest",
        image: Jest,
    },
    {
        name: "MongoDB",
        image: MongoDB,
    },
    {
        name: "Django",
        image: Django,
    },
    {
        name: "Git",
        image: Git,
    },
];
