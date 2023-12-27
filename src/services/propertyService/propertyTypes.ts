export interface Property {
  mlsId: string;
  listPrice: number;
  listDate: string;
  photos: string[];
  property: {
    area: number;
    bedrooms: number;
    bathsFull: number;
    bathsHalf: number;
  };
  address: {
    city: string;
    streetName: string;
    streetNumber: string;
    crossStreet?: string;
    state?: string;
  };
}
