import { motion } from "framer-motion"
import styled from "styled-components"

export const SectionProjects = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Projects = styled.section`
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

export const ProjectsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 35px;
    color: #fff;
  }

  @media only screen and (max-width: 400px) {
    flex-direction: column-reverse;
  }
`

export const ProjectsList = styled(motion.ul)`
  width: 100%;
  max-width: 1900px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 70px;
  @media only screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-y: auto;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 40px 0;
    gap: 50px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`

export const CardProject = styled(motion.a)`
  background-color: #1e1e1e;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  min-width: 380px;
  max-width: 380px;
  min-height: 360px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  transition: all 1s;

  &:hover {
    transform: scale(1.01);
  }
`

export const CardTitle = styled.h1`
  text-align: center;
  background-color: #7b68ee;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;
  color: #fff;
  font-size: 1.4rem;
`

export const CardImg = styled.img`
  border-radius: 10px;
  width: 100%;
  max-width: 280px;
  height: 100%;
  min-height: 160px;
  max-height: 160px;
`

export const CardDescription = styled.li`
  list-style: none;
  font-weight: 600;
  font-size: 1.4em;
  color: #eaeaea;
  text-align: center;
`
