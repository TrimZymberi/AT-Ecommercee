import React from 'react'
import { Outlet } from 'react-router-dom'
import GuestNav from './views/GuestNav'

export default function GuestLayout() {
    return (
        <div>
            <GuestNav />
            <Outlet />
        </div>
    )
}
