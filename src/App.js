import './App.css';
import Gred from './Components/About/Type/Gred';
// import Header from './Components/Header';
// import Navbar from './Components/Navbar';
import Ingestion from './Components/About/Type/Ingestion'
import Stomachhurt from './Components/About/Type/Stomachhurt';
import Understand from './Components/About/Acidity/understand';
import Symptoms from './Components/About/Acidity/Symptoms';
import Living from './Components/About/Acidity/Living';
import Remedies from './Components/About/Acidity/Remedies';
import UnderstandHeartburn from './Components/About/Heartburn/UnderstandHeartburn';
import SymptomsHeartburn from './Components/About/Heartburn/SymptomsHeartburn';
import RemediesHeartburn from './Components/About/Heartburn/RemediesHeartburn';
import Gas from './Components/About/GasRelief/Gas';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router,Routes ,Switch ,Route, BrowserRouter } from 'react-router-dom';
import Acidity from './Components/Acidity';
import Youmight from './Components/About/Youmight/Youmight';

function App() {
  return (
    <>
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
    {/* <RemediesHeartburn/> */}
 

    <Router>
      <Routes>
    <Navbar/>
      <Route path='/stomach' element={<Stomachhurt/>} />
      <Route path='/understandheartburn' element={<UnderstandHeartburn/>} />
      <Route path='/symptomsheartburn' element={<SymptomsHeartburn/>} />
      <Route path='/remediesheartburn' element={<RemediesHeartburn/>} />
      <Route path='/gas' element={<Gas/>} />
      {/* <Route path='/understand' element={<Unders/>} /> */}
    </Routes>
    </Router>  
    </>
  );
}

export default App;
