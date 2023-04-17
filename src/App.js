import data from './Data';
import { Route, Routes } from "react-router-dom";
import Home from'./pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard';
import Stocks from './pages/Stocks';
import './App.css';
import Nav from './components/Nav'

export default function App() {
  

  return (
    <div className="App">

      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>

        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/stocks/:symbol' element={<Stocks/>}></Route>

      </Routes>
     
    </div>
  );
}


