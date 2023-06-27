import ChallengeStorm from "../../../../src/assets/projects/challenge-storm.svg"
import ClieCont from "../../../../src/assets/projects/clie-cont.png"
import Kanbext from "../../../../src/assets/projects/kanbext.avif"
import KenzieHub from "../../../../src/assets/projects/kenzie_hub.png"
import ChakraUI from "../../../../src/assets/technologies/chakraui.svg"
import CleanArchitecture from "../../../../src/assets/technologies/clean-architecture.svg"
import Express from "../../../../src/assets/technologies/express.png"
import FramerMotion from "../../../../src/assets/technologies/framer-motion.png"
import Jest from "../../../../src/assets/technologies/jest.png"
import Laravel from "../../../../src/assets/technologies/laravel.svg.png"
import MySQL from "../../../../src/assets/technologies/mysql.svg"
import NestJS from "../../../../src/assets/technologies/nestjs.png"
import NextJS from "../../../../src/assets/technologies/next-js.svg"
import NodeJS from "../../../../src/assets/technologies/nodejs.png"
import PHP from "../../../../src/assets/technologies/php.svg.png"
import PostgreSQL from "../../../../src/assets/technologies/postgresql.webp"
import Prisma from "../../../../src/assets/technologies/prisma.png"
import ReactJS from "../../../../src/assets/technologies/react.svg.png"
import StyledComponents from "../../../../src/assets/technologies/styled-components.png"
import TailwindCSS from "../../../../src/assets/technologies/tailwind.png"
import TypeORM from "../../../../src/assets/technologies/typeorm.jpg"
import TypeScript from "../../../../src/assets/technologies/typescript.svg.png"
import Workflow from "../../../../src/assets/technologies/workflow.webp"

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
    name: "Kenzie Hub",
    image: KenzieHub,
    url: "https://react-entrega-kenzie-hub-alfredo-fontinele-alfredo-fontinele.vercel.app/",
    description: "Plataforma de Gerenciamento de Tecnologias",
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
        icon: CleanArchitecture,
      },
      {
        name: "Workflow (Github Actions CI)",
        icon: Workflow,
      },
    ],
  },
  {
    name: "Challenge Storm",
    image: ChallengeStorm,
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
        icon: CleanArchitecture,
      },
      {
        name: "Workflow (Github Actions CI)",
        icon: Workflow,
      },
    ],
  },
  {
    name: "Kanbext",
    image: Kanbext,
    url: "https://github.com/Alfredo-Fontinele/Kanbext",
    description: "Aplicação de gerenciamento de tarefas",
    tecnologies: [
      { name: "Next.js", icon: NextJS },
      { name: "TailwindCSS", icon: TailwindCSS },
      { name: "TypeScript", icon: TypeScript },
      { name: "Framer Motion", icon: FramerMotion },
      { name: "Laravel", icon: Laravel },
      { name: "PHP", icon: PHP },
      { name: "MySQL", icon: MySQL },
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
]
