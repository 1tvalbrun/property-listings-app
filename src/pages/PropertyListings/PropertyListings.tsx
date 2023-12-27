import Pagination from '../../components/Pagination';
import PropertyCard from '../../components/PropertyCard';
import usePropertyListings from './usePropertyListings';

const PropertyListings = () => {
  const {
    currentPage,
    currentProperties,
    favorites,
    pageCount,
    setCurrentPage,
    toggleFavorite,
  } = usePropertyListings();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-wrap justify-start px-4 md:px-6 pt-24">
        {currentProperties.map((property) => (
          <PropertyCard
            key={property.mlsId}
            propertyDetails={property}
            isFavorited={favorites.has(property.mlsId)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </main>
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

PropertyListings.displayName = 'PropertyListings';

export default PropertyListings;
