import SongUp from '../../../../src/assets/projects/songup.png'
import TodoList from '../../../../src/assets/projects/todolist.png'
import PasswordGenerator from '../../../../src/assets/projects/password_generator.png'
import ShopNow from '../../../../src/assets/projects/shop_now.png'
import Calculator from '../../../../src/assets/projects/calculator.png'
import FoodBox from '../../../../src/assets/projects/foodbox.png'
import KenzieHub from '../../../../src/assets/projects/kenzie_hub.png'
import KenzieBurguer from '../../../../src/assets/projects/kenzie_burguer.png'
import Nukenzie from '../../../../src/assets/projects/nukenzie.png'

export interface IProject {
    name: string
    image: string
    url: string
    description: string
}

export const DATABASE_PROJECTS:IProject[] = [
    {
        name: 'SongUp',
        image: SongUp,
        url: 'https://song-up-alfredo-fontinele.vercel.app/',
        description: 'Plataforma de Música'
    },
    {
        name: 'Kenzie Hub',
        image: KenzieHub,
        url: 'https://react-entrega-kenzie-hub-alfredo-fontinele-alfredo-fontinele.vercel.app/',
        description: 'Plataforma de Portfólios'
    },
    {
        name: 'NuKenzie',
        image: Nukenzie,
        url: 'https://new-teste-alfredo-fontinele.vercel.app/',
        description: 'Plataforma de Finanças'
    },
    {
        name: 'Kenzie Clone',
        image: 'https://raw.githubusercontent.com/Alfredo-Fontinele/Projects_Imgs/main/kenzie.png',
        url: 'https://clone-kenzy-academy.vercel.app/',
        description: 'Clone do Site da Kenzie Academy Brasil'
    },
    {
        name: 'Shop Now',
        image: ShopNow,
        url: 'https://kenzie-academy-brasil-developers.github.io/entrega-lista-produtos-m2-sprint-1b-Alfredo-Fontinele/',
        description: 'Plataforma de E-commerce'
    },
    {
        name: 'Kenzie Burguer',
        image: KenzieBurguer,
        url: 'https://kenzieburg-alfredo-fontinele.vercel.app/',
        description: 'Serviço de Delivery'
    },
    {
        name: 'Foodbox',
        image: FoodBox,
        url: 'https://foodbox.razyigarashi.repl.co/',
        description: 'Plataforma de Delivery'
    },
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
]
