import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
        
    };

    const userLogout = () => {
        setAuth({});
    };
    const userRegister = (authData) => {
        setAuth(authData);
        
    };

    return (
        <AuthContext.Provider value={{
            user: auth,
            userLogin,
            userRegister,
            userLogout,
            isAuthenticated: !!auth.accessToken
        }}>
            {children}
        </AuthContext.Provider>  
    );
};

// Custom Hook
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};