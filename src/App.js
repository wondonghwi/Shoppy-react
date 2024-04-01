import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './components/context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </div>
  );
}

export default App;
