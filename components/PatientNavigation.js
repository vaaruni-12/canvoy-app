import Link from 'next/link';

export default function PatientNavigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/patient-dashboard" className="text-xl font-bold text-blue-800">
            <i>CanVoy</i>
           {/* CanVoy */}
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link href="/patient-dashboard" className="text-blue-600 font-medium border-b-2 border-blue-600 py-2">
              Home
            </Link>
            <Link href="patient-dashboard/calendar" className="text-gray-600 hover:text-blue-600 py-2">
              Calendar
            </Link>
            <Link href="/patient-dashboard/reports" className="text-gray-600 hover:text-blue-600 py-2">
              Reports
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 py-2">
              Community
            </Link>
          </div>
          
          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200">
              <Link href="/patient-dashboard/ai-companion">     AI Companion </Link>
            </button>
            <Link href="/" className="text-gray-600 hover:text-red-600">
              Logout
            </Link>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
              S
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
