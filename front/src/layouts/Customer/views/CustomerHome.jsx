import React from 'react'
import CustomerNav from './CustomerNav'
import { useStateContext } from '../../../contexts/ContextProvider'

export default function CustomerHome() {
  const [currentUser, userToken] = useStateContext();
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
        if (data.role === 'customer') {
          navigate('../../app')
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
    return <ManagerValidationSkeleton />;
  }

  return (
    <div>
    </div>
  )
}
