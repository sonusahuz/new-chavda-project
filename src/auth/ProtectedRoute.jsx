import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { isLogin, checkLoginStatus } = useAuthStore();

  React.useEffect(() => {
    checkLoginStatus();
  }, []);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
