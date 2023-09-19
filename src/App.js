import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import NavBar from './Navbar/NavBar';
import CountriesList from './countries-list/Countries-list';
import CountryDetail from './Country-detail/Country-detail';

function App() {
  return (
    <BrowserRouter>
      {/* Navigationsmenü */}
      <NavBar />

      <div className='main'>
        <Routes>
          {/* Startseite */}
          <Route path="/" element={<Home />}></Route>
          {/* Routen zur jeweiligen Seite */}
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/countries-list" element={<CountriesList />}></Route>
          {/* Route zur Filterung der Länderliste */}
          <Route path="/countries-list/:searchTerm" element={<CountriesList />}></Route>
          {/* Route zur Detailsansicht für ein bestimmtes Land */}
          <Route path="/country-detail/:countryName" element={<CountryDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
