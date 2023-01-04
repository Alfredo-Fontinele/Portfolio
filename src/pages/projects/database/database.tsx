import SongUp from '../../../../src/assets/projects/songup.png'
import TodoList from '../../../../src/assets/projects/todolist.png'
import PasswordGenerator from '../../../../src/assets/projects/password_generator.png'
import ShopNow from '../../../../src/assets/projects/shop_now.png'
import Calculator from '../../../../src/assets/projects/calculator.png'
import FoodBox from '../../../../src/assets/projects/foodbox.png'

interface IDB_Projects {
    name: string
    image: string
    url: string
}

export const DATABASE_PROJECTS:IDB_Projects[] = [
    {
        name: "SongUp",
        image: SongUp,
        url: "https://song-up-alfredo-fontinele.vercel.app/"
    },
    {
        name: "Foodbox",
        image: FoodBox,
        url: "https://foodbox.razyigarashi.repl.co/"
    },
    {
        name: "Gerador de Senha",
        image: PasswordGenerator,
        url: "https://password-generator-alfredo-fontinele.vercel.app/"
    },
    {
        name: "Shop Now",
        image: ShopNow,
        url: "https://kenzie-academy-brasil-developers.github.io/entrega-lista-produtos-m2-sprint-1b-Alfredo-Fontinele/"
    },
    // {
    //     name: "Kenzie Clone",
    //     image: "https://raw.githubusercontent.com/Alfredo-Fontinele/Projects_Imgs/main/kenzie.png",
    //     url: "https://clone-kenzy-academy.vercel.app/"
    // },
    // {
    //     name: "Kenzie Posts",
    //     image: "https://raw.githubusercontent.com/Alfredo-Fontinele/Projects_Imgs/main/kenzie_posts.png",
    //     url: "https://posts-news-kenzie.vercel.app/"
    // },
    {
        name: "Todo List",
        image: TodoList,
        url: "https://todo-list-plum-one.vercel.app/"
    },
    {
        name: "Calculadora",
        image: Calculator,
        url: "https://calculadora-grid-beta.vercel.app/"
    }
]
