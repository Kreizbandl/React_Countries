import './App.css';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import NavBar from './Navbar/NavBar';
import CountriesList from './countries-list/Countries-list';
/* import MainContainer from './MainContainer'; */

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
      {/* <MainContainer/> */}
    </div>
  );
}

export default App;
