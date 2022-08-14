import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from '../../../contexts/AuthContext';

const LoggedUserGuard = ({ children }) => {

    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        
        return <Navigate to="/404" replace />
    }

    return children ? children : <Outlet />
};
export default LoggedUserGuard;