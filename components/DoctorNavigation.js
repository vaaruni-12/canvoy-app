import Link from 'next/link';

export default function DoctorNavigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/doctor-dashboard" className="text-xl font-bold text-green-800">
            CanVoy
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link href="/doctor-dashboard" className="text-green-600 font-medium border-b-2 border-green-600 py-2">
              Dashboard
            </Link>
            <Link href="/doctor-dashboard/patients" className="text-gray-600 hover:text-green-600 py-2">
              My Patients
            </Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 py-2">
              Insights
            </Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 py-2">
              Collaborate
            </Link>
          </div>
          
         {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200">
              AI Insights
            </button>
            <Link href="/" className="text-gray-600 hover:text-red-600">
              Logout
            </Link>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">
              DS
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}