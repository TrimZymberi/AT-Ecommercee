import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomerHome from './views/CustomerHome'

export default function CustomerLayout() {
    return (
        <div>
            <CustomerHome/>
            <Outlet />
        </div>
    )
}
