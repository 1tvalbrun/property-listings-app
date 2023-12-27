import { useEffect, useState } from 'react';
import { fetchProperties } from '../../services/propertyService/propertyService';
import { Property } from '../../services/propertyService/propertyTypes';

const usePropertyListings = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch property data from the API, update state and store in localStrage for caching
    const fetchAndSetProperties = async () => {
      try {
        const fetchedProperties = await fetchProperties();
        setProperties(fetchedProperties);
        localStorage.setItem('properties', JSON.stringify(fetchedProperties));
      } catch (error) {
        console.error(error);
      }
    };

    // Retrieve stored properties data from localStorage and if saved, use them; otherwise, fetch from API.
    const savedPropertiesJSON = localStorage.getItem('properties');
    const savedProperties = savedPropertiesJSON
      ? JSON.parse(savedPropertiesJSON)
      : null;

    if (savedProperties) {
      setProperties(savedProperties);
    } else {
      fetchAndSetProperties();
    }

    // Retrieve stored favorites data from localStorage and update favorites state with retrieved data
    const savedFavoritesJSON = localStorage.getItem('favorites');
    const savedFavorites = savedFavoritesJSON
      ? JSON.parse(savedFavoritesJSON)
      : [];
    setFavorites(new Set(savedFavorites));
  }, []);

  // Create a new Set from the current favorites for immutability. If the mlsId is already a favorite, remove it; otherwise, add it.
  // Then update favorites state with new Set and store updated Set in localStorage.
  const toggleFavorite = (mlsId: string) => {
    const updatedFavorites = new Set(favorites);
    if (updatedFavorites.has(mlsId)) {
      updatedFavorites.delete(mlsId);
    } else {
      updatedFavorites.add(mlsId);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem(
      'favorites',
      JSON.stringify(Array.from(updatedFavorites)),
    );
  };

  // Set number of properties per page and calculate total number of pages needed.
  // Then get subset of properties for current page.
  const itemsPerPage = 9;
  const pageCount = Math.ceil(properties.length / itemsPerPage);
  const currentProperties = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return {
    currentPage,
    currentProperties,
    favorites,
    pageCount,
    setCurrentPage,
    toggleFavorite,
  };
};

export default usePropertyListings;
