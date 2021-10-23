import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Chart from "react-apexcharts";
import { Redirect } from "react-router-dom";

// Context
import userContext from "../../context/userContext";

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
  // series: [71, 63, 77, 23],
  labels: ['Alimentación', 'Transporte', 'Casa'],
  legend: {
    show: true,
    floating: true,
    position: 'right',
    offsetX: 70,
    offsetY: 240
  },
  // colors: ['#FDDB3A', '#52575D', '#F6F4E6', '#41444B'],
}




const Profile = () => {

  // States
  const [kgTotal, setKgTotal] = useState(0)
  const [food, setFood] = useState(0);
  const [transport, setTransport] = useState(0);
  const [home, setHome] = useState(0);

  // Context
  const { user, setUser } = useContext(userContext);

  // Valores grafica
  let series = [food, transport, home]


  useEffect(() => {
    async function getData() {
      const response = await axios.post('http://localhost:3001/info/get-info', {
        token: user
      });

      // Sacamos los porcentajes para la grafica sobre el total
      const calcFood = (response.data.food * 100) / response.data.totalKg
      const calcTransport = (response.data.transport * 100) / response.data.totalKg
      const calcHome = (response.data.home * 100) / response.data.totalKg

      setKgTotal(response.data.totalKg);
      setFood(calcFood.toFixed(2));
      setTransport(calcTransport.toFixed(2));
      setHome(calcHome.toFixed(2));
    }
    getData()
  }, [])

  return (
    <>
      {
        user === null
          ? <Redirect to="/" />
          : <div className="profile">
            <div className="profile-content">
              <h1>Hola Alias,</h1>
              <p className="p-co2">Tu medida de <br /> emisiones semanales</p>
              <span className="span-co2">{kgTotal} kg</span>

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
                  <p>Alimenación {food}%</p>
                  <p>Transporte {transport}%</p>
                  <p>Hogar {home}%</p>
                </div>

              </div>

              <h2>Tu progreso</h2>

              <p>ESTO ES UNA BARRA</p>

              <button className="button-compensar">Compensar mi huella</button>

            </div>
          </div>
      }
    </>
  );
};

export default Profile;
