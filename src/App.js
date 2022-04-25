import './App.css';
 
import Gred from './Components/About/Type/Gred';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
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

// import Header from './Components/Header';
// import Navbar from './Components/Navbar';
import Acidity from './Components/Acidity';

 
// >>>>>>> 648bd12dc8612d783f0804c947c26321c4d3ead0

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

    {/* <RemediesHeartburn/> */}
    {/* <Gas/> */}
    {/* <RemediesHeartburn/> */}
 

     <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Header/>} />
      <Route path='/gred' element={<Gred/>} />
      <Route path='/indigestion' element={<Ingestion/>} />
      <Route path='/stomach' element={<Stomachhurt/>} />
      <Route path='/understand' element={<Understand/>} />
      <Route path='/symptoms' element={<Symptoms/>} />
      <Route path='/living' element={<Living/>} />
      <Route path='/remedies' element={<Remedies/>} />
      <Route path='/understandheartburn' element={<UnderstandHeartburn/>} />
      <Route path='/symptomsheartburn' element={<SymptomsHeartburn/>} />
      <Route path='/remediesheartburn' element={<RemediesHeartburn/>} />
      <Route path='/gas' element={<Gas/>} />

    </Routes>

    </Router> 
    


 
{/* >>>>>>> 648bd12dc8612d783f0804c947c26321c4d3ead0 */}
    </>
  );
}

export default App;
