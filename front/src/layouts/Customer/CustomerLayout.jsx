import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CustomerLayout() {
    return (
        <div>CustomerLayout
            <Outlet />
        </div>
    )
}
