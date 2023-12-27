import { Outlet, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const getTitle = (path: string) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/property-listings':
        return 'Property Listings';
      default:
        return 'Page Not Found';
    }
  };
  const title = getTitle(location.pathname);
  return (
    <>
      <header className="bg-[#f4f4f4] text-gray-700 py-4 px-4 md:px-8 lg:px-12 mb-6 fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl font-bold">{title}</h1>
      </header>
      <Outlet />
    </>
  );
};

Header.displayName = 'Header';

export default Header;
