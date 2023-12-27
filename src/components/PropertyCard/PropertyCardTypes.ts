import { Property } from '../../services/propertyService/propertyTypes';

export interface PropertyCardProps {
  propertyDetails: Property;
  isFavorited: boolean;
  onToggleFavorite: (mlsId: string) => void;
}
