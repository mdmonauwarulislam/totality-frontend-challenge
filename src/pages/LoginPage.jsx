/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://totality-backend.vercel.app/login', { email, password });

      if (response.data.success) {
        // Store token in localStorage
        localStorage.setItem('token', response.data.data.token);

        navigate('/');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-tr from-orange-100 via-yellow-100 to-lime-100 md:h-screen h-fit py-32 flex items-center justify-center">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-10/12 mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login to Your Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{' '}
        
          <Link to = "/signup" className="text-blue-500 hover:underline">Sign Up </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
