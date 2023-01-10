import { fadeInDown, fadeInLeft, flipInY, fadeInRight } from 'react-animations'
import { keyframes } from 'styled-components'

export const FadeLeft = keyframes`${fadeInLeft}`
export const FadeInDown = keyframes`${fadeInDown}`
export const FlipIny = keyframes`${flipInY}`
export const FadeInRight = keyframes`${fadeInRight}`

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
