import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false); // Close dropdown on logout
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the toggle menu
  };

  return (
    <nav className="bg-lime-500 text-black shadow-lg py-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto w-10/12 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Property Rentals</Link>
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          <Link to="/" className="text-white text-[16px] font-medium hover:underline">Home</Link>
          <Link to="/listings" className="text-white text-[16px] font-medium hover:underline">Listings</Link>
          <Link to="/checkout" className="text-white text-[16px] font-medium hover:underline">Cart</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {user ? (
            <>
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 text-white hover:underline"
                >
                  <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                  <span>{user.name}</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                    <div className="py-2">
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100 w-full text-left"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/login" className="text-white hover:underline bg-primeOrange shadow-md shadow-orange-600 px-3 py-2 rounded-md text-md">Login</Link>
          )}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-lime-500 py-6 px-10 md:hidden shadow-lg z-50">
          <Link to="/" className="block text-white py-2" onClick={handleLinkClick}>Home</Link>
          <Link to="/listings" className="block text-white py-2" onClick={handleLinkClick}>Listings</Link>
          {user ? (
            <>
              <Link to="/profile" className="block text-white py-2" onClick={handleLinkClick}>Profile</Link>
              <Link to="/cart" className="block text-white py-2" onClick={handleLinkClick}>Cart</Link>
              <button onClick={() => { handleLogout(); handleLinkClick(); }} className="block text-white py-2">Logout</button>
            </>
          ) : (
            <Link to="/login" className="block text-white py-2" onClick={handleLinkClick}>Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
