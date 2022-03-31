import logo from './logo.svg';
import './App.css';
import {PokeInfo} from './PokeInfo.js';
import {Loader} from './loadercard.js';
import {Error} from './error.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader/>} />
        <Route path="/Pokemon/:name" element={<PokeInfo/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
