import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateTopic from './CreateTopic';



function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CreateTopic />} path="/createtopic" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
