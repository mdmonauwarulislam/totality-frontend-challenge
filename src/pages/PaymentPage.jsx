
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { billingAddress } = location.state; 

  const handleConfirmOrder = () => {
    // Logic to confirm the order can be added here
    navigate('/confirmation', { state: { billingAddress } });
  };

  return (
    <div className="max-w-lg mx-auto p-4 py-40">
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Billing Address:</h3>
        <p>{billingAddress.fullName}</p>
        <p>{billingAddress.address}</p>
        <p>{billingAddress.city}, {billingAddress.state}, {billingAddress.zipCode}</p>
        <p>{billingAddress.country}</p>
      </div>
      <button
        onClick={handleConfirmOrder}
        className="bg-green-600 text-white px-4 py-2 rounded hover:opacity-80"
      >
        Confirm Order
      </button>
    </div>
  );
};

export default PaymentPage;
