import React from 'react';
import { useAuthContext } from '../components/context/AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, requiredAdmin }) {
  const { user } = useAuthContext();

  if (!user || (requiredAdmin && !user.isAdmin)) {
    return (
      <Navigate
        to='/'
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;
