import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Films from "./views/Films"
import Navbar from "./components/Navbar"

const App = () => {
  fetch("https://ghibliapi.herokuapp.com/films", {mode: "cors"})
  .then((response) => response.json())
  .then((result) => console.log(result))
  return (
    <Router>
      <Navbar/> 
      <Switch>
        <Route path="/films">
          <Films />
        </Route>
        {/*<Route path="/people">
          <People />
          </Route>*/}
        <Route exact path="/">
          <Home /> 
        </Route>
      </Switch>
    </Router>
  );
  
};

export default App;
