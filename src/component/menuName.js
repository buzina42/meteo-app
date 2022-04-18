import React from 'react';
import { ThunderboltFilled, LineChartOutlined , RadarChartOutlined } from '@ant-design/icons';


export const menuName = [
    {
      name:"temperature",
      icon: <ThunderboltFilled />,
      paragraph: "Температура",
      //onClick: foo
    },
    {
      name:"percepication",
      icon: <LineChartOutlined />,
      paragraph: "Осадки",
      //onClick: foo
    },
    {
      name:"temperature,percepication",
      icon: <RadarChartOutlined />,
      paragraph: "Соотношение",
      //onClick: foo
    }];