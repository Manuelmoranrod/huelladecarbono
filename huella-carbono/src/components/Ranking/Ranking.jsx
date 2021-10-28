import React, { useEffect, useContext, useState } from "react";
import { useHistory } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import axios from 'axios';

// Context
import userContext from "../../context/userContext";

const columns = [
  {
    name: 'Posición',
    selector: row => row.position,
    width: 'auto',
    center: true,
  },
  {
    name: 'Alias',
    selector: row => row.alias,
    width: 'auto',
    center: true,
  },
  {
    name: 'Ciudad',
    selector: row => row.city,
    width: 'auto',
    center: true,
  },
  {
    name: 'CO2',
    selector: row => row.co2,
    width: 'auto',
    center: true,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: '72px',
      background: '#F7FBEE'
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
  columns: {
    width: 'auto'
  }
};


const Ranking = () => {

  const history = useHistory()

  // Context
  const { user } = useContext(userContext);
  const [datainfo, setData] = useState({});
  const [city, setCity] = useState(false)


  useEffect(() => {
    if (user === null) {
      history.push('/')
    } else {

      async function getData() {

        try {
          const { data } = await axios.post('http://localhost:3001/ranking/ranking-data', {
            token: user
          });

          setData(data)
        } catch (err) {
          console.log(err);
        }
      }
      getData()
    }

  }, [])
  

  const conditionalRowStyles = [
    {
      when: row => row.position === datainfo.positionUser,
      style: {
        backgroundColor: '#80AE09',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  ];
  
  
  return (
    <div className="ranking-conteiner">
      <div className="ranking">
        <h1>Ranking</h1>
        <p>Mira cómo vas subiendo de puestos al reducir tu huella</p>

        <div>
          <button className={`${city ? 'desactivated' : ''}`} onClick={() => setCity(false)}>España</button>
          <button className={`${city ? '' : 'desactivated'}`} onClick={() => setCity(true)}>{datainfo.userCity}</button>
        </div>

      </div>
      <DataTable
        columns={columns}
        data={city
          ? datainfo.localFromUser
          : datainfo.allSpain
        }
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
        striped
      // pagination
      />
    </div>
  );
};

export default Ranking;
