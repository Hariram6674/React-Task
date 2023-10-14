import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Task1 } from "./components/task1/task1";
import { Task2 } from "./components/task2/task2";
import Navbar from "./components/navbar"; // Import your custom Navbar
import { Task3 } from "./components/task3/task3";
import { Task4 } from "./components/task4/task4";
import { Task5 } from "./components/task5/task5";
import { Task6 } from "./components/task6/task6";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showHeading, setShowHeading] = useState(true);

  const handleLinkClick = () => {
    setShowHeading(false);
  };

  return (
    <div className=" justify-content-center align-items-center">
      {showHeading && <h1 className="h1">React Tasks<a href='https://github.com/Hariram6674/React-Task'>Github link</a></h1>}
      <Router>
        <Navbar onLinkClick={handleLinkClick} />
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
          <Route path="/task6" element={<Task6 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
