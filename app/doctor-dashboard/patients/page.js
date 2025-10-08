import DoctorNavigation from '../../../components/DoctorNavigation';

export default function Patients() {
  const patients = [
    { id: 1, name: 'John Doe', condition: 'Breast Cancer', stage: 'Stage 2', status: 'critical' },
    { id: 2, name: 'Sarah Johnson', condition: 'Lung Cancer', stage: 'Stage 1', status: 'stable' },
    { id: 3, name: 'Mike Brown', condition: 'Prostate Cancer', stage: 'Stage 3', status: 'review' },
    { id: 4, name: 'Emma Wilson', condition: 'Colon Cancer', stage: 'Stage 2', status: 'stable' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DoctorNavigation />
      
      <div className="max-w-7xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Patients</h1>
        <p className="text-gray-600 mb-8">Manage and monitor your patients</p>
        
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Patient List</h2>
              <input 
                type="text" 
                placeholder="Search patients..." 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          
          <div className="divide-y">
            {patients.map(patient => (
              <div key={patient.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-800 font-medium">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-lg">{patient.name}</p>
                      <p className="text-gray-600">{patient.condition} • {patient.stage}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      patient.status === 'critical' ? 'bg-red-100 text-red-800' :
                      patient.status === 'stable' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                    </span>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}