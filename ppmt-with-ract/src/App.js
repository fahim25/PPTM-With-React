import "./App.css";
import Dashboard from "./component/Dashboard";
import Header from "./component/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AddProject from "./component/project/AddProject";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addProject" element={<AddProject />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
