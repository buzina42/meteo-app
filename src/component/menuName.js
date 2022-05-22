import React from 'react';
import { ThunderboltFilled, LineChartOutlined , RadarChartOutlined } from '@ant-design/icons';


export const menuName = [
    {
      name:"temperature",
      icon: <ThunderboltFilled />,
      paragraph: "Температура"
    },
    {
      name:"precipitation",
      icon: <LineChartOutlined />,
      paragraph: "Осадки"
    },
    {
      name:"twoParam",
      icon: <RadarChartOutlined />,
      paragraph: "Соотношение"
    }];