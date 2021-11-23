import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";



function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route element={<Home />} path="/" />

        </Routes>
      </div>
    </div>
  );
}

export default App;
