import { Link } from 'react-router-dom';
import { useAdminAuthStore } from '../adminStore/adminAuthStore';
import { useState } from 'react';
import cookie from 'js-cookie';

export default function AdminResetPassword() {
  const token = cookie.get('adminToken');
  const [newPassword, setNewPassword] = useState('');

  const { resetPassword, error } = useAdminAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(token, newPassword);
    } catch {
      // Error is already handled in Zustand store
    }
  };

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
              Reset Password{' '}
            </h1>
            <p className="text-gray-600">
              Enter your password address and we&apos;ll send you an password
              with instructions to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
              Reset Password
            </button>
            <div>{error && <p className="text-red-500">{error}</p>}</div>
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
