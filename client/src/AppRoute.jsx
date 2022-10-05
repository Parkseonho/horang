import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeR from "./component/HomeR.jsx";
import horangLoGo from "./Picture/horangLOGO 1.png";
import "./App.css";
import Cre from "./component/Cre.jsx";

const AppRoute = () => {
 return(
  <>
   <BrowserRouter>
   <div className="LOGObackgroundColor">
      <Link to="/">
        <img src={horangLoGo} alt="horangLoGo"/>
      </Link>
      </div>

      <Routes>
        <Route exact path="/" element={<HomeR />} />
        <Route exact path="/Cre" element={<Cre />} />
      </Routes>
    </BrowserRouter>
  </>
 )};

export default AppRoute;
