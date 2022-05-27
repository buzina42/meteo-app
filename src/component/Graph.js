import React, { useContext, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ParameterGraphContext} from "../context/parameter-context.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function Graph() {

  const {state} = useContext(ParameterGraphContext);
  const [info, SetInfo] = useState([]);
  useEffect(()=> {
    SetInfo(state.periodData)
  },[state.periodData]);
  //console.log(info);
 
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Архив метеослужбы',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Температура °С',
          color: 'rgb(255, 99, 132)'
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: 'Осадки мм',
          color: 'rgb(53, 162, 235)'
        },
      },
    },
  };
  //здесь должны бить даты из запроса
  const labels = info.map(({t}) => {return t;} );
  
  const data = state.store === "twoParam" ? 
  {
    labels,
    datasets: [
      {
        label: 'Температура',
        data: info.map(({v}) => {return v;} ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Осадки',
        data: info.map(({o}) => {return o;} ),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  } :
  {
    labels,
    datasets: [
      {
        label: state.paragraph,
        //здесь показатели для каждой даты 
        data: info.map(({v}) => {return v;} ),
        borderColor: state.store === 'temperature'
          ? 'rgb(255, 99, 132)' 
          :  'rgb(53, 162, 235)',
        backgroundColor: state.store === 'temperature'
          ? 'rgba(255, 99, 132, 0.5)' 
          : 'rgba(53, 162, 235, 0.5)',
        yAxisID: state.store === 'temperature'
          ? 'y'
          : 'y1',
      }
    ],
  }

  return <Line options={options} data={data} />;
}