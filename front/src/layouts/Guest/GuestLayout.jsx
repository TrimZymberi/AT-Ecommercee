import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar'

export default function GuestLayout() {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    )
}
