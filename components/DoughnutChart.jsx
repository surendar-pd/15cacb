import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['GBP', 'Euro', 'USD'],
    datasets: [
        {
            label: '',
            data: [500, 700, 400],
            // backgroundColor: [
            // '#86efac',
            // '#fca5a5',
            // '#fde047',
            // ],
            backgroundColor: [
                'rgba(255, 99, 133, 0.523)',
                'rgba(54, 163, 235, 0.482)',
                'rgba(255, 207, 86, 0.477)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderWidth: 1,
        },
    ],
    options:{
        maintainAspectRatio: false,
        scales: {
            y:{
                beginAtZero: true,
            }
        }
    }
};

export default function DoughnutChart() {
return(
        <Pie
            data={data} />
) 
}
