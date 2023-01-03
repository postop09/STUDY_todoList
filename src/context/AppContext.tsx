import {createContext, useEffect, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";

const AppContext = createContext({});

interface contextProps {
    children: React.ReactNode | React.ReactNode[];
}

const AppProvider = ({children}: contextProps) => {
    const navigate = useNavigate();
    const [authToken, setAuthToken] = useState("");

    useEffect(() => {
        const authToken = localStorage.getItem("Authorization");
        if (authToken) {
            setAuthToken(authToken);
            navigate("/home");
        }
    }, []);

    const store = {
        navigate,
        authToken
    }

    return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}

export {AppProvider, AppContext};