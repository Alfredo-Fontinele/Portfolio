import styled from "styled-components";

export const SectionProjects = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Projects = styled.section`
    /* background-image: url("https://i.pinimg.com/originals/38/b2/d8/38b2d8bcac8b7b048b191645f3e6b816.png"); */
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 1rem;
    gap: 6rem;
`

export const Projects__title = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    color: var(--primary);
`

export const Projects__list = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 70px;
    @media only screen and (max-width: 800px) {
        width: 100%;
        max-height: 500px;
        display: flex;
        flex-wrap: nowrap;
        overflow-y: auto;
        justify-content: flex-start;
        align-items: center;
        padding: 40px 0;
        gap: 50px;
        ::-webkit-scrollbar {
            display: none;
        }
    }
`

export const Card__project = styled.a`
    background-image: linear-gradient(#22292393, #135be29f), url("https://wallpaperaccess.com/full/303594.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    min-width: 270px;
    max-width: 270px;
    min-height: 350px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 30px;
    transition: all 1s;
    &:hover {
        background-image: linear-gradient(#470de698, #3511d321), url("https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        background-size: cover;
        background-repeat: no-repeat;
        transform: scale(1.03);
        box-shadow: 1px 1px 30px #470de6;
    }
`

export const Card__title = styled.h1`
    text-align: center;
    background-color: #544aa377;
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: bold;
    color: #fff;
    font-size: 1.5rem;
`

export const Card__img = styled.img`
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 130px;
`