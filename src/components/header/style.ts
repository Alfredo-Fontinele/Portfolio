import styled from 'styled-components'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export const Header = styled.header`
    width: 100%;
    padding: 0 1rem;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav ul {
        display: flex;
        gap: 30px;
    }

    @media only screen and (max-width: 630px) {
        nav ul {
            display: none;
        }
    }
`

export const HeaderTitle = styled.h2`
    font-weight: 300;
    color: var(--primary);
`

export const LinkHeader = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: var(--grey-2);
`

export const MenuMobile = styled(HiMenuAlt3)`
    display: none;
    font-size: 40px;
    color: var(--grey-2);
    @media only screen and (max-width: 630px) {
        display: flex;
    }
`