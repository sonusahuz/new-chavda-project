import { Link, useNavigate } from 'react-router-dom';
import { RiGoogleFill } from 'react-icons/ri';
import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import { useAuthStore } from '../store/authStore';

function LoginPage() {
  const { login, loading, error } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    await login(email, password);
    alert('User logged in successfully');
    navigate('/dashboard');
  };
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-gray-50">
      {/* Form Section */}
      {/* Image Section */}
      <div className="flex items-center justify-center">
        <img
          src="./assets/images/signup/login-image.png"
          alt="Login"
          className="w-full max-w-md object-contain lg:max-w-lg"
        />
      </div>
      <div className="flex items-center justify-center px-4 md:px-5 lg:px-10 xl:px-24 py-12">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Welcome Back{' '}
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <p className="text-muted-foreground">
              Today is a new day. It&apos;s your day. You shape it.
            </p>
            <p className="text-sm text-muted-foreground">
              Sign in to start managing your projects.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <br />
              <input
                id="email"
                placeholder="Example@email.com"
                type="email"
                className="border w-full p-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Password
              </label>
              <br />
              <input
                id="password"
                placeholder="Password"
                type="password"
                className="border w-full p-2"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="text-right text-sm">
              <Link
                className="text-blue-500 hover:underline"
                to="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
            <Button
              className="w-full h-11 bg-[#0B3B3C] hover:bg-[#0B3B3C]/90"
              type="submit"
            >
              {loading ? 'Loading...' : 'Login'}
            </Button>
            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <Button
              variant={'secondary'}
              className="flex w-full h-11 items-center justify-center"
            >
              <RiGoogleFill className="mr-2 opacity-60" size={16} />
              Login with Google
            </Button>
            <div className="text-center text-sm">
              Don&apos;t you have an account?{' '}
              <Link className="text-blue-500 hover:underline" to="/signup">
                Sign up
              </Link>
            </div>
          </form>
          <div className="text-center text-sm text-muted-foreground">
            © 2023 ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
