import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, microsoftProvider } from '../firebase/config';

const API_URL = 'http://localhost:4000';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  //FIREBASE LOGIN
  loginWithGoogle: async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      console.error("Google Login Error:", error);
      throw error;
    }
  },

  loginWithMicrosoft: async () => {
    try {
      const result = await signInWithPopup(auth, microsoftProvider);
      return result.user;
    } catch (error) {
      console.error("Microsoft Login Error:", error);
      throw error;
    }
  },

  syncUser: async () => {
    try {
      const response = await api.post('/auth/sync'); 
      return response.data;
    } catch (error) {
      return null;
    }
  },

  createStudentProfile: async (formData: any, firebaseUser: any) => {
    const yearNumber = parseInt(formData.grade.replace(/\D/g, '')) || 0;

    const payload = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      provider: firebaseUser.providerData[0]?.providerId || 'unknown',
      photoUrl: firebaseUser.photoURL,
      
      dob: formData.dob,        
      phone: formData.phone,
      bio: formData.bio,
      year: yearNumber,              
    };

    const response = await api.post('/students/sync', payload);
    return response.data;
  }
};