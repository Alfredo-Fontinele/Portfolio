import * as S from './style'
import { HiOutlineHome } from 'react-icons/hi'
import { BiConversation } from 'react-icons/bi'
import { CgUserList } from 'react-icons/cg'
import { MdWork } from 'react-icons/md'
import { GrContactInfo } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { MouseEvent, useEffect, useRef } from 'react'
import { useMyStates } from '../../context/states'

// interface IHandleOutClickEvent extends Event {
//     target: Node | any
// }

export const MenuLateral = () => {
    const { setStatusMenu } = useMyStates()
    const modal = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleOutClick = (event: any) => {
            const target = event.target
            if (!modal.current?.contains(target)) {
                setStatusMenu(false)
            }
        }
        document.addEventListener('mousedown', handleOutClick)
        return () => {
            document.removeEventListener('mousedown', handleOutClick)
        }
    }, [])

    return (
        <S.MenuLateral ref={modal}>
            <S.BtnClose onClick={() => setStatusMenu(false)}/>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <HiOutlineHome/>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <MdWork/>
                            Projetos
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <BiConversation/>
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <CgUserList/>
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </S.MenuLateral>
    )
}
