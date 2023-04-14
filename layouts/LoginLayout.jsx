import Image from 'next/image'
import React from 'react'
import logo from "../assets/15cacb.png"

const LoginLayout = ({children}) => {
    return (
        <section className="w-full h-screen flex">
            <div className="w-1/3 bg-green-300 flex flex-col items-center justify-center gap-20 p-16 text-center h-full">
                <Image src={logo} alt="logo" width="300" height="300"/>
                <h1 className=''>A one-stop unified solution to manage your compliances for foreign remittance.</h1>
            </div>
            <main className="w-2/3 h-full flex flex-col space-y-4 justify-center items-center">
                {children}
            </main>
        </section>
    )
}

export default LoginLayout