import React from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const RobotScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const getProcesses = useSelector((state) => state.getProcesses);
  const processes = getProcesses.processes;

  const processDetails = processes.filter(
    (process) => process.robot._id === params.id
  );

  const robot = processDetails[0].robot;
  const robotName = robot.name;
  const robotImg = robot.imageurl;
  const robotId = robot._id

  return (
    <React.Fragment>
      <div>{robotName}</div>
      <img src={robotImg} />

      <Pie />

    </React.Fragment>
  );
};

export default RobotScreen;
