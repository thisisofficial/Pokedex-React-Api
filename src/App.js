import './App.css';
import {PokeInfo, PokeList, Error, LoginScreen, Logout} from './Screens';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavBar} from './Components/NavBar';
import {LoginContext} from './Helpers/LoginContext.js';
import {useState} from 'react';

function App() {

  const [user, setUser] = useState("");
  const [loggedIn, setLogged] = useState(false);


  return (
    <Router>
      <LoginContext.Provider value={{user, setUser, loggedIn, setLogged}}>
        <NavBar/>
      
      
        <div className='cont'>
          <Routes>
            <Route path="/" element={<PokeList/>} />
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/Pokemon/:name" element={<PokeInfo/>} />
            <Route path="/logout" element={<Logout/>}/>
            <Route path="*" element={<Error/>}/>
            
          </Routes>
        </div>
      </LoginContext.Provider>
    </Router>
  );
}

export default App;
