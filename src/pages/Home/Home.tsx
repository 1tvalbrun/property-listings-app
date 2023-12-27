import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToPropertyListings = () => {
    navigate('/property-listings');
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Our Real Estate Platform
      </h1>
      <p className="text-lg mb-8 px-4 text-center">
        Explore a wide range of properties. Discover your dream home with us.
      </p>
      <button
        aria-label="Browse Property Listings"
        onClick={navigateToPropertyListings}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Browse Property Listings
      </button>
    </main>
  );
};

Home.displayName = 'Home';

export default Home;
