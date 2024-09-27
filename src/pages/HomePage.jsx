import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaHeart, FaUserFriends } from 'react-icons/fa';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';


const HomePage = () => {


  const images = [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=90',
    'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
];


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    
  };

  const properties = [
    {
      id: 1,
      title: 'Cozy Cottage',
      description: 'A beautifully designed space with modern amenities.',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=90',
    },
    {
      id: 2,
      title: 'Modern Apartment',
      description: 'Stylish living in the heart of the city.',
      price: 20000,
      image: 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 3,
      title: 'Luxury Villa',
      description: 'Experience the finest living with stunning views.',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    },
    // Add more properties as needed
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="md:min-h-96 relative md:pt-20 pt-32">
      {/* Background carousel */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="md:h-[90vh]  w-full relative">
            <img
              src={image}
              alt={`Property ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay content */}
      <header className="absolute inset-0 bg-opacity-40 bg-black text-white flex flex-col justify-center text-center py-32 md:py-24 px-4 md:px-10 items-center">
      <motion.h1
        className="lg:text-8xl md:text-6xl text-3xl font-extrabold md:mb-4 mb-2 animate__animated animate__fadeInDown animated-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Discover Your Perfect Rental
      </motion.h1>
      <motion.p
        className="lg:text-2xl md:text-[16px] text-[14px] md:mb-6 mb-2 text-white animated-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Explore unique properties tailored to your lifestyle and preferences.
      </motion.p>

   

      <Link to="/listings">
        <motion.button
          className="bg-gradient-to-tr from-orange-400 via-customYellow to-lime-400 text-white bg-opacity-55 text-xl md:font-medium font-normal md:px-8 px-4 md:py-3 py-2 w-fit rounded-xl shadow-2xl shadow-black transform hover:scale-105 transition duration-300 mt-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Explore Properties
        </motion.button>
      </Link>
    </header>

    </div>

      {/* Featured Properties Section */}
      <section className="container mx-auto py-32 w-10/12">
      <h2 className="text-5xl font-bold text-center mb-8">Featured Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-blue-50 ">
        <div className="container mx-auto text-center w-10/12">
          <h2 className="text-5xl font-bold mb-8">Why Choose Us?</h2>
          <p className="text-lg mb-6">
            Our commitment to quality and service sets us apart.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <FaStar className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Quality Listings</h3>
                <p>All properties are thoroughly vetted for your peace of mind.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <FaHeart className="text-red-500 text-5xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2">User Favorites</h3>
                <p>Save your favorite properties and revisit them easily.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <FaUserFriends className="text-green-500 text-5xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Community Support</h3>
                <p>Join a community of renters and get the best advice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 overflow-hidden">
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320">
        <path
          fill="rgba(255, 255, 255, 0.1)"
          d="M0,256L40,229.3C80,203,160,149,240,133.3C320,117,400,139,480,160C560,181,640,203,720,218.7C800,235,880,245,960,245C1040,245,1120,235,1200,202.7C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <div className="relative container mx-auto text-center z-10 w-10/12">
        <h2 className="text-4xl font-bold mb-4">Ready to find your next home?</h2>
        <p className="mb-6 text-lg">
          Discover a wide range of properties tailored to your needs. Whether you’re looking to buy, rent, or invest, we have the perfect solution for you.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 mb-4">
          <motion.button
            className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 mb-2 md:mb-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore Properties
          </motion.button>

          <motion.button
            className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 mb-2 md:mb-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Book a Viewing
          </motion.button>

          <motion.button
            className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 mb-2 md:mb-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact an Agent
          </motion.button>
        </div>
      </div>
    </section>

     
    </div>
  );
};

export default HomePage;
