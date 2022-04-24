import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';
import Textimg from './Components/Textimg';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Featured/>
    <Textimg/>
    <Footer/>


    </>
  );
}

export default App;
