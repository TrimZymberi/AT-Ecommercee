import React from 'react'
import { Outlet } from 'react-router-dom'
import GuestNav from './views/GuestNav'
import Footer from './components/Footer'

export default function GuestLayout() {
    return (
        <div>
            <GuestNav />
            <div className="h-24 bg-sky-200">
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}
