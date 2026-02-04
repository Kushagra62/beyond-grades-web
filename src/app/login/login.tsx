import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { authService } from '../auth/auth-service';

interface LoginProps {
  onNavigate: () => void; 
}

export const Login: React.FC<LoginProps> = ({ onNavigate }) => {

  const handleLogin = async (provider: 'google' | 'microsoft') => {
    try {
      let user;
      if (provider === 'google') {
        user = await authService.loginWithGoogle();
      } else {
        user = await authService.loginWithMicrosoft();
      }

      if (user) {
        console.log("Firebase User:", user);
        
        const existingProfile = await authService.syncUser();
        
        if (existingProfile && existingProfile.ok) {
           console.log("User found, redirecting...");
             toast.success("Login successful! Redirecting to dashboard...");
        } else {
           console.log("New user, navigating to registration...");
           onNavigate();
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#C8E6C9]/30 flex flex-col items-center justify-center p-4 font-sans text-slate-800">
      <div className="flex flex-col items-center mb-10">
        
        <div className="relative mb-4">
            <img 
              src="/logo.jpeg"
              alt="Beyond Grades Logo" 
              className="w-20 h-20 object-contain drop-shadow-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
        </div>
        
        <h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Beyond Grades</h1>
        <p className="text-slate-500 text-sm font-medium">Let's continue your Journey</p>
      </div>

      <div className="w-full max-w-md space-y-4">
        <button 
          onClick={() => handleLogin('microsoft')}
          className="w-full bg-white hover:bg-gray-50 text-slate-700 font-medium py-4 px-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
        >
          {/* Microsoft Logo Placeholder */}
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
            <div className="bg-[#f25022]"></div>
            <div className="bg-[#7fba00]"></div>
            <div className="bg-[#00a4ef]"></div>
            <div className="bg-[#ffb900]"></div>
          </div>
          Continue With Microsoft
        </button>

        <button 
          onClick={() => handleLogin('google')}
          className="w-full bg-white hover:bg-gray-50 text-slate-700 font-medium py-4 px-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
        >
          {/* Google Logo Placeholder - Simple SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue With Google
        </button>
      </div>
    </div>
  );
};