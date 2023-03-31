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

export interface IProject {
    name: string;
    image: string;
    url: string;
    description: string;
}

export const DATABASE_PROJECTS: IProject[] = [
    {
        name: "ClieCont",
        image: ClieCont,
        url: "https://clie-cont.vercel.app/",
        description: "Plataforma de Contatos",
    },
    {
        name: "Reaction News",
        image: ReactionNews,
        url: "https://reaction-news.vercel.app/",
        description: "Plataforma de Notícias",
    },
    {
        name: "Kenzie Hub",
        image: KenzieHub,
        url: "https://react-entrega-kenzie-hub-alfredo-fontinele-alfredo-fontinele.vercel.app/",
        description: "Plataforma de Portfólios",
    },
    {
        name: "NuKenzie",
        image: Nukenzie,
        url: "https://new-teste-alfredo-fontinele.vercel.app/",
        description: "Plataforma de Finanças",
    },
    {
        name: "Shop Now",
        image: ShopNow,
        url: "https://kenzie-academy-brasil-developers.github.io/entrega-lista-produtos-m2-sprint-1b-Alfredo-Fontinele/",
        description: "Plataforma E-commerce",
    },
    {
        name: "Job_API",
        description: "API de serviços de empregabilidade",
        image: "https://esparksinc.com/wp-content/uploads/2021/05/Mobile-APP.svg",
        url: "https://github.com/Alfredo-Fontinele/Person_API",
    },
    {
        name: "Ecom_API",
        description: "API de serviços de e-commerce",
        image: "https://miro.medium.com/max/1198/1*QkzI3K92CuzCjR9Iz-ZmOA.jpeg",
        url: "https://github.com/Alfredo-Fontinele/Ecom_API",
    },
    // {
    //     name: "SongUp",
    //     image: SongUp,
    //     url: "https://song-up-alfredo-fontinele.vercel.app/",
    //     description: "Plataforma de Música",
    // },
    // {
    //     name: "Kenzie Clone",
    //     image: "https://raw.githubusercontent.com/Alfredo-Fontinele/Projects_Imgs/main/kenzie.png",
    //     url: "https://clone-kenzy-academy.vercel.app/",
    //     description: "Clone do Site da Kenzie Academy Brasil",
    // },
    // {
    //     name: "Kenzie Burguer",
    //     image: KenzieBurguer,
    //     url: "https://kenzieburg-alfredo-fontinele.vercel.app/",
    //     description: "Serviço de Delivery",
    // },
    // {
    //     name: "Foodbox",
    //     image: FoodBox,
    //     url: "https://foodbox.razyigarashi.repl.co/",
    //     description: "Plataforma de Delivery",
    // },
    // {
    //     name: 'Kenzie Posts',
    //     image: 'https://raw.githubusercontent.com/Alfredo-Fontinele/Projects_Imgs/main/kenzie_posts.png',
    //     url: 'https://posts-news-kenzie.vercel.app/',
    //     description: 'Blog | Kenzie (Layout)'
    // },
    // {
    //     name: 'Gerador de Senha',
    //     image: PasswordGenerator,
    //     url: 'https://password-generator-alfredo-fontinele.vercel.app/',
    //     description: 'Gerador de Senhas'
    // },
    // {
    //     name: 'Todo List',
    //     image: TodoList,
    //     url: 'https://todo-list-plum-one.vercel.app/',
    //     description: 'Lista de Tarefas'
    // }
];
