import React from 'react'
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Analytics = () => {
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

  const sensor1 = robot.sensor1;
  const sensor2 = robot.sensor2;
  const sensor3 = robot.sensor3;
  return (
   <Pie />
    
  )
}

export default Analytics