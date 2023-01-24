import { IChildren } from './../interfaces/children'
import { AnimatePresence } from 'framer-motion'
import { createContext, useContext } from 'react'

interface IMotionContext {
    listMotion: {
        hidden: {
            opacity: number
        }
        show: {
            opacity: number
            transition: {
                staggerChildren: number
            }
        }
    }
    itemMotion: {
        hidden: { 
            opacity: number
        }
        show: {
            opacity: number
        }
    }
}

const MotionContext = createContext<IMotionContext>({} as IMotionContext)

export const MotionProvider = ({ children }:IChildren) => {
    const listMotion = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                duration: 1
            }
        }
    }
    const itemMotion = {
        hidden: { 
            opacity: 0 
        },
        show: {
            opacity: 1 
        }
    }
    return (
        <MotionContext.Provider value={{ listMotion, itemMotion }}>
            <AnimatePresence>
                {children}
            </AnimatePresence>
        </MotionContext.Provider>
    )
}

export const useMotion = () => useContext(MotionContext)
