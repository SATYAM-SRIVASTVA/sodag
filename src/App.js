import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router,Routes ,Switch ,Route, BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Acidity from './Components/Acidity';


function App() {
  return (
    <>

    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Header/>} />
      <Route path='/acidity' element={<Acidity/>} />
    </Routes>

    </Router>
    


    </>
  );
}

export default App;
