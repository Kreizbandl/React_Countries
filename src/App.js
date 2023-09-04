import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import './App.css';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import NavBar from './Navbar/NavBar';
import CountriesList from './countries-list/Countries-list';
import CountryDetail from './Country-detail/Country-detail';

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
    case "/country-detail":
      Component = CountryDetail
      break;
    }
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          {/* <div className="App"> */}
            {/* <Component/> */}
            
              <Route path="/" element={<Home/>}>
              </Route>
              <Route path="/countries-list" element={<CountriesList/>}>
              </Route>
              <Route path="/contact" element={<Contact/>}>
              </Route>

              <Route path="/country-detail/:country" element={<CountryDetail/>}>
              </Route>
            
          {/* </div> */}
        </Routes>
      </BrowserRouter>
    </>
  );
} 

export default App;
