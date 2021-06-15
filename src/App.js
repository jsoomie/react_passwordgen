import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Missing } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Missing} />
      </Switch>
    </Router>
  );
}

export default App;
