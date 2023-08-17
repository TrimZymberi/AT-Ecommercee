import { Navigate, createBrowserRouter } from "react-router-dom";
import GuestHome from "./layouts/Guest/views/GuestHome";
import CustomerLayout from "./layouts/Customer/CustomerLayout";
import GuestLayout from "./layouts/Guest/GuestLayout";
import EmployeeLayout from "./layouts/Employee/EmployeeLayout";
import ManagerLayout from "./layouts/Manager/ManagerLayout";
import CustomerHome from "./layouts/Customer/views/CustomerHome";
import Dashboard from "./layouts/Manager/views/Dashboard";
import EmployeeHome from "./layouts/Employee/views/EmployeeHome";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='home' />,
            },
            {
                path: 'home',
                element: <GuestHome />,
            }
        ]
    },
    {
        path: '/app',
        element: <CustomerLayout />,
        children: [
                {
                    path: '/app',
                    element: <Navigate to='home' />,
                },
                {
                    path: 'home',
                    element: <CustomerHome />
                }
        ]
    },
    {
        path: '/workspace',
        element: <EmployeeLayout />,
        children: [
                {
                    path: '/workspace',
                    element: <Navigate to='home' />,
                },
                {
                    path: 'home',
                    element: <EmployeeHome />
                }
        ]
    },
    {
        path: '/management',
        element: <ManagerLayout />,
        children: [
            {
                path: '/management',
                element: <Navigate to='dashboard' />,
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
        ]
    }
])

export default router