import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useAuthStore } from '../store/authStore';

function ForgotPasswordPage() {
  const { forgotPassword, loading, error } = useAuthStore();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault(); // Prevent page reload
    await forgotPassword(email);
    setMessage('Link send to the email account');
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Enter your email to receive a password reset link.
        </p>

        <form onSubmit={handleForgotPassword} className="space-y-4">
          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="yourname@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Loading and Error/Success Messages */}
          {loading && <p className="text-blue-500 text-sm">Processing...</p>}
          {message && <p className="text-green-500 text-sm">{message}</p>}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
