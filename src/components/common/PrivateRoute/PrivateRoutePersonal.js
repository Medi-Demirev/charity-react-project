
import { Navigate, Outlet, useParams } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthContext';


const PrivateRoutePersonal = ({children}) => {
    

    const { isAuthenticated, user} = useAuthContext();

     if (isAuthenticated && user.typeAccount === 'Personal' ){
        return children ? children : <Outlet />  
    } 

    return   <Navigate to="/404" replace />
};

export default PrivateRoutePersonal;