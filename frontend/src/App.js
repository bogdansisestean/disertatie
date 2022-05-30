import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LogInScreen from "./screens/LogInScreen";
import SignUpScreen from "./screens/SignUpScreen";

//Components
import NavBar from "./components/Navbar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";
// import uArmSDK from "./sdk-js-robot/uarm/sdk
//Hooks
import { useSelector } from "react-redux";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
 
  const getUser = useSelector((state) => state.loggedUser);
  const { user, loggedIn } = getUser;

  const sideDropShowHandler = () => {
    setSideToggle(true);
  };
  const sideDropHideHandler = () => {
    setSideToggle(false);
  };
// console.log(uArmSDK)
  return (
    <Router>
      <NavBar click={sideDropShowHandler} />
      <SideDrawer show={sideToggle} click={sideDropHideHandler} />
      <BackDrop show={sideToggle} click={sideDropHideHandler} />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
          <Route exact path="/login" element={<LogInScreen />} />
          <Route exact path="/sign-up" element={<SignUpScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
