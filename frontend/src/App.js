import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

//Screens
import HomeScreen from "./screens/HomeScreen";
import ProcessScreen from "./screens/PorcessScreen";
import CartScreen from "./screens/ActiveProcesses";
import LogInScreen from "./screens/LogInScreen";
import SignUpScreen from "./screens/SignUpScreen";

//Components
import NavBar from "./components/Navbar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";
// import uArmSDK from "./sdk-js-robot/uarm/sdk
//Hooks
import { useSelector } from "react-redux";
import Analytics from "./screens/analytics/Analytics";
import RobotScreen from "./screens/robot/RobotScreen";

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
          <Route exact path="/process/:id" element={<ProcessScreen />} />
          <Route exact path="/robot/:id" element={<RobotScreen />} />
          <Route exact path="/analytics/:id" element={<Analytics />} />
          <Route exact path="/active-processes" element={<CartScreen />} />
          <Route exact path="/login" element={<LogInScreen />} />
          <Route exact path="/sign-up" element={<SignUpScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
