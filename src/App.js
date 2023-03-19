import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Number from "./component/number/number";
import Students from "./component/students/students";

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
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Number />} /> 
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;