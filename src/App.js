import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import './App.css';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import NavBar from './Navbar/NavBar';
import CountriesList from './countries-list/Countries-list';

function App() {
  let Component
  switch(window.location.pathname){
    case "/":
      Component = Home
      break;
    case "/countries-list":
      Component = CountriesList
      break;
    case "/contact":
      Component = Contact
      break;
    }
  return (
    <div className="App">
      <NavBar/>
      <Component/>
    </div>
  );
} 

export default App;
