
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';
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
             <Route path='/login' element={<Login/>}/>
             <Route path='/register' element={<RegisterPage/>}/>
             <Route path='/logout' element={<Logout/>}/>
             <Route path='/contact' element={<ContactPage/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/' element={<HomePage/>}/>
             <Route path='/all-causes' element={<CausesCatalog/>}/>
             <Route path='/all-events' element={<EventCatalog/>}/>
             <Route path='/all-volunteers' element={<VolunteersCatalog/>}/>
             <Route path='/event/:id' element={<EventDetails />}/>
             <Route path='/all-events/event/:id' element={<EventDetails />}/>
             <Route path='/cause/:id' element={<CauseDetails />}/>
             <Route path='/all-causes/cause/:id' element={<CauseDetails />}/>
             <Route path='/*' element={<ErrorPage/>}/>;
         
        
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