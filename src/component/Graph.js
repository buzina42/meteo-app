import React from 'react';
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
import getDataInterval from '../data/getForDB.js';

// Сюда данные из бд попадают в таком виде
// [
//   {t: '1881-01-08', v: -13.3}
//   {t: '1881-01-09', v: -19.7}
//   {t: '1881-01-10', v: -24.5}
// ]

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Температура',
      //здесь показатели для каждой даты функция?
      data: labels.map(() => {}),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
}


export default function Graph() {
    return <Line options={options} data={data} />;
}