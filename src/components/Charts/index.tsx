import React from 'react';
import { Line, Pie } from '@ant-design/charts';

interface LineChartProps {
  data: Array<{ [key: string]: any }>;
  xField?: string;
  yField?: string;
}

interface PieChartProps {
  data: Array<{ name: string; value: number }>;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  xField = 'time',
  yField = 'value',
}) => {
  const config = {
    data,
    xField,
    yField,
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  return <Line {...config} />;
};

export const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'name',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  return <Pie {...config} />;
}; 