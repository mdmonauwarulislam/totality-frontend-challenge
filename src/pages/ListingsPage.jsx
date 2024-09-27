import { useState } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from '../components/PropertyCard';
import { properties as allProperties } from '../utils/property'; // Import your properties data

const ListingPage = () => {
  // State for filters
  const [filterType, setFilterType] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('all');
  const [amenities, setAmenities] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  // List of Indian locations
  const indianLocations = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
    'Nagpur',
    'Visakhapatnam',
    'Coimbatore',
    'Vadodara',
  ];

  // Function to handle filtering
  const applyFilters = () => {
    const filtered = allProperties.filter((property) => {
      const matchesType = filterType === 'all' || property.type.toLowerCase() === filterType.toLowerCase();
      const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
      const matchesLocation = location === '' || property.location.toLowerCase().includes(location.toLowerCase());
      const matchesBedrooms = bedrooms === 'all' || property.bedrooms === parseInt(bedrooms);
      const matchesAmenities = amenities.every(amenity => property.amenities.includes(amenity));

      return matchesType && matchesPrice && matchesLocation && matchesBedrooms && matchesAmenities;
    });
    setFilteredProperties(filtered);
  };

  // Handle filter change
  const handleTypeChange = (e) => {
    setFilterType(e.target.value);
    applyFilters();
  };

  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    setPriceRange([min, max]);
    applyFilters();
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    applyFilters();
  };

  const handleBedroomsChange = (e) => {
    setBedrooms(e.target.value);
    applyFilters();
  };

  const handleAmenitiesChange = (e) => {
    const amenity = e.target.value;
    setAmenities(prev =>
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
    applyFilters();
  };

  return (
    <div className="bg-gradient-to-tr from-orange-100 via-yellow-100 to-lime-100 py-32">
      {/* Header */}
      <header className="pt-20 flex justify-center mx-auto py-4 w-10/12">
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold">Property Listings</h1>
      </header>

      {/* Filter Section */}
      <section className="container mx-auto py-6 w-10/12">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {/* Property Type Filter */}
          <div>
            <label htmlFor="property-type" className="mr-2">Property Type:</label>
            <select
              id="property-type"
              value={filterType}
              onChange={handleTypeChange}
              className="border p-2 rounded"
            >
              <option value="all">All</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="cottage">Cottage</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label htmlFor="price-range" className="mr-2">Price Range:</label>
            <select
              id="price-range"
              value={priceRange.join('-')}
              onChange={handlePriceChange}
              className="border p-2 rounded"
            >
              <option value="0-1000000">All</option>
              <option value="0-50000">0 - 50,000</option>
              <option value="50000-150000">50,000 - 150,000</option>
              <option value="150000-1000000">150,000 - 1,000,000</option>
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label htmlFor="location" className="mr-2">Location:</label>
            <select
              id="location"
              value={location}
              onChange={handleLocationChange}
              className="border p-2 rounded"
            >
              <option value="">Select Location</option>
              {indianLocations.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Bedrooms Filter */}
          <div>
            <label htmlFor="bedrooms" className="mr-2">Bedrooms:</label>
            <select
              id="bedrooms"
              value={bedrooms}
              onChange={handleBedroomsChange}
              className="border p-2 rounded"
            >
              <option value="all">All</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
            </select>
          </div>

          {/* Amenities Filter */}
          <div>
            <label className="mr-2">Amenities:</label>
            <input type="checkbox" value="WiFi" onChange={handleAmenitiesChange} /> WiFi
            <input type="checkbox" value="Gym" onChange={handleAmenitiesChange} /> Gym
            <input type="checkbox" value="Pool" onChange={handleAmenitiesChange} /> Pool
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {filteredProperties.length === 0 ? (
          <p className="text-center text-xl">No properties found.</p>
        ) : (
          filteredProperties.map((property) => (
            <motion.div key={property.id} className="shadow-lg rounded-lg overflow-hidden">
              <PropertyCard property={property} />
            </motion.div>
          ))
        )}
      </section>
    </div>
  );
};

export default ListingPage;
