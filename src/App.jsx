import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import Home from "./views/Home";
import Films from "./views/Films"
import People from "./views/People"
import Navbar from "./components/Navbar"

const App = () => {
  
  return (
    <Router>
      <Navbar/> 
      <Switch>
        <Route path="/films">
          <Films />
       </Route>
        <Route path="/people">
          <People />
          </Route>
        <Route exact path="/">
          <Home /> 
        </Route>
      </Switch>
    </Router>
  );
  
};

export default App;
