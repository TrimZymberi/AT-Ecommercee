import React from 'react'
import { Outlet } from 'react-router-dom'

export default function EmployeeLayout() {
    return (
        <div>EmployeeLayout
            <Outlet />
        </div>
    )
}
