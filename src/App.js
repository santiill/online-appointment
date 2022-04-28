import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route exact path="/*" element={<Home />} />
        {/* <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
      {/* </Router> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
