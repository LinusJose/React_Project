import Sample from './Sample';
import Login from './Login';
import LoginFunctional from './LoginFunctionals';
import Home  from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
BrowserRouter,
Switch,
Route,
Link
} from 'react-router-dom';


function App(){
  return <div className="container">
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
      <LoginFunctional firstname="user1" lastname="user2"/>
      </Route>
<Route path="/home">

    <Home />
    </Route>
  
  </Switch>
  <Link to="/home">Home</Link>
  </BrowserRouter>
    
  
    
  </div>
  

}
export default App;