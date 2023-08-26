import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import CustomerHome from './views/CustomerHome'
import { useStateContext } from '../../contexts/ContextProvider';
import Nav_skeleton from '../Unix/core/CGLayouts_skeleton';
import axiosClient from '../../api/axios';

export default function CustomerLayout() {
    const { setCurrentUser, userToken } = useStateContext();
    const [validatingUser, setValidatingUser] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userToken) {
            navigate('../../');
            return;
        }

        axiosClient
            .get('/me')
            .then(({ data }) => {
                setCurrentUser(data);
                if (data.role === 'manager') {
                    navigate('../../management')
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
        return <Nav_skeleton />;
    }
    
    return (
        <div>
            <CustomerHome/>
            <Outlet />
        </div>
    )
}
