import React from 'react';
import { ThunderboltFilled, LineChartOutlined , RadarChartOutlined } from '@ant-design/icons';

export const menuName = [
    {
      name:"temperature",
      icon: <ThunderboltFilled />,
      paragraph: "Температура"
    },
    {
      name:"percepication",
      icon: <LineChartOutlined />,
      paragraph: "Осадки"
    },
    {
      name:"temperature,percepication",
      icon: <RadarChartOutlined />,
      paragraph: "Соотношение"
    }];