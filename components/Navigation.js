import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold text-blue-800">
        CanVoy
      </Link>
      <div className="space-x-4">
        <Link href="/login" className="text-blue-800 hover:text-blue-600">
          Login
        </Link>
        <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}