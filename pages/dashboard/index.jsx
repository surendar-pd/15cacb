import { BarChart } from '@/components/BarChart';
import DoughnutChart from '@/components/DoughnutChart';
import Map from '@/components/Map';
import UserLayout from '@/layouts/UserLayout'
import Image from 'next/image';
import React from 'react';

import map from "../../assets/map.svg"

const Dashboard = () => {

    const upcomingPayments = [
        {
            title:"Payment to ABC in France",
        },
        {
            title:"Payment to ZXY in USA",
        },
        {
            title:"Payment to ABC in France",
        },
        {
            title:"Payment to ZXY in USA",
        },
    ];

    return (
        <UserLayout>
            <section>
            <h1 className="text-[1.5rem] font-semibold">Dashboard</h1>
                <section className='mt-8'>
                    <div className=''>
                        <h1 className="mb-4 font-medium">Upcoming Payments</h1>
                        <div className='grid grid-cols-1 gap-1'>
                            {
                                upcomingPayments.map((payment,index) => {
                                    return(
                                        <div key={index} className={`w-1/2 ${index % 2 === 0 ? "bg-slate-300/30" : ""} transition-all duration-300 hover:bg-green-300/30 p-4 rounded-md`}>
                                            {payment.title}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h1 className="mb-4 font-medium">Analytics</h1>
                        <div className='flex gap-16'>
                            <div className='flex flex-col gap-4'>
                                <h1 className="">Currency Wise</h1>
                                <div className='w-80 h-80'>
                                    <DoughnutChart/>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h1 className="">Party Wise</h1>
                                <div className='w-80 h-full'>
                                    <BarChart/>
                                </div>
                            </div>
                        </div>
                        {/* <div className='w-full h-full'>
                            <Map/>
                        </div> */}
                    </div>
                </section>
            </section>
        </UserLayout>
    )
}

export default Dashboard