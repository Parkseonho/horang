import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";

function App() {
  <>
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
