import './App.css';
import {PokeInfo, PokeList, Error} from './Screens';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavBar} from './Components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
        <div className='cont'>
          <Routes>
            <Route path="/" element={<PokeList/>} />
            
            <Route path="/Pokemon/:name" element={<PokeInfo/>} />
            <Route path="*" element={<Error/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
