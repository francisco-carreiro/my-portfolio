import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contacts";
import Home from "./Pages/Home";
import Projects from "./Pages/PortfoliosPage";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Redirect from="/my-portfolio/" to="/home" />
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
