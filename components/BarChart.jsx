import React from 'react';
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

export const options = {
    maintainAspectRatio: false,
responsive: true,
plugins: {
    legend: {
    position: 'top',
    },
    title: {
    display: true,
    },
},
};

const labels = ['ABC', 'XYZ', 'PQ', 'RST'];

export const data = {
labels,
datasets: [
    {
    label: 'Party',
    data: [1,8],
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
},
],
};

export function BarChart() {
return <Bar width={200} height={200} options={options} data={data} />;
}
