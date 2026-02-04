import React, { useState } from 'react';
import { User, Calendar, ChevronDown, ArrowLeft } from 'lucide-react';
import { authService } from '../auth/auth-service';
import { auth } from '../firebase/config';
import toast, { Toaster } from 'react-hot-toast';

interface CreateAccountProps {
  onBack: () => void;
}

export const CreateAccount: React.FC<CreateAccountProps> = ({ onBack }) => {
  const [loading, setLoading] = useState(false);
  
  // Initialize state
  const [formData, setFormData] = useState({
    firstName: '', 
    lastName: '', 
    email: auth.currentUser?.email || '',
    phone: '', 
    dob: '', 
    grade: '', 
    address: '', 
    bio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!auth.currentUser) {
      toast.error("Session expired. Please login again.");
      return;
    }
    
    setLoading(true);
    const toastId = toast.loading('Creating profile...');

    try {
      // Send data to backend
      await authService.createStudentProfile(formData, auth.currentUser);
      
      toast.success("Profile created successfully!", { id: toastId });
    } catch (error) {
      console.error(error);
      toast.error("Failed to create profile. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#D6EAE2] py-12 px-4 flex flex-col items-center justify-center font-sans text-slate-800 overflow-y-auto">
      
      {/* Toast Notification Container */}
      <Toaster position="top-center" />

      {/* Header */}
      <div className="flex flex-col items-center mb-8 shrink-0">
        
        {/* Logo Container with Back Action */}
        <div className="relative mb-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={onBack}>
             {/* ADDED: Logo Placeholder */}
             <img 
              src="/logo.jpeg" 
              alt="Beyond Grades Logo" 
              className="w-20 h-20 object-contain drop-shadow-sm"
              onError={(e) => {
                // Fallback to an icon if image is missing
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {/* Fallback visual if image fails to load, we can show an icon or keep it empty */}
        </div>
        
        <h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Beyond Grades</h1>
        <p className="text-slate-500 text-sm font-medium">Let's continue your Journey</p>
      </div>

      {/* Main Form Card */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-sm p-8 sm:p-10">
        
        {/* Inner Header */}
        <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mb-4 shadow-sm">
                <User className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Student Details</h2>
            <p className="text-slate-400 text-sm mt-1">Fill in your profile information</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-800">First Name</label>
                    <input 
                        name="firstName"
                        onChange={handleChange}
                        required
                        type="text" 
                        placeholder="John" 
                        className="w-full bg-slate-50 border-none rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1cd1a1]/50 outline-none transition-all"
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-800">Last Name</label>
                    <input 
                        name="lastName"
                        onChange={handleChange}
                        required
                        type="text" 
                        placeholder="Doe" 
                        className="w-full bg-slate-50 border-none rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1cd1a1]/50 outline-none transition-all"
                    />
                </div>
            </div>

            {/* Email - Read Only */}
            <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-800">Email</label>
                <input 
                    name="email"
                    value={formData.email}
                    readOnly
                    type="email" 
                    className="w-full bg-slate-100 text-slate-500 border-none rounded-lg px-4 py-3 cursor-not-allowed outline-none"
                />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-800">Phone Number</label>
                <input 
                    name="phone"
                    onChange={handleChange}
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    className="w-full bg-slate-50 border-none rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1cd1a1]/50 outline-none transition-all"
                />
            </div>

            {/* Date of Birth */}
            <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-800">Date of Birth</label>
                <div className="relative">
                    <input 
                        name="dob"
                        onChange={handleChange}
                        type="date" 
                        className="w-full bg-slate-50 border-none rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1cd1a1]/50 outline-none transition-all"
                    />
                    {/* Calendar icon hidden by native date picker in some browsers, but kept for custom styling if needed */}
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
            </div>

            {/* Grade/Year */}
            <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-800">Grade/Year</label>
                <div className="relative">
                    <select 
                        name="grade"
                        onChange={handleChange}
                        defaultValue=""
                        className="w-full bg-slate-50 border-none rounded-lg px-4 py-3 text-slate-700 focus:ring-2 focus:ring-[#1cd1a1]/50 outline-none appearance-none cursor-pointer"
                    >
                        <option value="" disabled>Select grade</option>
                        <option value="9">Grade 9</option>
                        <option value="10">Grade 10</option>
                        <option value="11">Grade 11</option>
                        <option value="12">Grade 12</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
            </div>

             {/* Address */}
             <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-800">Address</label>
                <input 
                    name="address"
                    onChange={handleChange}
                    type="text" 
                    placeholder="123 Main St, City, State" 
                    className="w-full bg-slate-50 border-none rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1cd1a1]/50 outline-none transition-all"
                />
            </div>

            {/* Bio */}
            <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-800">Bio</label>
                <textarea 
                    name="bio"
                    onChange={handleChange}
                    placeholder="Tell us about yourself..." 
                    rows={3}
                    className="w-full bg-slate-50 border-none rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1cd1a1]/50 outline-none transition-all resize-none"
                />
            </div>

            {/* Submit Button */}
            <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#1cd1a1] hover:bg-[#15bd91] text-white font-bold py-3.5 rounded-lg mt-4 transition-colors shadow-md shadow-[#1cd1a1]/20 disabled:opacity-70 flex justify-center items-center"
            >
                {loading ? 'Creating Profile...' : 'Create Profile'}
            </button>
        </form>
      </div>
    </div>
  );
};