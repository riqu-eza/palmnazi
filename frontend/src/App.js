import "./App.css";
import About from "./pages/about";
import Navbar from "./pages/navbar";
import ReactDOM from "react-dom";
import AuthPage from "./pages/signup/login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import Home1 from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home1 />

      <Router>
        <Routes> 
          <Route path="/signup/login" component={AuthPage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
