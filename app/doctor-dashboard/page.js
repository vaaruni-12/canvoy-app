import DoctorNavigation from '../../components/DoctorNavigation';

export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DoctorNavigation />
      
      <div className="max-w-7xl mx-auto py-6 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Good morning, Dr. Smith!</h1>
          <p className="text-gray-600">Here&apos;s your overview for today.</p> {/* Fixed apostrophe */}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Patients Today</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-500">+2 from yesterday</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Follow-ups Due</h3>
            <p className="text-3xl font-bold text-green-600">4</p>
            <p className="text-sm text-gray-500">Need your attention</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">AI Risk Alerts</h3>
            <p className="text-3xl font-bold text-red-600">3</p>
            <p className="text-sm text-gray-500">Patients needing review</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Messages</h3>
            <p className="text-3xl font-bold text-purple-600">7</p>
            <p className="text-sm text-gray-500">Waiting for response</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Patients */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Patients</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-800 font-medium">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-600">Breast Cancer • Stage 2</p>
                  </div>
                </div>
                <span className="text-sm text-red-600 font-medium">Alert</span>
              </div>
              
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-800 font-medium">SJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Lung Cancer • Stage 1</p>
                  </div>
                </div>
                <span className="text-sm text-green-600 font-medium">Stable</span>
              </div>
              
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-800 font-medium">MB</span>
                  </div>
                  <div>
                    <p className="font-medium">Mike Brown</p>
                    <p className="text-sm text-gray-600">Prostate Cancer • Stage 3</p>
                  </div>
                </div>
                <span className="text-sm text-yellow-600 font-medium">Review</span>
              </div>
            </div>
          </div>

          {/* Today&apos;s Schedule */} {/* Fixed apostrophe */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Today&apos;s Schedule</h2> {/* Fixed apostrophe */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-12 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Chemotherapy Session</p>
                  <p className="text-sm text-gray-600">John Doe • 9:00 AM - 10:30 AM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-12 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Follow-up Consultation</p>
                  <p className="text-sm text-gray-600">Sarah Johnson • 11:00 AM - 11:30 AM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-3 bg-red-50 rounded-lg">
                <div className="w-2 h-12 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Emergency Review</p>
                  <p className="text-sm text-gray-600">Mike Brown • 2:00 PM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}