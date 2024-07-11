import logo from "./logo.svg";
import "./App.css";
import LoginComponent from "./LoginComponent/loginScreen";
import { Provider } from "react-redux";
import store from "./LoginComponent/Store/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Switch } from "@mui/material";
import UserDetails from "./LoginComponent/UserDetails";
// import UserDetails from "./LoginComponent/userDetails";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path = '/' Component={LoginComponent}></Route>
            <Route path = '/userDetails' Component={UserDetails}></Route>
          </Routes>
        </Router>
      </div>
     </Provider>
  );
}

export default App;
