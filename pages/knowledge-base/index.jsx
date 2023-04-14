import UserLayout from '@/layouts/UserLayout';
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {countries, subCategories, natureOfRemittance, rbiPurposeCode} from "@/assets/data";

const KnowledgeBase = () => {
    return (
        <UserLayout>
            <section>
            <h1 className="text-[1.5rem] font-semibold">Knowledge Base</h1>
                <section className='mt-8 grid grid-cols-2 w-full gap-8'>
                    <div className="">
                        <h1 className='mb-4 font-medium'>Nature of Remittance</h1>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={natureOfRemittance}
                            // sx={{ width: 300 }}
                            renderInput={(params) => <TextField                         sx={{
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
                            }} {...params}/>}
                        />
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-medium'>RBI Purpose Code</h1>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={rbiPurposeCode}
                            // sx={{ width: 300 }}
                            renderInput={(params) => <TextField                         sx={{
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
                            }} {...params}/>}
                        />
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-medium'>RBI Sub Category</h1>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={subCategories}
                            // sx={{ width: 300 }}
                            renderInput={(params) => <TextField                         sx={{
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
                            }} {...params}/>}
                        />
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-medium'>Double Taxation Avoidance Agreement</h1>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={countries}
                            // sx={{ width: 300 }}
                            renderInput={(params) => <TextField                         sx={{
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
                            }} {...params}/>}
                        />
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-medium'>Country</h1>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={countries}
                            // sx={{ width: 300 }}
                            renderInput={(params) => <TextField                        sx={{
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
                            }} {...params}/>}
                        />
                    </div>
                </section>
                <div className='mt-8'>
                    <button className='bg-green-500 px-4 py-2 rounded-md text-white transition-all duration-300 hover:shadow-md'>Calculate Tax Rate</button>
                </div>
            </section>
        </UserLayout>
    )
}

export default KnowledgeBase;