import { useContext } from 'react';
import { WishlistContext } from './WishlistContext';
import { WishlistContextProps } from './types';

export const useWishlist = (): WishlistContextProps => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist debe ser usado dentro de un WishlistProvider');
  }
  return context;
};
