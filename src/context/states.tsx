import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { IChildren } from "../interfaces/children"

interface IContextState {
  statusMenu: boolean
  setStatusMenu: Dispatch<SetStateAction<boolean>>
  navigate: NavigateFunction
}

const StatesContext = createContext<IContextState>({} as IContextState)

export const StatesProvider = ({ children }: IChildren) => {
  const [statusMenu, setStatusMenu] = useState(false)
  const navigate = useNavigate()
  return (
    <StatesContext.Provider value={{ navigate, statusMenu, setStatusMenu }}>
      {children}
    </StatesContext.Provider>
  )
}

export const useMyStates = () => useContext(StatesContext)
