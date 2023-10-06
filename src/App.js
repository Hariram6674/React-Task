import logo from './logo.svg';
import './App.css';
import F1 from './components/F1';
import Nav from './components/Nav';
import Contact from './components/Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route} from "react-router-dom";
import {Home,About,Blog} from './components/F2';


function App() {
  return (
    <div>
      {/* <F1 />
      <Nav /> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
