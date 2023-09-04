import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate} from 'react-router-dom'
import Footer from '../Guest/components/Footer';
import CustomerNav from './views/CustomerNav';
import { useStateContext } from '../../contexts/ContextProvider';
import axiosClient from '../../api/axios';
import CustomerSkeleton from '../Unix/core/CUSLayout_skeleton';

export default function CustomerLayout() {
    const {setCurrentUser, userToken} = useStateContext();
    const [validatingUser, setValidatingUser] = useState(true);
    const navigate = useNavigate();
    const containerStyles = {
      background: 'rgb(240,249,255)',
      backgroundImage: 'linear-gradient(90deg, rgba(240,249,255,1) 0%, rgba(198,232,255,1) 35%, rgba(70,181,255,1) 100%)',
    };

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
          } else if (data.role === 'driver') {
            navigate('../../workdrive')
          } else if (data.role === 'employee') {
            navigate('../../workspace')
          }
          setValidatingUser(false);
        })
        .catch(() => {
          setValidatingUser(false);
        });
    }, [navigate, setCurrentUser, userToken]);
  
    if (validatingUser) {
      return <CustomerSkeleton />;
    }
  
    
    return (
        <div style={containerStyles}>
            <CustomerNav />
            <div className="h-24"></div>
            <Outlet />
            <Footer />
        </div>
    )
}
