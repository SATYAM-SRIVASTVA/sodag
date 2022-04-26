import "./App.css";

import Gred from "./Components/About/Type/Gred";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products/Products";
import FruitSalt from "./Components/FruitSalt/FruitSalt";
import EnoBottle from "./Components/EnoBottle/EnoBottle";
import WhatEno from "./Components/WhatEno/WhatEno";

function App() {
  return (
    <>
      /*{" "}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="" element ={<Products />}/>
          <Route path="" element ={<FruitSalt />}/>
          <Route path="" element ={<EnoBottle />}/>
          <Route path="" element ={<WhatEno />}/>
       </Routes>
       
      </Router>
    </>
  );
}

export default App;
