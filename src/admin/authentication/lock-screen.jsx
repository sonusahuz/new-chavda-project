import { Link } from 'react-router-dom';
export default function AdminLockScreen() {
  const handleSubmit = () => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-orange-500">🛒</span>
          <span className="text-2xl font-bold">Larkon</span>
        </div>

        {/* Sign In Form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              Lock Screen{' '}
            </h1>
            <p className="text-gray-600">
              Enter your password to access the admin.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </form>

          <div className="text-center text-sm">
            <span className="text-gray-500">Back to </span>
            <Link
              href="/signup"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
