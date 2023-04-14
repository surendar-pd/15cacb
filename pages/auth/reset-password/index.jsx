import LoginLayout from '@/layouts/LoginLayout'
import React from 'react';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Reset = () => {

    const router = useRouter()

    return (
        <LoginLayout>
            <h1 className='w-2/5 text-[1.5rem] font-semibold'>Reset Password</h1>
            <div className="w-2/5">
                <input placeholder='Email' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
            </div>
            <div className='w-2/5'>
                <button className='w-full bg-green-500 p-4 rounded-md text-white transition-all duration-300 hover:shadow-md'>Send</button>
            </div>
            <div onClick={() => router.push("/auth/login")} className='w-2/5 hover:text-green-500 text-center flex items-center justify-center gap-1 transition-all duration-300 cursor-pointer'>
                <ArrowBackIcon/>
                <span>Back to</span>
                <span>Login</span>                
            </div>
        </LoginLayout>
    )
}

export default Reset