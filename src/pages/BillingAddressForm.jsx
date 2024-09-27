// BillingAddressForm.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BillingAddressForm = () => {
  const [billingAddress, setBillingAddress] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress({ ...billingAddress, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the payment page after billing info is saved
    navigate('/payment', { state: { billingAddress } }); // Pass billingAddress to PaymentPage
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 py-40">
      <h2 className="text-2xl font-semibold mb-4">Billing Address</h2>
      {/* Form fields for billing address */}
      {Object.keys(billingAddress).map((key) => (
        <div className="mb-4" key={key}>
          <label className="block mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
            type="text"
            name={key}
            value={billingAddress[key]}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:opacity-80"
      >
        Save and Continue to Payment
      </button>
    </form>
  );
};

export default BillingAddressForm;
