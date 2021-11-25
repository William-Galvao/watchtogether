import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateSession from './CreateSession';
import EditSession from './EditSession';


const apiKey = process.env.REACT_APP_API

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CreateSession />} path="/createsession" />
          <Route element={<EditSession />} path="/editsession/:id" />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
