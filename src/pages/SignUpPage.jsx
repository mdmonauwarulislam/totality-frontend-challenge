import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/user/signup', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="md:h-screen h-fit py-40 my-auto flex items-center justify-center bg-gradient-to-tr from-orange-100 via-yellow-100 to-lime-100">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-10/12 mt-20 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
        </form>
        {message && <p className="text-center mt-4 text-red-500">{message}</p>}
        <p className="text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
