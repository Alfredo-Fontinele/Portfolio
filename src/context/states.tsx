import {
    useState,
    createContext,
    useContext,
    SetStateAction,
    Dispatch,
} from "react";
import { IChildren } from "../interfaces/children";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IContextState {
    statusMenu: boolean;
    setStatusMenu: Dispatch<SetStateAction<boolean>>;
    navigate: NavigateFunction;
}

const StatesContext = createContext<IContextState>({} as IContextState);

export const StatesProvider = ({ children }: IChildren) => {
    const [statusMenu, setStatusMenu] = useState(false);
    const navigate = useNavigate();
    return (
        <StatesContext.Provider value={{ navigate, statusMenu, setStatusMenu }}>
            {children}
        </StatesContext.Provider>
    );
};

export const useMyStates = () => useContext(StatesContext);
