export default function Navigation() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
      <div className="text-2xl font-bold text-blue-800">CanVoy</div>
      <div className="space-x-4">
        <button className="text-blue-800 hover:text-blue-600">Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
}