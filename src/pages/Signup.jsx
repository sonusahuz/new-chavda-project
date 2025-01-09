import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiGoogleFill } from 'react-icons/ri';
import { Button } from '@material-tailwind/react';
import { useAuthStore } from '../store/authStore';

function SignupPage() {
  const navigate = useNavigate();
  const { register, loading, error } = useAuthStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData.name, formData.email, formData.password);
      alert('User registered successfully');
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen px-4 md:px-5 lg:px-10 xl:px-24">
      {/* Left Column */}
      <div className="relative hidden w-1/2 lg:block">
        <div className="absolute inset-0">
          <img
            src="./assets/images/signup/signupimage.jpg"
            alt="Office background"
            className="h-full w-full object-cover"
            width={700}
            height={800}
          />
        </div>
        <div className="absolute inset-0 bg-black/40">
          <div className="p-8">
            <img
              src="./logo.png"
              alt="Chavda International Logo"
              width={200}
              height={50}
              className="mb-8"
            />
            <div className="relative mt-96 p-6">
              <div className="absolute inset-0 bg-black/40 rounded-lg backdrop-blur-sm z-0"></div>
              <div className="relative z-10">
                <div className="inline-block rounded-lg bg-green-500 px-4 py-2 text-white">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">👍</span>
                    <span>25 years of Procurement and Logistics</span>
                  </div>
                </div>
                <p className="mt-4 text-lg text-white">
                  Chavda International (Pty) Ltd., founded in 1999, embarked on
                  its journey as a dedicated supplier of mining equipment and
                  services, primarily catering to the needs of the African
                  market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex w-full flex-col px-4 lg:w-1/2 lg:px-8 bg-gray-50">
        <div className="ml-auto mt-4">
          <p className="text-sm text-gray-600">
            Have an account?{' '}
            <Link to="/login" className="text-green-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        <div className="mx-auto mt-16 w-full max-w-md">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">
              Welcome to Chavda International
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Getting started is easy
            </p>
          </div>

          <div className="mt-8">
            <Button
              variant={'secondary'}
              className="flex w-full h-11 items-center justify-center"
            >
              <RiGoogleFill className="mr-2 opacity-60" size={16} />
              Login with Google
            </Button>

            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="bg-white text-black w-full p-2 border"
                />
              </div>
              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter Email"
                  className="bg-white text-black w-full p-2 border"
                />
              </div>
              <div className="relative">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  className="bg-white text-black w-full p-2 border"
                />
              </div>
              <div className="relative">
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  className="bg-white text-black w-full p-2 border"
                  placeholder="Confirm Password"
                />
              </div>
              <Button
                className="w-full bg-green-500 hover:bg-green-600 h-11"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>

              <div className="flex items-center flex-col mx-auto">
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
            </form>

            <p className="mt-4 text-center text-xs text-gray-600">
              By continuing you indicate that you read and agreed to the Terms
              of Use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
