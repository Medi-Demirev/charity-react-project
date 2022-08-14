import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from '../../../contexts/AuthContext';

const PublicRoute = ({ children }) => {

    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated || !isAuthenticated ) {
        
   
        return children ? children : <Outlet />
    }

};
export default PublicRoute;