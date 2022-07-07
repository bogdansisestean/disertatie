import React from "react";
import "./RobotScreen.css"

import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EndEffectorCard from "src/components/end_efector/EndEffectorCard";

const RobotScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log({ location })

  const process = location.state.process;

  const moveToAnalyticsHandler = () => {
    localStorage.setItem("selectedProcessId", process._id);
    navigate(`/analytics/${process.robot._id}`, { state: { process: process } });
  };

  console.log({ process })

  const robot = process.robot;
  const { name, picture, description, endEffectors } = robot;
  console.log({ endEffectors })
  return (
    <React.Fragment>
      <div className="robot__screen">
        <div className="left__robot__details">
          <img src={picture} />
        </div>
        <div className="right__robot__details">
          <p className="robot__name">{name}</p>
          <p>{description}</p>
          <p><button onClick={moveToAnalyticsHandler}>See Robot Analytics</button></p>
        </div>
      </div>
      <div className="end__effector__area">
        {endEffectors?.map((endEffector) => (<EndEffectorCard key={endEffector._id}
          name={endEffector.name}
          description={endEffector.description}
          imageUrl={endEffector.image}
          endEffectorId={endEffector._id} />)
        )}
      </div>
    </React.Fragment >
  );
};

export default RobotScreen;



