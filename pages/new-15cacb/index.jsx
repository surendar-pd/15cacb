import UserLayout from '@/layouts/UserLayout'
import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const New15Cacb = () => {

    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    


    return (
        <UserLayout>
            <section>
                <h1 className="text-[1.5rem] font-semibold">Request for New 15CACB</h1>
                <section className='w-full gap-6 mt-8 grid grid-cols-2'>
                    <div className="">
                        <h1 className="mb-4 font-medium">Category<span className='text-red-500'>*</span></h1>
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
                            <MenuItem sx={{fontFamily: "Poppins"}} value={"15CA Part A"}>15CA Part A</MenuItem>
                            <MenuItem sx={{fontFamily: "Poppins"}} value={"15CA Part B"}>15CA Part B</MenuItem>
                            <MenuItem sx={{fontFamily: "Poppins"}} value={"15CA Part C + 15CB"}>15CA Part C + 15CB</MenuItem>
                            <MenuItem sx={{fontFamily: "Poppins"}} value={"15CA Part D"}>15CA Part D</MenuItem>
                        </Select>  
                    </div>
                    <div></div>
                    <div>
                        <h1 className='mb-4 font-medium'>Invoice<span className='text-red-500'>*</span></h1>
                        <form>
                        <label for="file-input" class="sr-only">Choose file</label>
                        <input type="file" name="file-input" id="file-input" class="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-green-500 focus:ring-green-500
                            file:border-0
                            file:bg-slate-300/20 file:mr-4
                            file:p-4
                            "/>
                        </form>
                    </div>
                    <div>
                        <h1 className='mb-4 font-medium'>TRC<span className='text-red-500'>*</span></h1>
                        <form>
                        <label for="file-input" class="sr-only">Choose file</label>
                        <input type="file" name="file-input" id="file-input" class="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-green-500 focus:ring-green-500
                            file:border-0
                            file:bg-slate-300/20 file:mr-4
                            file:p-4
                            "/>
                        </form>
                    </div>
                    <div>
                        <h1 className='mb-4 font-medium'>Form A2/10F<span className='text-red-500'>*</span></h1>
                        <form>
                        <label for="file-input" class="sr-only">Choose file</label>
                        <input type="file" name="file-input" id="file-input" class="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-green-500 focus:ring-green-500
                            file:border-0
                            file:bg-slate-300/20 file:mr-4
                            file:p-4
                            "/>
                        </form>
                    </div>
                    <div>
                        <h1 className='mb-4 font-medium'>Any other supporting document</h1>
                        <form>
                        <label for="file-input" class="sr-only">Choose file</label>
                        <input type="file" name="file-input" id="file-input" class="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-green-500 focus:ring-green-500
                            file:border-0
                            file:bg-slate-300/20 file:mr-4
                            file:p-4
                            "/>
                        </form>
                    </div>
                    <div className='col-span-2'>
                        <h1 className='mb-4 font-medium'>Any comments/remarks</h1>
                        <form>
                        <label for="file-input" class="sr-only">Choose file</label>
                        <textarea rows="4" cols="50" style={{resize: "none"}} className="bg-transparent w-full outline outline-slate-300 focus:outline focus:outline-green-500 p-4 rounded-md"/>
                        </form>
                    </div>
                    <div className='col-span-2 flex items-center'>
                        <Checkbox
                            defaultChecked
                            sx={{
                            color: "#22c55e",
                            '&.Mui-checked': {
                                color: "#22c55e",
                            },
                            }}
                        />
                        <h1 className=''>By submitting you agree that you confirm that the information captured on this form is accurate and you accept the terms of use.</h1>
                    </div>
                    <div className='col-span-2 flex space-x-4 items-center justify-end'>
                        <Tooltip title={"Schedule for future"} placement="left">
                            <IconButton className='hover:bg-green-300/30 hover:text-green-500 transition-all duration-300'>
                                <ScheduleIcon/>
                            </IconButton>
                        </Tooltip>
                        <button className='w-1/6 bg-green-500 p-4 rounded-md text-white transition-all duration-300 hover:shadow-md'>Submit</button>
                    </div>
                </section>
            </section>
        </UserLayout>
    )
}

export default New15Cacb