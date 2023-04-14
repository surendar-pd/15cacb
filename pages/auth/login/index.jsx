import LoginLayout from '@/layouts/LoginLayout';
import React from 'react'
import { useRouter } from 'next/router';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {

    const router = useRouter()

    return (
        <LoginLayout>
            <h1 className='text-center w-2/5 text-[1.5rem] font-semibold'>Login</h1>
            <div className="w-2/5 flex items-center justify-center">
                <button className='w-full text-slate-900 p-4 rounded-md border bg-slate-300/20 transition-all duration-300 hover:shadow-md'><GoogleIcon className='mr-1'/> Log in with <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#4285f4] via-[#34a853] via-[#fbbc05] to-[#ea4335]'>Google</span></button>
            </div>
            <p>Or</p>
            <div className="w-2/5">
                <input placeholder='Email' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
            </div>
            <div className='w-2/5'>
                <input placeholder='Password' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
                <span onClick={() => router.push("/auth/reset-password")} className='flex cursor-pointer justify-end mt-2 text-green-500'>Forgot Password?</span>
            </div>
            <div className='w-2/5'>
                <button onClick={() => router.push("/dashboard")} className='w-full transition-all duration-300 hover:shadow-md bg-green-500 p-4 rounded-md text-white'>Login</button>
            </div>
            <div className='w-2/5 text-center'>
                <span>Dont have an account yet?</span>
                <span onClick={() => router.push("/auth/signup")} className='mt-2 cursor-pointer text-green-500'> Sign up</span>                
            </div>
        </LoginLayout>
        // <div className='w-full h-screen bg-slate-600'></div>
    )
}

export default Login