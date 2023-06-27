import { Link } from "react-router-dom"
import styled from "styled-components"

export const PageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  min-height: 100vh;
  background-color: rgb(20, 30, 50);
`

export const Text = styled.p`
  font-size: 3rem;
  color: #eaeaea;
`

export const Button = styled(Link)`
  background-color: mediumspringgreen;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: bold;
  color: #eaeaea;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 1px 1px 30px mediumspringgreen;
  }
`
