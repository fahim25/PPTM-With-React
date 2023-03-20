import "./App.css";
import Dashboard from "./component/Dashboard";
import Header from "./component/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./component/project/AddProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Dashboard />
        <Route path="/addProject" Component={AddProject} />
      </div>
    </Router>
  );
}

export default App;
