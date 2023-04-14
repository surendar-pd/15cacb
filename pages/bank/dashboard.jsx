import { BarChart } from '@/components/BarChart';
import DoughnutChart from '@/components/DoughnutChart';
import UserLayout from '@/layouts/UserLayout'
import { MenuItem, Select } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

const Dashboard = () => {

    const [category, setCategory] = React.useState('Category');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <UserLayout>
            <section>
            <h1 className="text-[1.5rem] font-semibold">Bank Dashboard</h1>
                <section className='mt-8'>
                    <div className=''>
                        <h1 className="mb-4 font-medium">Filters</h1>
                        <div className='flex gap-4'>
                            <input type="text" placeholder="Period" className="w-full bg-transparent outline-slate-300 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
                            <Select
                                sx={{
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#22c55e',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#22c55e',
                                    },
                                    '.MuiSvgIcon-root ': {
                                        fill: "black !important",
                                    },
                                    fontFamily: "Poppins"
                                }}
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={category}
                                onChange={handleChange}
                                className='w-full foucus:outline focus:outline-green-500'
                            >
                                <MenuItem sx={{fontFamily: "Poppins"}} value={"15CA Part A"}>Currency Wise</MenuItem>
                                <MenuItem sx={{fontFamily: "Poppins"}} value={"15CA Part B"}>Country Wise</MenuItem>
                                <MenuItem sx={{fontFamily: "Poppins"}} value={"15CA Part C + 15CB"}>Party Wise</MenuItem>
                                <MenuItem sx={{fontFamily: "Poppins"}} value={"15CA Part D"}>Client Wise</MenuItem>
                            </Select> 
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
                    <div className="w-full mt-8">
                        <div style={{ width: '100%' }}>
                            <DataGrid
                                autoHeight
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    '& .MuiDataGrid-row.Mui-selected': {
                                        backgroundColor: "transparent"
                                    },
                                    '& .MuiDataGrid-row:hover': {
                                        backgroundColor: "rgb(134 239 172 / 0.1)"
                                    },
                                    '& .MuiDataGrid-cell:focus':{
                                        outline: "none"
                                    },
                                }}
                                rows={rows} 
                                columns={columns}
                            />
                        </div>
                        </div>
                </section>
            </section>
        </UserLayout>
    )
}

export default Dashboard;

const rows = [
    { id: 1, col4: '23/08/2022', col1: 'ABC PVT LTD', col3: "USD", col2:"10,000"},
    { id: 2, col4: '5/10/2022', col1: 'RTY PVT LTD', col3: "USD", col2:"10,000"},
    { id: 3, col4: '1/11/2022', col1: 'JKL PVT LTD', col3: "USD", col2:"10,000"},
    { id: 4, col4: '13/02/2022', col1: 'XYZ PVT LTD', col3: "USD", col2:"10,000"},
    { id: 5, col4: '04/07/2022', col1: 'BNM PVT LTD', col3: "USD", col2:"10,000"},
    { id: 5, col4: '04/07/2022', col1: 'BNM PVT LTD', col3: "USD", col2:"10,000"},
    { id: 5, col4: '04/07/2022', col1: 'BNM PVT LTD', col3: "USD", col2:"10,000"},
    { id: 5, col4: '04/07/2022', col1: 'BNM PVT LTD', col3: "USD", col2:"10,000"},
    { id: 5, col4: '04/07/2022', col1: 'BNM PVT LTD', col3: "USD", col2:"10,000"},
];
const columns = [
    { field: 'col1',headerAlign: 'center', headerName: 'Name of the Client', width: 400 },
    { field: 'col2',headerAlign: 'center', headerName: 'Amount', width: 200 },
    { field: 'col3',headerAlign: 'center', headerName: 'Currency', width: 200 },
    { field: 'col4',headerAlign: 'center', headerName: 'Date', width: 200 },
];