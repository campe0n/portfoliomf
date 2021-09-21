import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Github from "../src/assets/images/githublogo.png";
import LinkedIn from "../src/assets/images/linkedInLogo.png";
import Home from "../src/pages/Home";

function App() {
  return (
    <Router>
      <div id="body">
        <header>
          <h1>Melvin Finn</h1>
          <nav>
            <ul>
              <li>About</li>
              <li>Projects</li>
              <li>Resume</li>
              <li>About</li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer>
          <img src={Github} alt="github logo" id="logo" />
          <img src={LinkedIn} alt="linkedin logo" id="logo" />
        </footer>
      </div>
    </Router>
  );
}

export default App;
