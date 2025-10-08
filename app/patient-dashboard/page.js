import PatientNavigation from '../../components/PatientNavigation';

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PatientNavigation />
      
      <div className="max-w-7xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Sarah!</h1>
        <p className="text-gray-600 mb-8">Here&apos;s your health overview for today.</p> {/* Fixed apostrophe */}
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Next Appointment</h3>
            <p className="text-2xl font-bold text-blue-600">Tomorrow, 2:00 PM</p>
            <p className="text-sm text-gray-500">Dr. Smith - Chemotherapy Session</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Medications Due</h3>
            <p className="text-2xl font-bold text-green-600">2</p>
            <p className="text-sm text-gray-500">Next dose in 3 hours</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Mood Today</h3>
            <p className="text-2xl font-bold text-purple-600">😊 Good</p>
            <p className="text-sm text-gray-500">Keep it up!</p>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div>
                <p className="font-medium">Doctor&apos;s Note Added</p> {/* Fixed apostrophe */}
                <p className="text-sm text-gray-600">Dr. Smith updated your treatment plan</p>
              </div>
              <span className="text-sm text-gray-500 ml-auto">2 hours ago</span>
            </div>
            
            <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-medium">Lab Results Ready</p>
                <p className="text-sm text-gray-600">Blood test results are available</p>
              </div>
              <span className="text-sm text-gray-500 ml-auto">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}