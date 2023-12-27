const { render, screen } = require('@testing-library/react');
const PropertyListings = require('./PropertyListings').default;
const usePropertyListings = require('./usePropertyListings').default;

jest.mock('./usePropertyListings', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('PropertyListings', () => {
  const mockPropertyDetails = [
    {
      address: {
        city: 'Test City',
        state: 'TX',
        streetName: 'Main St',
        streetNumber: '123',
      },
      property: { area: 2000, bathsHalf: 1, bathsFull: 2, bedrooms: 3 },
      listDate: '12-27-2023',
      listPrice: 500000,
      mlsId: '1',
      photos: ['http://example.com/photo1.jpg'],
    },
    {
      address: {
        city: 'Sample Town',
        state: 'ST',
        streetName: 'Sample Ave',
        streetNumber: '456',
      },
      property: { area: 1500, bathsHalf: 0, bathsFull: 2, bedrooms: 2 },
      listDate: '12-27-2023',
      listPrice: 350000,
      mlsId: '2',
      photos: ['http://example.com/photo2.jpg'],
    },
  ];

  beforeEach(() => {
    usePropertyListings.mockReturnValue({
      currentPage: 1,
      currentProperties: mockPropertyDetails,
      favorites: new Set(),
      pageCount: 1,
      setCurrentPage: jest.fn(),
      toggleFavorite: jest.fn(),
    });
  });

  test('renders property cards for each property', () => {
    // Why Test This?: To ensure PropertyListings renders property cards based on the data it receives correctly.
    render(<PropertyListings />);

    expect(screen.getByText('123 Main St, Test City, TX')).toBeInTheDocument();
    expect(
      screen.getByText('456 Sample Ave, Sample Town, ST'),
    ).toBeInTheDocument();
    expect(screen.getByText('$500,000')).toBeInTheDocument();
    expect(screen.getByText('$350,000')).toBeInTheDocument();
  });
});
