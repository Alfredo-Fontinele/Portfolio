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
];
