import Header from './Header';
import Home from '../pages/Home';
import PropertyListings from '../pages/PropertyListings/PropertyListings';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="property-listings" element={<PropertyListings />} />
      </Route>
    </Routes>
  );
};

export default App;
