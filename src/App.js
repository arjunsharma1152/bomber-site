import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Number from "./component/number/number";
import Students from "./component/students/students";
import Call from "./component/call/call";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Number</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/call">Call</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Number />} /> 
          <Route path="/students" element={<Students />} />
          <Route path="/call" element={<Call />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;