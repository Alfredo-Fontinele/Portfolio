import { fadeInDown, fadeInLeft, fadeInRight, flipInY } from "react-animations"
import styled, { keyframes } from "styled-components"

export const FadeLeft = keyframes`${fadeInLeft}`
export const FadeInDown = keyframes`${fadeInDown}`
export const FlipIny = keyframes`${flipInY}`
export const FadeInRight = keyframes`${fadeInRight}`
export const FadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`

export const FadingElement = styled.div`
  animation: ${FadeInOut} 2s infinite;
  width: 4px;
  height: 4px;
  background-color: mediumspringgreen;
`

export const MoveTopDown = keyframes`
    0% {
        transform: translateY(-15px);
    }
    50% {
        transform: translateY(15px);
    }
    100% {
        transform: translateY(-15px);
    }
`
