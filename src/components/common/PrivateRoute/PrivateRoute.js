import { useContext } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthContext';
import { CauseContext } from '../../../contexts/CauseContext';
import { EventContext } from '../../../contexts/EventContext';

const PrivateRoute = ({children}) => {
    const {causeId, eventId} = useParams();

    const { isAuthenticated, user} = useAuthContext();
    const { selectCause } = useContext(CauseContext);
    const { selectEvent } = useContext(EventContext);

    const selectedCause = selectCause(causeId);
    const isOwnerCause = selectedCause._ownerId === user._id;

    const selectedEvent = selectEvent(eventId);
    const isOwnerEvent = selectedEvent._ownerId === user._id;

    if (!isAuthenticated ) {
        return <Navigate to="/404" replace />
    } else if (isAuthenticated && user.typeAccount === 'Personal') {
        return <Navigate to="/404" replace />
    } else if (!isOwnerCause &&!isOwnerEvent) {
        return <Navigate to="/404" replace />
    } else if (isOwnerCause  && isOwnerEvent){
        return <Navigate to="/create-casue" replace/> || <Navigate to="/create-event" replace />
    }

    return children ? children : <Outlet />  
};

export default PrivateRoute;