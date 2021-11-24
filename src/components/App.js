import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
<<<<<<< HEAD
import CreateSession from './CreateSession';
=======
import CreateTopic from './CreateTopic';
>>>>>>> cc36d297a7a762957a319a1b13b0f610e32dce33



function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route element={<Home />} path="/" />
<<<<<<< HEAD
          <Route element={<CreateSession />} path="/createsession" />
=======
          <Route element={<CreateTopic />} path="/createtopic" />
>>>>>>> cc36d297a7a762957a319a1b13b0f610e32dce33
        </Routes>
      </div>
    </div>
  );
}

export default App;
