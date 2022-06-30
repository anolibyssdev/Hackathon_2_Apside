import { Route, Routes, BrowserRouter } from "react-router-dom";
import Contact from "@pages/Contact";
import Home from "@pages/Home";
// import Login from "@pages/Login";
// import Register from "@pages/Register";
// import Project from "@pages/Project";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} />
          <Route path="/project" element={<Project />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
