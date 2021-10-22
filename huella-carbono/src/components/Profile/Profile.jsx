import React, { useState } from "react";
import ApexCharts, { ReactApexChart } from 'apexcharts'
import Chart from "react-apexcharts";

import './Profile.css'
// const series = [76, 67, 61, 90]

const options = {
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      track: {
        show: true,
        // startAngle: undefined,
        endAngle: 300,
        background: '#ffffff',
        // background: ['#bcd', '#aaa', '#000', '#fff'],
        // strokeWidth: '50%',
        // opacity: 1,
        // margin: 5,
        // dropShadow: {
        //   enabled: false,
        //   top: 0,
        //   left: 0,
        //   blur: 3,
        //   opacity: 0.5
        // }
      },
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Co2',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249
          }
        }
      }
    }
  },
  labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  // colors: ['#FDDB3A', '#52575D', '#F6F4E6', '#41444B'],
}




const series = [44, 55, 67, 81]


const Profile = () => {



  return (
    <div className="profile">
      <div className="profile-content">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          width="350"
        />
      </div>
    </div>
  );
};

export default Profile;
