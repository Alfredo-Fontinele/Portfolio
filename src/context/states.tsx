import { useState, createContext, useContext, SetStateAction, Dispatch } from 'react'
import { IChildren } from '../interfaces/children'

interface IContextState {
    statusMenu: boolean
    setStatusMenu: Dispatch<SetStateAction<boolean>>
}

export const StatesContext = createContext<IContextState>({} as IContextState)

export const StatesProvider = ({ children }:IChildren) => {
    const [statusMenu, setStatusMenu] = useState(false)
    return (
        <StatesContext.Provider value={{ statusMenu, setStatusMenu }}>
            { children }
        </StatesContext.Provider>
    )
}

export const useMyStates = () => useContext(StatesContext)
