import { createContext } from 'react';
import { WishlistContextProps } from './types';

export const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);
