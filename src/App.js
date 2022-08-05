
import { Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage/ContactPage';
import Login from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ErrorPage from './components/404/ErrorPage';
import About from './components/About/About';

import HeaderTopbar from './components/HeaderTopbar/HeaderTopbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderTopbar/>
      <Header/>
        <Routes>
           <Route path='/contact' element={<ContactPage/>}/>;
           <Route path='/login' element={<Login/>}/>;
           <Route path='/register' element={<RegisterPage/>}/>
           <Route path='/*' element={<ErrorPage/>}/>
           <Route path='/about' element={<About/>}/>
           
        
          </Routes>

      <Footer/>

    </div>
  );
}

export default App;