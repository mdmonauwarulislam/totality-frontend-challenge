import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // Import the X icon

const Footer = () => {
  return (
    <footer className="bg-lime-500 p-6 text-black w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start mb-6">
        {/* Company Info Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl font-bold">Property Rentals</h2>
          <p className="text-sm mt-2">Your trusted partner in finding the perfect property.</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:justify-evenly md:flex-grow space-y-4 md:space-y-0 md:space-x-12">
          {/* General Links Section */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">General</h3>
            <nav className="flex flex-col space-y-1">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/listings" className="hover:underline">Listings</Link>
              <Link to="/about" className="hover:underline">About Us</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>

          {/* Legal Links Section */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">Legal</h3>
            <nav className="flex flex-col space-y-1">
              <Link to="/terms" className="hover:underline">Terms of Service</Link>
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-2xl hover:text-blue-600 transition duration-200" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <SiX className="text-2xl hover:text-black transition duration-200" /> {/* X icon */}
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-600 transition duration-200" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-700 transition duration-200" />
        </a>
      </div>

      {/* Copyright Notice */}
      <p className="text-center text-sm mt-4">&copy; {new Date().getFullYear()} Property Rentals. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
