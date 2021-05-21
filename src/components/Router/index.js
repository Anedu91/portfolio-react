import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../../pages/Home";
import Resume from "../../pages/Resume";

const Router = (props) =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router