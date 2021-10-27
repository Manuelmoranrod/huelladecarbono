import React, { useEffect, useContext, useState } from "react";
import DataTable from 'react-data-table-component';
import axios from 'axios';

// Context
import userContext from "../../context/userContext";

const columns = [
  {
    name: 'Posición',
    selector: row => row.position,
  },
  {
    name: 'Alias',
    selector: row => row.alias,
  },
  {
    name: 'Ciudad',
    selector: row => row.city,
  },
  {
    name: 'CO2',
    selector: row => row.co2,
  },
];

const data = [
  {
    
    position: 1,
    alias: 'Guillem',
    city: 'Madrid',
    co2: '5920 kg',
  },
  {
    
    position: 2,
    alias: 'CainNito',
    city: 'Madrid',
    co2: '1245 kg',
  },
  {
    id: 3,
    position: 3,
    alias: 'CainNito',
    city: 'Madrid',
    co2: '1245 kg',
  },
  {
    id: 4,
    position: 4,
    alias: 'CainNito',
    city: 'Madrid',
    co2: '1245 kg',
  },
  {
    id: 5,
    position: 5,
    alias: 'CainNito',
    city: 'Madrid',
    co2: '1245 kg',
  },
]

const customStyles = {
  rows: {
      style: {
          minHeight: '72px',
          // textAlign: 'center'
          // background: 'red'
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
          // textAlign: 'center'
      },
  },
  cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
          // textAlign: 'center'
      },
  },
};

const conditionalRowStyles = [
  {
    when: row => row.position === 1,
    style: {
      backgroundColor: '#80AE09',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    
    
  },
];

const Ranking = () => {

  // Context
  const { user, setUser } = useContext(userContext);
  const [datainfo, setData] = useState(0);


  useEffect(() => {
    async function getData() {
      const response = await axios.post('http://localhost:3001/ranking/ranking-data', {
        token: user
      });
      
      setData(response.data)

    }
    getData()
  }, [])
   console.log("estado", datainfo);
  return (
    <>
    {user ? 
      <div className="ranking">
      <h1>Ranking</h1>
      <p>Mira cómo vas subiendo de puestos al reducir tu huella</p>
      <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            conditionalRowStyles={conditionalRowStyles}
            pagination
        />
    </div> : 
    <div className="ranking">
      <h1>Ranking</h1>
      <p>Mira cómo vas subiendo de puestos al reducir tu huella</p>
      <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            conditionalRowStyles={conditionalRowStyles}
            pagination
        />
    </div>
   }
   </>
    
  );
};

export default Ranking;
