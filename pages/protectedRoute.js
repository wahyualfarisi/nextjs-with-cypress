import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, setAuthenticated } = useState(true);

  useEffect(() => {
      !checkIsAuthenticated() && router.push('/');
  }, []);

  const checkIsAuthenticated = () => {
    const data = localStorage.getItem("userInfo");
    if(data){
      setAuthenticated(true);
    }
  }

  return children;
};

export default ProtectedRoute;
