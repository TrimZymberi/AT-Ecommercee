import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ManagerLayout() {
    return (
        <div>ManagerLayout
            <Outlet />
        </div>
    )
}
