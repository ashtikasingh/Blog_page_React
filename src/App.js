import logo from './images/logo.png';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bollywood from './containers/Navbar/Bollywood';
import Home from './containers/Navbar/Home';
import Technology from './containers/Navbar/Technology';
import Hollywood from './containers/Navbar/Hollywood';
import Fitness from './containers/Navbar/Fitness';
import Food from './containers/Navbar/Food';

function App() {
  return (
    <>
      {/* LOGO */}
      <img src={logo} alt="logo" className="logo"/>

      {/* NAVBAR */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route extact path='/' element={<Home/>}/>
          <Route extact path='/Home' element={<Home/>}/>
          <Route extact path='/Bollywood' element={<Bollywood/>}/>
          <Route extact path='/Technology' element={<Technology/>}/>
          <Route extact path='/Hollywood' element={<Hollywood/>}/>
          <Route extact path='/Fitness' element={<Fitness/>}/>
          <Route extact path='/Food' element={<Food/>}/>
        </Routes>
      </BrowserRouter>
      

      
      
    </>
  );
}

export default App;
