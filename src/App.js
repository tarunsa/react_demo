// import logo from './logo.svg';
import './App.css';
import Login from './Components/Pages/Login';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Register from './Components/Pages/Register';
import Home from './Components/Pages/Home';
import Header from './Components/Pages/Header';
import RegisterHeader from './Components/Pages/RegisterHeader';
function App() {
  return (
    <div>
<Router>
      <div>{/* <Header /> */}</div>
      <Switch>
        <Route path="/home">
         <Header />
         <Home />
        </Route>
        <Route path="/register">
    <RegisterHeader />
          <Register />
        </Route>
        {/* <Route path="/profile">
          <Header user={user} />
          <Profile />
        </Route> */}
        <Route exact path="/">
          <Login  />
        </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
