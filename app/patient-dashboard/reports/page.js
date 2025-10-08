'use client';

import PatientNavigation from '../../../components/PatientNavigation';
import { useState } from 'react';

export default function Reports() {
  const [reports, setReports] = useState([
    { id: 1, name: 'Blood Test Results.pdf', date: '2024-12-10', type: 'Lab Report' },
    { id: 2, name: 'CT Scan Report.pdf', date: '2024-12-05', type: 'Scan' },
  ]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newReport = {
        id: reports.length + 1,
        name: file.name,
        date: new Date().toISOString().split('T')[0],
        type: 'Uploaded'
      };
      setReports([...reports, newReport]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientNavigation />
      
      <div className="max-w-4xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Medical Reports</h1>
        <p className="text-gray-600 mb-8">Upload and manage your medical documents</p>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Upload New Report</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input 
              type="file" 
              onChange={handleFileUpload}
              className="hidden" 
              id="file-upload"
            />
            <label 
              htmlFor="file-upload"
              className="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-block"
            >
              Choose File to Upload
            </label>
            <p className="text-gray-500 mt-2">PDF, JPG, PNG files accepted</p>
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Your Reports</h2>
          </div>
          
          <div className="divide-y">
            {reports.map(report => (
              <div key={report.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-bold">PDF</span>
                  </div>
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <p className="text-sm text-gray-600">
                      {report.type} • Uploaded on {report.date}
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View
                  </button>
                  <button className="text-green-600 hover:text-green-800 font-medium">
                    Share with Doctor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}