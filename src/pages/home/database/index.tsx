import ChakraUI from "../../../../src/assets/technologies/chakraui.svg"
import Docker from "../../../../src/assets/technologies/docker.png"
import Express from "../../../../src/assets/technologies/express.png"
import Git from "../../../../src/assets/technologies/git.png"
import Jest from "../../../../src/assets/technologies/jest.png"
import Laravel from "../../../../src/assets/technologies/laravel.svg.png"
import MySQL from "../../../../src/assets/technologies/mysql.svg"
import NestJS from "../../../../src/assets/technologies/nestjs.png"
import NextJS from "../../../../src/assets/technologies/next-js.svg"
import NodeJS from "../../../../src/assets/technologies/nodejs.png"
import PHP from "../../../../src/assets/technologies/php.svg.png"
import PostgreSQL from "../../../../src/assets/technologies/postgresql.webp"
import Prisma from "../../../../src/assets/technologies/prisma.png"
import React from "../../../../src/assets/technologies/react.svg.png"
import Tailwind from "../../../../src/assets/technologies/tailwind.png"
import TypeORM from "../../../../src/assets/technologies/typeorm.jpg"
import TypeScript from "../../../../src/assets/technologies/typescript.svg.png"

export interface ITech {
  name: string
  image: string
}

export const DATABASE: ITech[] = [
  {
    name: "HTML5",
    image: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png",
  },
  {
    name: "CSS3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/2048px-Devicon-css3-plain.svg.png",
  },
  {
    name: "JavaScript",
    image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  {
    name: "TypeScript",
    image: TypeScript,
  },
  {
    name: "Styled Components",
    image: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4",
  },
  {
    name: "React",
    image: React,
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
    name: "Node.js",
    image: NodeJS,
  },
  {
    name: "Express.js",
    image: Express,
  },
  {
    name: "Nest.js",
    image: NestJS,
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
    name: "TypeORM",
    image: TypeORM,
  },
  {
    name: "Jest",
    image: Jest,
  },
  {
    name: "PHP",
    image:
      PHP,
  },
  {
    name: "Laravel",
    image:
      Laravel,
  },
  {
    name: "MySQL",
    image: MySQL,
  },
  {
    name: "Git",
    image: Git,
  },
]
