import { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import cookie from 'js-cookie';

const ResetPassword = () => {
  const token = cookie.get('token');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const { resetPassword, loading, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const successMessage = await resetPassword(token, newPassword);
      setMessage(successMessage);
    } catch {
      // Error is already handled in Zustand store
    }
  };

  return (
    <div className="flex items-center justify-center h-[60vh] bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Reset Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              className="w-full p-2 border rounded mt-2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder='Enter your new password'
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded"
            disabled={loading}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message text-center mx-auto mt-5 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
