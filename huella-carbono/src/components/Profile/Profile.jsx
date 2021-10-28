import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Chart from "react-apexcharts";
import { Link, useHistory } from "react-router-dom";

//Mui
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Context
import userContext from "../../context/userContext";

// Imagenes
import firstPlan from '../../assets/plan-first-profile.png';
import iconEngranaje from '../../assets/engranaje-icon.svg';


const options = {
  chart: {
    height: 200,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      size: undefined,
      inverseOrder: true,
      hollow: {
        margin: 5,
        size: '25%',
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
  colors: ['#26A0FC', '#FEBC3B', '#FF6178'],
}




const Profile = () => {

  const history = useHistory()

  // States
  const [kgTotal, setKgTotal] = useState(0)
  const [food, setFood] = useState(0);
  const [transport, setTransport] = useState(0);
  const [home, setHome] = useState(0);
  const [alias, setAlias] = useState('');

  // Context
  const { user, setUser } = useContext(userContext);

  // Valores grafica
  let series = [food, transport, home]


  useEffect(() => {
    if (user === null) {
      history.push('/')
    }

    async function getData() {
      try {
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
        setAlias(response.data.alias)
      } catch (err) {
        console.log(err);
      }

    }
    getData()
  }, [])

  const handleLogout = () => {
    setUser(null)
    sessionStorage.removeItem('token')
    history.push('/')
  }

  // dashboard
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //

  return (
    <div className="profile">
      <button className="button-engranaje" onClick={handleClick}>

        <img src={iconEngranaje} />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
      </Menu>
      <div className="profile-content">
        <h1>Hola {alias},</h1>
        <p className="p-co2">Tu medida de <br /> emisiones semanales</p>
        <span className="span-co2">{kgTotal} kg <span className="span-co2-light">CO2</span></span>

        <div className="div-chart-percentage">

          <div className="chart-box">
            <Chart
              options={options}
              series={series}
              type="radialBar"
              width="200"
            />
          </div>

          <div>
            <div className="column-data-chart">
              <p className="alimentacion">Alimenación</p>
              <p className="transporte">Transporte</p>
              <p className="hogar">Hogar</p>
            </div>

            <div className="column-data-chart last-column">
              <p>{food}%</p>
              <p>{transport}%</p>
              <p>{home}%</p>
            </div>
          </div>

        </div>

        <span className="media-espana">*Persona media en España 170 kg CO2</span>

        <h2>Tu progreso</h2>

        <div className="plan-conteiner">
          <img src={firstPlan} alt="plan" />
        </div>

        <Link to="/compensate"><button className="button-compensar">Ver todos los planes</button></Link>

      </div>
    </div>
  );
};

export default Profile;
