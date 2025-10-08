'use client'; // ADD THIS LINE - Important!

import PatientNavigation from '../../../components/PatientNavigation';
import { useState } from 'react'; // Add useState import

export default function Calendar() {
  const [appointments] = useState([
    { id: 1, title: 'Chemotherapy Session', date: '2024-12-15', time: '2:00 PM', doctor: 'Dr. Smith', type: 'treatment' },
    { id: 2, title: 'Doctor Follow-up', date: '2024-12-20', time: '11:00 AM', doctor: 'Dr. Sharma', type: 'checkup' },
    { id: 3, title: 'Blood Test', date: '2024-12-18', time: '9:00 AM', doctor: 'Lab Technician', type: 'test' },
  ]);

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientNavigation />
      
      <div className="max-w-6xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Treatment Calendar</h1>
        <p className="text-gray-600 mb-8">Track your appointments and medical schedule</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar View */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">December 2024</h2>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-6">
              {/* Week Days Header */}
              {weekDays.map(day => (
                <div key={day} className="text-center font-semibold text-gray-700 py-2 bg-gray-100 rounded">
                  {day}
                </div>
              ))}
              
              {/* Calendar Days */}
              {calendarDays.map(day => {
                const hasAppointment = [15, 18, 20].includes(day);
                const isToday = day === 15;
                
                return (
                  <div 
                    key={day} 
                    className={`p-3 rounded-lg border text-center ${
                      isToday ? 'bg-blue-100 border-blue-500' : 
                      hasAppointment ? 'bg-green-50 border-green-200' : 
                      'border-gray-200'
                    }`}
                  >
                    <div className={`font-medium ${
                      isToday ? 'text-blue-600' : 'text-gray-700'
                    }`}>
                      {day}
                    </div>
                    {hasAppointment && (
                      <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-1"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-gray-600">Today</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-gray-600">Appointment</span>
              </div>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
            
            <div className="space-y-4">
              {appointments.map(appointment => (
                <div 
                  key={appointment.id} 
                  className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{appointment.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      appointment.type === 'treatment' ? 'bg-red-100 text-red-800' :
                      appointment.type === 'checkup' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    📅 {appointment.date} • ⏰ {appointment.time}
                  </p>
                  <p className="text-sm text-gray-600">👨‍⚕️ {appointment.doctor}</p>
                  
                  <div className="flex space-x-2 mt-3">
                    <button className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      Reschedule
                    </button>
                    <button className="text-xs bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add New Appointment */}
            <button className="w-full mt-6 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 font-medium">
              + Add New Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}