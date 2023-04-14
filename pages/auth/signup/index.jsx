import LoginLayout from '@/layouts/LoginLayout'
import React from 'react'
import { useRouter } from 'next/router';


const SignUp = () => {
    const router = useRouter()

    return (
        <LoginLayout>
            <h1 className='w-2/5 text-[1.5rem] font-semibold'>Get started absolutely free.</h1>
            <div className="w-2/5">
                <input placeholder='Legal Name' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
            </div>
            <div className="w-2/5">
                <input placeholder='Email' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
            </div>
            <div className="w-2/5">
                <input placeholder='Type of Entity' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
            </div>
            <div className='w-2/5'>
                <input placeholder='Address' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
            </div>
            <div className='w-2/5 flex space-x-4'>
                <input placeholder='Pan Number' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
                <input placeholder='Tan Number' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
            </div>
            <div className='w-2/5 flex space-x-4'>
                <input placeholder='City' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
                <input placeholder='State' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
            </div>
            <div className='w-2/5 flex space-x-4'>
                <input placeholder='Pin Code' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
                <input placeholder='Phone Number' className="w-full bg-slate-300/20 p-4 rounded-md outline-none focus:outline focus:outline-green-500"/>
            </div>
            <div className='w-2/5'>
                <button className='w-full bg-green-500 p-4 rounded-md text-white transition-all duration-300 hover:shadow-md'>Sign Up</button>
            </div>
            <div className='w-2/5 text-center'>
                <span>Already have an account?</span>
                <span onClick={() => router.push("/auth/login")} className='mt-2 cursor-pointer text-green-500'> Login</span>                
            </div>
        </LoginLayout>
    )
}

export default SignUp