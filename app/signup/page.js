'use client';

import { useRouter } from 'next/navigation';
import Navigation from '../../components/Navigation';

export default function Signup() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Join CanVoy</h1>
        
        <button 
          onClick={() => router.push('/patient-dashboard')}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium mb-4"
        >
          Sign up as Patient
        </button>

        <button 
          onClick={() => router.push('/doctor-dashboard')}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-medium"
        >
          Sign up as Doctor
        </button>
      </div>
    </div>
  );
}