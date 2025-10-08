import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Your Companion in the Cancer Journey
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connecting patients, doctors, and AI for better cancer care
        </p>
        <div className="space-x-4">
          <Link 
            href="/signup" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            I'm a Patient
          </Link>
          <Link 
            href="/signup" 
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 inline-block"
          >
            I'm a Doctor
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How CanVoy Helps</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-4">👩‍⚕️</div>
            <h3 className="text-xl font-semibold mb-2">For Patients</h3>
            <p className="text-gray-600">
              Track your treatment, connect with your care team, and get AI-powered insights 
              to manage your journey with confidence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-4">🧑‍⚕️</div>
            <h3 className="text-xl font-semibold mb-2">For Doctors</h3>
            <p className="text-gray-600">
              Monitor patients, get AI-assisted insights, and streamline care coordination 
              for better treatment outcomes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Powered</h3>
            <p className="text-gray-600">
              Smart analysis and predictive insights to support better decisions and 
              personalized care plans.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Sign Up</h3>
            <p className="text-sm text-gray-600">Create your account as patient or doctor</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <p className="text-sm text-gray-600">Patients connect with their healthcare providers</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Track & Share</h3>
            <p className="text-sm text-gray-600">Monitor progress and share updates securely</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">4</span>
            </div>
            <h3 className="font-semibold mb-2">Get Insights</h3>
            <p className="text-sm text-gray-600">Receive AI-powered recommendations</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-gray-600 mb-8">
          Join thousands of patients and doctors already using CanVoy
        </p>
        <Link 
          href="/signup" 
          className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 inline-block"
        >
          Get Started Today
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">CanVoy</div>
          <p className="text-gray-400">
          Empowering cancer care through technology and connection
          </p>
          <div className="mt-6 text-sm text-gray-400">
            © 2025 CanVoy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}