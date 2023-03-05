import ReactJS from "../../../../src/assets/technologies/React-icon.svg.png";
import NextJS from "../../../../src/assets/technologies/next-js.svg";
import ChakraUI from "../../../../src/assets/technologies/chakraui.svg";
import NodeJS from "../../../../src/assets/technologies/nodejs.png";
import Git from "../../../../src/assets/technologies/git.png";
import Django from "../../../../src/assets/technologies/django.png";
import Jest from "../../../../src/assets/technologies/jest.png";
import TypeScript from "../../../../src/assets/technologies/Typescript_logo_2020.svg.png";
import PostgreSQL from "../../../../src/assets/technologies/postgresql-icon.webp";
import TypeORM from "../../../../src/assets/technologies/typeorm.jpg";
import Prisma from "../../../../src/assets/technologies/prisma.png";
import Tailwind from "../../../../src/assets/technologies/tailwind.png";
import Docker from "../../../../src/assets/technologies/docker.png";
import NestJS from "../../../../src/assets/technologies/nestjs.png";
import Express from "../../../../src/assets/technologies/express.png";

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
        name: "NextJS",
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
        name: "Git",
        image: Git,
    },
    {
        name: "NestJS",
        image: NestJS,
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
        name: "NodeJS",
        image: NodeJS,
    },
    {
        name: "ExpressJS",
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
    // {
    //     name: 'MongoDB',
    //     image: 'https://devkico.itexto.com.br/wp-content/uploads/2013/10/mongodb-leaf.png'
    // },
    // {
    //     name: 'Amazon AWS',
    //     image: 'https://user-images.githubusercontent.com/51785898/91358419-31502480-e7c9-11ea-9bb8-5124117e9a75.png'
    // },
    {
        name: "Django",
        image: Django,
    },
];
