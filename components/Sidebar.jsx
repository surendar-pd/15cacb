import Image from 'next/image'
import React from 'react';
import logo from "../assets/15cacb.png"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatIcon from '@mui/icons-material/Chat';
import BackHandIcon from '@mui/icons-material/BackHand';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';


import { useRouter } from 'next/router';
import { Tooltip } from '@mui/material';

const Sidebar = () => {

    const sidebarData = [
        {
            icon: <SpaceDashboardIcon className='w-5 h-5'/>,
            route: "dashboard",
            title: 'Dashboard',
        },
        {
            icon: <LibraryAddIcon className='w-5 h-5'/>,
            route: "new-15cacb",
            title: 'New 15CACB',
        },
        {
            icon: <DataThresholdingIcon className='w-5 h-5'/>,
            route: "archieved-data",
            title: 'Archieved Data',
        },
        {
            icon: <SpaceDashboardIcon className='w-5 h-5'/>,
            route: "bank/dashboard",
            title: 'Bank Dashboard',
        },
        {
            icon: <DataThresholdingIcon className='w-5 h-5'/>,
            route: "knowledge-base",
            title: 'Knowledge Base',
        },
    ];

    const router = useRouter();

    return (
        <div className="w-full h-screen flex flex-col justify-between items-center border-r">
            <div className="mt-8">
                <Image src={logo} alt="logo" width="150" height="150" />
            </div>
            <div className='w-full p-4 flex flex-col gap-2'>
                {
                    sidebarData.map((data, index) => (
                        <div onClick={() => router.push(`/${data.route}`)} key={index} className={`flex gap-2 items-center p-4 rounded-md transition-all duration-300 cursor-pointer ${router.pathname === `/${data.route}` ? "text-green-500 bg-green-300/30" : "hover:bg-gray-300/30 text-gray-500"} w-full`}>
                            {data.icon}
                            <h1 className='font-semibold text-[0.85rem]'>{data.title}</h1>
                        </div>
                    ))
                }
            </div>
            <div className='w-full'>
                <div className='p-4'>
                    <div onClick={() => router.push(`#`)} className={`flex gap-2 items-center p-4 rounded-md transition-all duration-300 cursor-pointer ${router.pathname === `/#` ? "text-green-500 bg-green-300/30" : "hover:bg-gray-300/30 text-gray-500"} w-full`}>
                        <ChatIcon className='w-5 h-5'/>
                        <h1 className='font-semibold text-[0.85rem]'>Online Chat</h1>
                    </div>
                    <div onClick={() => router.push(`#`)} className={`flex gap-2 items-center p-4 rounded-md transition-all duration-300 cursor-pointer ${router.pathname === `/#` ? "text-green-500 bg-green-300/30" : "hover:bg-gray-300/30 text-gray-500"} w-full`}>
                        <BackHandIcon className='w-5 h-5'/>
                        <h1 className='font-semibold text-[0.85rem]'>Raise a Ticket</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center px-4 py-6 border-t'>
                    <div className='flex gap-2'>
                        <PersonOutlineIcon/>
                        <h1 className='font-medium'>Kartik Bapna</h1>
                    </div>
                    <Tooltip onClick={() => router.replace("/auth/login")} title="Logout" placement="top">
                        <IconButton className='hover:bg-green-300/20 hover:text-green-500 transition-all duration-300'>
                            <LogoutIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default Sidebar