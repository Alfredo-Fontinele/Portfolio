import ChakraUI from "../../../../src/assets/technologies/chakraui.svg"
import Django from "../../../../src/assets/technologies/django.png"
import Docker from "../../../../src/assets/technologies/docker.png"
import Express from "../../../../src/assets/technologies/express.png"
import Git from "../../../../src/assets/technologies/git.png"
import Jest from "../../../../src/assets/technologies/jest.png"
import NestJS from "../../../../src/assets/technologies/nestjs.png"
import NextJS from "../../../../src/assets/technologies/next-js.svg"
import NodeJS from "../../../../src/assets/technologies/nodejs.png"
import PostgreSQL from "../../../../src/assets/technologies/postgresql.webp"
import Prisma from "../../../../src/assets/technologies/prisma.png"
import Tailwind from "../../../../src/assets/technologies/tailwind.png"
import TypeORM from "../../../../src/assets/technologies/typeorm.jpg"
import TypeScript from "../../../../src/assets/technologies/typescript.svg.png"

export interface ITech {
  name: string
  image: string
}

export const DATABASE: ITech[] = [
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
    name: "TypeORM",
    image: TypeORM,
  },
  {
    name: "Jest",
    image: Jest,
  },
  {
    name: "Django",
    image: Django,
  },
  {
    name: "Git",
    image: Git,
  },
]
