import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { removeFromCart, decreaseQuantity, increaseQuantity } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  if (cartItems.length === 0) {
    return <h2 className="text-center text-red-600 py-40 mt-20">Your cart is empty.</h2>;
  }

  // Calculate total items and total amount
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto py-40 px-6 ">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Cart Items List */}
        <div className="flex-grow bg-white p-6 rounded-lg shadow-md">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-6 border-b pb-4">
              <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
              <div className="flex-grow px-4">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-600">Price: ₹{item.price} / month</p>
                <div className="flex items-center mt-2">
                  <button 
                    onClick={() => handleDecreaseQuantity(item.id)} 
                    className="bg-gray-300 text-black px-2 py-1 rounded"
                    disabled={item.quantity <= 0}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button 
                    onClick={() => handleIncreaseQuantity(item.id)} 
                    className="bg-gray-300 text-black px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <button 
                  onClick={() => handleRemoveItem(item.id)} 
                  className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-500 transition duration-300"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Total Items:</p>
            <p>{totalItems}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Total Amount:</p>
            <p>₹{totalAmount.toFixed(2)}</p> 
          </div>
          <Link to = "/billing-address">
          <button 
            className="w-full bg-green-600 text-white py-2 mt-4 rounded-lg hover:bg-green-500 transition duration-300"
            onClick={() => console.log('Proceeding to Payment')}
          >
            Proceed to Billing
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
