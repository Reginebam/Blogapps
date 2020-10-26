import logo from './logo.svg';
import './App.css';
import {
BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/Home';

const Routes=()=>{
  return (

<BrowserRouter>
 <Switch>
<Route exact path="/">
  <Home/>
</Route>

 </Switch>
</BrowserRouter>

  );
}

function App() {
  return (
    <div>

   <Routes/>
      
    </div>
  );
}

export default App;
