import React from 'react'
import { Line, Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

import "./Analytics.css"

const Analytics = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const getProcesses = useSelector((state) => state.getProcesses);
  const process = location.state.process;

  const robot = process.robot;
  const robotName = robot.name;
  const robotImg = robot.imageurl;
  const robotId = robot._id

  const sensor1 = robot.sensor1;
  const sensor2 = robot.sensor2;
  const sensor3 = robot.sensor3;

  const data = {
    labels: [
      "01/01/2019",
      "02/01/2019",
      "03/01/2019",
      "04/01/2019",
      "05/01/2019",
      "06/01/2019",
      "07/01/2019"
    ],
    //backgroundColor: ['rgba(255,0,0,1)'],
    //lineTension: 1,
    datasets: [
      {
        label: "HSN",
        fill: false,
        borderColor: "rgba(255, 0, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "CPX",
        fill: false,
        borderColor: "rgba(0, 255, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [70, 32, 45, 65, 87, 92, 99]
      },
      {
        label: "Total",
        fill: false,
        borderColor: "blue",
        borderWidth: 2,
        pointRadius: 2,
        data: [135, 91, 125, 144, 143, 143, 139]
      }
    ]
  };

  var options = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10
      }
    },
    scales: {
      xAxes:
      {
        ticks: { display: false }
      }

    }
  };

  const pieDataFinnishedProcesses = {
    labels: [
      'January',
      'February',
      'March'
    ],
    datasets: [{
      data: [36200, 42000, 51000],
      backgroundColor: [
        'rgba(255,0,0, 1)',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };

  const pieDataEnergy = {
    labels: [
      'January',
      'February',
      'March'
    ],
    datasets: [{
      data: [1210, 1330, 2103],
      backgroundColor: [
        'rgba(255,0,0, 1)',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };

  const pieDataFailures = {
    labels: [
      'January',
      'February',
      'March'
    ],
    datasets: [{
      data: [2, 5, 13],
      backgroundColor: [
        'rgba(255,0,0, 1)',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };

  const pieDataMaintenance = {
    labels: [
      'January',
      'February',
      'March'
    ],
    datasets: [{
      data: [10, 25, 13],
      backgroundColor: [
        'rgba(255,0,0, 1)',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };








  return (
    <React.Fragment>
      <div className='analytics__screen'>
        <div className='analytics__screen__left'><h2 className='analytics__heading'>Successfully finnished processes</h2><Pie data={pieDataFinnishedProcesses} options={options} /></div>
        <div className='analytics__screen__right'><h2 className='analytics__heading'>Energy consumption</h2> <Pie data={pieDataEnergy} options={options} /></div>
      </div >
      <div className='analytics__screen'>
        <div className='analytics__screen__left'><h2 className='analytics__heading'>Process failures</h2><Pie data={pieDataFailures} options={options} /></div>
        <div className='analytics__screen__right'><h2 className='analytics__heading'>Maintenance time required</h2> <Pie data={pieDataMaintenance} options={options} /></div>
      </div>
    </React.Fragment>
  )
}

export default Analytics


