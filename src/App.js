import './App.css';
 
import Gred from './Components/About/Type/Gred';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Ingestion from './Components/About/Type/Ingestion'
import Stomachhurt from 
'./Components/About/Type/Stomachhurt';
import Understand from './Components/About/Acidity/understand';
import Symptoms from './Components/About/Acidity/Symptoms';
import Living from './Components/About/Acidity/Living';
import Remedies from './Components/About/Acidity/Remedies';
import UnderstandHeartburn from './Components/About/Heartburn/UnderstandHeartburn';
import SymptomsHeartburn from './Components/About/Heartburn/SymptomsHeartburn';
import RemediesHeartburn from './Components/About/Heartburn/RemediesHeartburn';
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router,Routes ,Switch ,Route, BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Acidity from './Components/Acidity';

 

function App() {
  return (
    <>
 
     {/* <Navbar/> */}
    {/* <Header/>  */}
     {/* <Gred/>  */}
    {/* <Ingestion/> */}
    {/* <Stomachhurt/> */}
    {/* <Understand/> */}
    {/* <Symptoms/> */}
    {/* <Living/> */}
    {/* <Remedies/> */}
    {/* <UnderstandHeartburn/> */}
    {/* <SymptomsHeartburn/> */}
    <RemediesHeartburn/>
 

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
