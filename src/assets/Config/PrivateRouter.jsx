import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';


const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="  loading loading-bars loading-lg mx-[50%] mt-64"></span>;

  }
  if (user) {
    return children;
  } else {
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }
};

export default PrivateRouter;
