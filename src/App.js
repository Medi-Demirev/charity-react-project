
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { CauseContextProvider } from './contexts/CauseContext';
import { VolunteerContextProvider } from './contexts/VolunteerContext';

import ContactPage from './components/ContactPage/ContactPage';
import Login from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ErrorPage from './components/404/ErrorPage';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import HeaderTopbar from './components/HeaderTopbar/HeaderTopbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EventPage from './components/Event/EventPage';
import TeamPage from './components/Team/TeamPage';
import Causes from './components/Causes/Causes';
import Logout from './components/Logout/Logout';
import Catalog from './components/Catalog/Catalog';
import AllVolunteersPage from './components/Team/AllVolunteersPage/AllVolunteersPage';

import './App.css';

function App() {
  const [auth, setAuth] = useLocalStorage('auth', {});

  const userLogin = (authData) => {
      setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
};
  return (
    <AuthContext.Provider value={{user:auth, userLogin, userLogout}}>
    <div className="App">
    <CauseContextProvider>
    <VolunteerContextProvider>
      <HeaderTopbar/>
      <Header/>
          <Routes>
             <Route path='/contact' element={<ContactPage/>}/>;
             <Route path='/login' element={<Login/>}/>;
             <Route path='/register' element={<RegisterPage/>}/>;
             <Route path='/*' element={<ErrorPage/>}/>;
             <Route path='/about' element={<About/>}/>;
             <Route path='/' element={<HomePage/>}/>;
             <Route path='/event' element={<EventPage/>}/>;
             <Route path='/all-volunteers' element={<AllVolunteersPage/>}/>;
             <Route path='/causes' element={<Causes/>}/>;
             <Route path='/logout' element={<Logout/>}/>
             <Route path='/catalog' element={<Catalog/>}/>
         
        
          </Routes>

      <Footer/>
    </VolunteerContextProvider>
    </CauseContextProvider>
    </div>
    </AuthContext.Provider>
  );
}

export default App;