import axios from 'axios';
import {
  API_URL,
  ERROR_MESSAGE,
  USERNAME,
  PASSWORD,
} from '../../constants/propertyService';
import { Property } from './propertyTypes';

export const fetchProperties = async (): Promise<Property[]> => {
  try {
    const auth = btoa(`${USERNAME}:${PASSWORD}`);
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error(ERROR_MESSAGE);
    }
  }
};
