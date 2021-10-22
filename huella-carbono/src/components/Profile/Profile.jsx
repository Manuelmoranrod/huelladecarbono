import React, { useState } from "react";
import Chart from "react-apexcharts";

import './Profile.css'
// const series = [76, 67, 61, 90]

const options = {
  chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      size: undefined,
      inverseOrder: true,
      hollow: {
        margin: 5,
        size: '48%',
        background: 'transparent',
        
      },
      track: {
        background: '#eee',
        show: true,
      },
      startAngle: 0,
      endAngle: 320,
    },
  },
  stroke: {
    lineCap: 'round'
  },
  // series: [71, 63, 77],
  labels: ['June', 'May', 'April'],
  legend: {
    show: true,
    floating: true,
    position: 'right',
    offsetX: 70,
    offsetY: 240
  },
  // colors: ['#FDDB3A', '#52575D', '#F6F4E6', '#41444B'],
}

const series = [44, 55, 67, 81]


const Profile = () => {



  return (
    <div className="profile">
      <div className="profile-content">
        <h1>Hola Alias,</h1>
        <p className="p-co2">Tu medida de <br /> emisiones semanales</p>
        <span className="span-co2">147 kg</span>

        <div className="div-mid-spain-button">
          <div>
            <p>170kg CO2</p>
            <span>Persona media en España</span>
          </div>
          <button>Track diario</button>
        </div>

        <div className="div-chart-percentage">

          <Chart
            options={options}
            series={series}
            type="radialBar"
            width="300"
          />

          <div>
              <p>Alimenación 30%</p>
              <p>Transporte 70%</p>
              <p>Hogar 15%</p>
          </div>

        </div>

        <h2>Tu progreso</h2>

        <p>ESTO ES UNA BARRA</p>

        <button className="button-compensar">Compensar mi huella</button>

      </div>
    </div>
  );
};

export default Profile;
