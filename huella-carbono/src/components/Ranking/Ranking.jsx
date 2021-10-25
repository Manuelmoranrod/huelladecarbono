import React from "react";
import DataTable from 'react-data-table-component';

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
    id: 1,
    position: 1,
    alias: 'Guillem',
    city: 'Madrid',
    co2: '5920 kg',
  },
  {
    id: 2,
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
      backgroundColor: 'green',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
];

const Ranking = () => {
  return (
    <div className="ranking">
      <h1>Ranking</h1>
      <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            conditionalRowStyles={conditionalRowStyles}
            pagination
        />
    </div>
  );
};

export default Ranking;
