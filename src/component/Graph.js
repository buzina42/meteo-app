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
import { fakeData } from "../data/fakeData.js"

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
  console.log(info);
 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Архив метеослужбы',
      },
    },
  };
  //здесь должны бить даты из запроса
  const labels = info.map(({t}) => {return t;} );
  
  const data = {
    labels,
    datasets: [
      {
        label: state.store,
        //здесь показатели для каждой даты 
        data: info.map(({v}) => {return v;} ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  }

  return <Line options={options} data={data} />;
}