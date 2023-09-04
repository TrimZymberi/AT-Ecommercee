import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import GuestNav from './views/GuestNav'
import Footer from './components/Footer'
import axiosClient from '../../api/axios';
import { useStateContext } from '../../contexts/ContextProvider';
import GuestSkeleton from '../Unix/core/GUELayouts_skeleton';

export default function GuestLayout() {
    const { setCurrentUser, userToken } = useStateContext();
    const [validatingUser, setValidatingUser] = useState(true);
    const navigate = useNavigate();
    const containerStyles = {
        background: 'rgb(240,249,255)',
        backgroundImage: 'linear-gradient(90deg, rgba(240,249,255,1) 0%, rgba(198,232,255,1) 35%, rgba(70,181,255,1) 100%)',
      };

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
        <div style={containerStyles}>
            <GuestNav />
            <div className="h-24"></div>
            <Outlet />
            <Footer />
        </div>
    )
}
