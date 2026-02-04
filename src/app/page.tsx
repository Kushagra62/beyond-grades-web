"use client";
import { useState } from 'react';
import { Login } from './login/login';
import { CreateAccount } from './create-account/createaccount';

const App = () => {
  const [currentPage, setCurrentPage] = useState<'login' | 'createAccount'>('login');

  const handleNavigateToCreateAccount = () => {
    setCurrentPage('createAccount');
  };

  const handleBackToLogin = () => {
    setCurrentPage('login');
  };

  return (
    <div className="font-sans antialiased text-slate-900">
      {currentPage === 'login' && (
        <Login onNavigate={handleNavigateToCreateAccount} />
      )}
      {currentPage === 'createAccount' && (
        <CreateAccount onBack={handleBackToLogin} />
      )}
    </div>
  );
};

export default App;