import "./App.scss";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contacts";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
