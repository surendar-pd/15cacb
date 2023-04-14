import Sidebar from '@/components/Sidebar'
import React from 'react'

const UserLayout = ({children}) => {
    return (
        <section className="min-w-screen min-h-screen flex">
            <div className="w-1/5">
                <Sidebar/>
            </div>
            <main className="w-4/5 h-screen p-8 overflow-y-scroll">
                {children}
            </main>
        </section>
    )
}

export default UserLayout