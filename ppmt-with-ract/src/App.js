import "./App.css";
import Dashboard from "./component/Dashboard";
import Header from "./component/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AddProject from "./component/project/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addProject" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
