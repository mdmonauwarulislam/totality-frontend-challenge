
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const location = useLocation();
  const { billingAddress } = location.state;

  return (
    <div className="max-w-lg mx-auto p-4 py-40">
      <h2 className="text-2xl font-semibold mb-4">Order Confirmation</h2>
      <p>Thank you for your order!</p>
      <h3 className="font-semibold">Billing Address:</h3>
      <p>{billingAddress.fullName}</p>
      <p>{billingAddress.address}</p>
      <p>{billingAddress.city}, {billingAddress.state}, {billingAddress.zipCode}</p>
      <p>{billingAddress.country}</p>
    </div>
  );
};

export default OrderConfirmation;
