import heartFill from '../../assets/icons/heart-fill.svg';
import heartStroke from '../../assets/icons/heart-stroke.svg';

import { PropertyCardProps } from './PropertyCardTypes';

const PropertyCard: React.FC<PropertyCardProps> = ({
  propertyDetails,
  isFavorited,
  onToggleFavorite,
}) => {
  const {
    address: { city, state, streetName, streetNumber },
    property: { area, bathsHalf, bathsFull, bedrooms },
    listDate,
    listPrice,
    mlsId,
    photos,
  } = propertyDetails;

  const halfBathNotation = 0.5;
  const totalBaths = bathsFull + halfBathNotation * bathsHalf;
  const formattedAddress = `${streetNumber} ${streetName}, ${city}, ${state}`;
  const formattedListDate = new Date(listDate).toLocaleDateString();

  return (
    <div className="w-full lg:w-1/3 px-4 lg:px-8 mb-4">
      <div className="rounded overflow-hidden bg-white relative">
        <div className="w-full h-64 md:h-72 overflow-hidden rounded">
          <img
            className="w-full h-full object-cover rounded"
            src={photos[0]}
            alt={`Property at ${formattedAddress}`}
          />
          <button
            onClick={() => onToggleFavorite(mlsId)}
            className="absolute top-2 right-2 h-10 w-10"
            aria-label={
              isFavorited
                ? 'Unfavorite this property'
                : 'Favorite this property'
            }
          >
            <img
              src={isFavorited ? heartFill : heartStroke}
              alt="Favorite"
              className="h-full w-full"
            />
          </button>
        </div>
        <div className="p-4 bg-white">
          <p className="text-gray-700 text-lg">{`${bedrooms} BR | ${totalBaths} Bath | ${area} Sq Ft`}</p>
          <p className="font-bold text-xl mb-2">{`$${listPrice.toLocaleString()}`}</p>
          <p className="text-gray-600 truncate text-sm mb-2">
            {formattedAddress}
          </p>
          <p className="text-gray-500 text-xs">{`Listed: ${formattedListDate}`}</p>
        </div>
      </div>
    </div>
  );
};

PropertyCard.displayName = 'PropertyCard';

export default PropertyCard;
