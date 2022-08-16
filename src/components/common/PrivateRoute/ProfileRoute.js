
import { Navigate, Outlet} from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthContext';


const ProfileRoute = ({children}) => {
    

    const { isAuthenticated, user} = useAuthContext();

     if (isAuthenticated ){
        return children ? children : <Outlet />  
    } 

    return   <Navigate to="/404" replace />
};

export default ProfileRoute;