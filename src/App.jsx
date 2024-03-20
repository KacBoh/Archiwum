import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyButton from "./components/MyButton";
import LoginForm from "./components/LoginForm";


function App() {
  

  return (
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
            
            <LoginForm/>
          </Route>

          <Route exact path="/1">
            <p>Nigger</p>
          </Route>

        </Switch>
      </div>
      

      
    </Router>
  )
}

export default App;
