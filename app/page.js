import Navigation from '../components/Navigation';
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-blue-800">CanVoy</div>
        <div className="space-x-4">
          <button className="text-blue-800 hover:text-blue-600">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Your Companion in the Cancer Journey
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connecting patients, doctors, and AI for better cancer care
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            I'm a Patient
          </button>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
            I'm a Doctor
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How CanVoy Helps</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-4">👩‍⚕️</div>
            <h3 className="text-xl font-semibold mb-2">For Patients</h3>
            <p className="text-gray-600">Track your treatment, connect with your care team, and get AI-powered insights.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-4">🧑‍⚕️</div>
            <h3 className="text-xl font-semibold mb-2">For Doctors</h3>
            <p className="text-gray-600">Monitor patients, get AI-assisted insights, and streamline care coordination.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Powered</h3>
            <p className="text-gray-600">Smart analysis and predictive insights to support better outcomes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}