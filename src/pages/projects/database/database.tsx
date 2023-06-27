import ClieCont from "../../../../src/assets/projects/clie-cont.png"
import KenzieHub from "../../../../src/assets/projects/kenzie_hub.png"

import ChakraUI from "../../../../src/assets/technologies/chakraui.svg"
import Express from "../../../../src/assets/technologies/express.png"
import Jest from "../../../../src/assets/technologies/jest.png"
import NestJS from "../../../../src/assets/technologies/nestjs.png"
import NodeJS from "../../../../src/assets/technologies/nodejs.png"
import PostgreSQL from "../../../../src/assets/technologies/postgresql.webp"
import Prisma from "../../../../src/assets/technologies/prisma.png"
import ReactJS from "../../../../src/assets/technologies/react.svg.png"
import TypeORM from "../../../../src/assets/technologies/typeorm.jpg"
import TypeScript from "../../../../src/assets/technologies/typescript.svg.png"

const Github =
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
const StyledComponents =
  "https://avatars.githubusercontent.com/u/20658825?s=200&v=4"
const FramerMotion =
  "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"

interface ITechnology {
  name: string
  icon: string
}

export interface IProject {
  name: string
  image: string
  url: string
  description: string
  tecnologies?: ITechnology[]
}

export const DATABASE_PROJECTS: IProject[] = [
  {
    name: "Notifly",
    image:
      "https://ebaconline.com.br/images/tild6533-6361-4234-b832-316336663565__02.svg",
    url: "https://github.com/Alfredo-Fontinele/Notifly",
    description: "Microsserviço de Notificações",
    tecnologies: [
      { name: "Nest.js", icon: NestJS },
      { name: "TypeScript", icon: TypeScript },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "Prisma", icon: Prisma },
      { name: "TDD com Jest", icon: Jest },
      {
        name: "Clean Architecture",
        icon: "https://bitloops.com/_next/static/media/hexagonal-architecture.fe302e64.svg",
      },
      {
        name: "Workflow (Github Actions CI)",
        icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
      },
    ],
  },
  {
    name: "Challenge Storm",
    image:
      "https://uploads-ssl.webflow.com/6091556a03176880f4729c84/63acd5fc6c21e654c6bf9453_agile-product-management.svg",
    url: "https://github.com/Alfredo-Fontinele/Challenge-Storm",
    description: "Microsserviço de Submissão de Desafios",
    tecnologies: [
      { name: "Nest.js", icon: NestJS },
      { name: "TypeScript", icon: TypeScript },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "Prisma", icon: Prisma },
      { name: "TDD com Jest", icon: Jest },
      {
        name: "Clean Architecture",
        icon: "https://bitloops.com/_next/static/media/hexagonal-architecture.fe302e64.svg",
      },
      {
        name: "Workflow (Github Actions CI)",
        icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
      },
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
]
