import { fireEvent, render, screen } from '@testing-library/react';
import PropertyCard from './PropertyCard';

describe('PropertyCard', () => {
  const mockPropertyDetails = {
    address: {
      city: 'Test City',
      state: 'TX',
      streetName: 'Main St',
      streetNumber: '123',
    },
    property: { area: 2000, bathsHalf: 1, bathsFull: 2, bedrooms: 3 },
    listDate: '12-27-2023 ',
    listPrice: 500000,
    mlsId: '1',
    photos: ['http://example.com/photo.jpg'],
  };

  const mockOnToggleFavorite = jest.fn();

  test('displays property information correctly', () => {
    // Why Test This?: To ensure the component displays property details passed via props correctly, which is it's main purpose.
    render(
      <PropertyCard
        propertyDetails={mockPropertyDetails}
        isFavorited={false}
        onToggleFavorite={mockOnToggleFavorite}
      />,
    );

    expect(
      screen.getByText('3 BR | 2.5 Bath | 2000 Sq Ft'),
    ).toBeInTheDocument();
    expect(screen.getByText('$500,000')).toBeInTheDocument();
    expect(screen.getByText('123 Main St, Test City, TX')).toBeInTheDocument();
  });

  test('calls onToggleFavorite when the favorite button is clicked', () => {
    // Why Test This?: To validate that the user can interactive with this part of the component as intended by making sure the favorite button triggers as expected
    render(
      <PropertyCard
        propertyDetails={mockPropertyDetails}
        isFavorited={false}
        onToggleFavorite={mockOnToggleFavorite}
      />,
    );

    const favoriteButton = screen.getByLabelText('Favorite this property');
    fireEvent.click(favoriteButton);
    expect(mockOnToggleFavorite).toHaveBeenCalledWith(
      mockPropertyDetails.mlsId,
    );
  });
});
