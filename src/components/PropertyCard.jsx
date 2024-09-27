/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity, decreaseQuantity } from '../features/cartSlice';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBookmark, FaShareAlt } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const [isBookmarked, setIsBookmarked] = useState(false);

  const cartItem = cartItems.find(item => item.id === property.id);

  const handleAddToCart = () => {
    dispatch(addToCart(property));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(property.id));
  };

  const handleDecreaseQuantity = () => {
    if (cartItem && cartItem.quantity > 1) {
      dispatch(decreaseQuantity(property.id));
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    if (!isBookmarked) {
      bookmarks.push(property);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
      const updatedBookmarks = bookmarks.filter((p) => p.id !== property.id);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property: ${property.title}`,
        url: window.location.href + `/property-detail/${property.id}`,
      })
      .then(() => console.log('Share successful'))
      .catch((error) => console.log('Sharing failed', error));
    } else {
      alert('Sharing not supported in this browser.');
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <button 
            onClick={handleBookmark} 
            className={`bg-white bg-opacity-50 rounded-full p-2 shadow ${isBookmarked ? 'text-red-600' : 'text-black'}`}
          >
            <FaBookmark />
          </button>
          <button 
            onClick={handleShare} 
            className="bg-white bg-opacity-50 rounded-full p-2 shadow text-black"
          >
            <FaShareAlt />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-700 mb-2 truncate">{property.description}</p>
        <p className="text-lg font-bold text-blue-500 mb-4">₹{property.price}/month</p>

        <div className="flex items-center justify-between mb-4">
          {cartItem ? (
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleDecreaseQuantity} 
                className="bg-gray-300 text-black px-3 py-1 rounded"
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button 
                onClick={handleIncreaseQuantity} 
                className="bg-gray-300 text-black px-3 py-1 rounded"
              >
                +
              </button>
            </div>
          ) : (
            <button 
              onClick={handleAddToCart} 
              className="bg-customBlue text-white px-4 py-2 rounded hover:bg-primeOrange transition duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>

        <Link to={`/property-detail/${property.id}`} className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 transition duration-300">
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
