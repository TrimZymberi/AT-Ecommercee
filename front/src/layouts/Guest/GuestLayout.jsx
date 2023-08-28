import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import GuestNav from './views/GuestNav'
import Footer from './components/Footer'
import axiosClient from '../../api/axios';
import { useStateContext } from '../../contexts/ContextProvider';
import GuestSkeleton from '../Unix/core/CGLayouts_skeleton';

export default function GuestLayout() {
    const { setCurrentUser, userToken } = useStateContext();
    const [validatingUser, setValidatingUser] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axiosClient
            .get('/me')
            .then(({ data }) => {
                setCurrentUser(data);
                if (data.role === 'manager') {
                    navigate('../../management')
                }else if (data.role === 'customer') {
                    navigate('../../app')
                }else if (data.role === 'driver') {
                    navigate('../../workdrive')
                }else if (data.role === 'employee') {
                    navigate('../../workspace')
                }
                setValidatingUser(false);
            })
            .catch(() => {
                setValidatingUser(false);
            });
    }, [navigate, setCurrentUser, userToken]);

    if (validatingUser) {
        return <GuestSkeleton />;
    }
    
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
