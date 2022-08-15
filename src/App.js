
import { Routes, Route } from 'react-router-dom';

import { CauseContextProvider } from './contexts/CauseContext';
import { VolunteerContextProvider } from './contexts/VolunteerContext';
import { EventContextProvider } from './contexts/EventContext';
import { AuthProvider } from './contexts/AuthContext';


import ContactPage from './components/ContactPage/ContactPage';
import Login from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ErrorPage from './components/404/ErrorPage';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import HeaderTopbar from './components/HeaderTopbar/HeaderTopbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EventCatalog from './components/Event/EventsCatalog/EventsCatalog';
import EventDetails from './components/Event/EventDetails/EventDetails';
import Logout from './components/Logout/Logout';
import CausesCatalog from './components/Causes/CausesCatalog/CausesCatalog';
import CauseDetails from './components/Causes/CauseDetails/CauseDetails';
import VolunteersCatalog from './components/Team/VolunteersCatalog/VolunteersCatalog';
import CreateEvent from './components/Event/CreateEvent/CreateEvent';
import EditEvent from './components/Event/EditEvent/EditEvent';
import CreateCause from './components/Causes/CreateCause/CreateCause';
import EditCause from './components/Causes/EditCause/EditCause';
import VolunteerProfileDetails from './components/Team/VolunteerProfileDetails/VolunteerProfileDetails';
import PrivateRoute from './components/common/PrivateRoute/PrivateRoute';
import PriveteRouteNGO from './components/common/PrivateRoute/PriveteRouteNGO';
import LoggedUserGuard from './components/common/LoggedUserGuard/LoggedUserGuard';
import PublicRoute from './components/common/PublicRoute/PublicRoute';




import './App.css';

function App() {

  return (
    <AuthProvider>
    <div className="App">
      
    <CauseContextProvider>
    <VolunteerContextProvider>
    <EventContextProvider>
      <HeaderTopbar/>
      <Header/>
          <Routes>
          
          <Route element={<PriveteRouteNGO />} >
              <Route path='/create-event' element={<CreateEvent/>}/>
              <Route path='/create-cause' element={<CreateCause/>}/>
          </Route>
             
          <Route element={<PrivateRoute />} >
             <Route path='/create-event' element={<CreateEvent/>}/>
             <Route path='/create-cause' element={<CreateCause/>}/>
             <Route path='/all-events/event/:eventId/edit' element={<EditEvent />}/>
             <Route path='/all-causes/cause/:causeId/edit' element={<EditCause/>}/>
             <Route path='/cause/:causeId/edit' element={<EditCause />}/>
             <Route path='/event/:eventId/edit' element={<EditEvent />}/>
          </Route>
          
          <Route element={<LoggedUserGuard />} >
             <Route path='/login' element={<Login/>}/>
             <Route path='/register' element={<RegisterPage/>}/>
          </Route>

          <Route element={<PublicRoute />} >
             <Route path='/contact' element={<ContactPage/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/' element={<HomePage/>}/>
             <Route path='/all-causes' element={<CausesCatalog/>}/>
             <Route path='/all-events' element={<EventCatalog/>}/>
             <Route path='/event/:eventId' element={<EventDetails />}/>
             <Route path='/cause/:causeId' element={<CauseDetails />}/>
             <Route path='/all-events/event/:eventId' element={<EventDetails />}/>
             <Route path='/all-causes/cause/:causeId' element={<CauseDetails />}/>
             <Route path='/all-volunteers' element={<VolunteersCatalog/>}/>
             <Route path='/volunteer/:volunteerId' element={<VolunteerProfileDetails/>}/>
             <Route path='/all-volunteers/volunteer/:volunteerId' element={<VolunteerProfileDetails />}/>
             <Route path='/*' element={<ErrorPage />}/>;
             <Route path='/logout' element={<Logout/>}/>
         </Route>
          </Routes>
      <Footer/>
    </EventContextProvider>
    </VolunteerContextProvider>
    </CauseContextProvider>
   
    </div>
    </AuthProvider>
  );
}

export default App;