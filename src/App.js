import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Social from "./components/Social";
import About from "./components/About";
// import Portfolio from './components/Portfolio';
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Social />
      <About></About>
      {/* <Portfolio/>  */}
      <Skill />
      <Contact />
    </>
  );
}

export default App;
