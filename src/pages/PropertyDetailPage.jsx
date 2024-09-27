import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBookmark, FaShareAlt } from 'react-icons/fa';
import { properties } from '../utils/property'; 
import { addToCart, decreaseQuantity, increaseQuantity } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const PropertyDetailsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  // Find the property by ID
  const property = properties.find((property) => property.id === parseInt(id));

  // Get cart items from the Redux store, ensuring we handle cases where checkout or items might be undefined
  const cartItems = useSelector((state) => state.checkout?.items || []);
  const cartItem = cartItems.find((item) => item.id === property?.id) || {};
  
  const [currentImage, setCurrentImage] = useState(property?.images[0]); 
  const [isBookmarked, setIsBookmarked] = useState(false); 

  // Handle case where property is not found
  if (!property) {
    return <h2 className="text-center text-red-600">Property not found</h2>;
  }

  // Handlers for cart actions
  const handleAddToCart = () => dispatch(addToCart(property));
  const handleIncreaseQuantity = () => dispatch(increaseQuantity(property.id));
  const handleDecreaseQuantity = () => {
    if (cartItem.quantity > 1) {
      dispatch(decreaseQuantity(property.id));
    }
  };

  // Handler for bookmarking the property
  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const isAlreadyBookmarked = bookmarks.some((p) => p.id === property.id);

    if (!isAlreadyBookmarked) {
      bookmarks.push(property);
      setIsBookmarked(true);
    } else {
      // const updatedBookmarks = bookmarks.filter((p) => p.id !== property.id);
      setIsBookmarked(false);
    }
    
    // Update bookmarks in local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  };

  // Handler for sharing the property
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: property.title,
          text: `Check out this property: ${property.title}`,
          url: window.location.href,
        })
        .then(() => console.log('Share successful'))
        .catch((error) => console.log('Sharing failed', error));
    } else {
      alert('Sharing not supported in this browser.');
    }
  };

  return (
    <div className="bg-gradient-to-tr from-orange-100 via-yellow-100 to-lime-100">
      <div className="max-w-5xl mx-auto px-10 py-32">
        <h1 className="text-6xl font-bold mb-8 text-center">{property.title}</h1>

        <div className="relative mb-6">
          <img
            src={currentImage}
            alt={property.title}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div className="flex space-x-2 absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent rounded-b-lg">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Property image ${index + 1}`}
                className="w-16 h-12 object-cover rounded-md border-2 border-white transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between mb-4">
            <p className="text-lg font-semibold">
              Price: <span className="text-blue-600">₹{property.price} /month</span>
            </p>
            <p className="text-gray-600">Location: {property.location}</p>
          </div>
          <p className="text-gray-800 mb-4">{property.description}</p>

          <h3 className="text-lg font-bold mt-4">Amenities:</h3>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <p className="text-gray-600">{property.details}</p>

          <div className="flex space-x-4 mt-6 items-center text-center">
            <button
              className={`flex items-center ${isBookmarked ? 'bg-red-600' : 'bg-blue-600'} text-white px-4 py-2 rounded shadow hover:opacity-80`}
              onClick={handleBookmark}
            >
              <FaBookmark className="mr-2" /> {isBookmarked ? 'Saved' : 'Save'}
            </button>
            <button
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded shadow hover:opacity-80"
              onClick={handleShare}
            >
              <FaShareAlt className="mr-2" /> Share
            </button>

            <div className="flex items-center justify-between mb-4">
              {cartItem && cartItem.quantity > 0 ? (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
