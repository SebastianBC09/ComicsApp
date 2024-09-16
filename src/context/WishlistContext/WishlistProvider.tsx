import React, { useState, useEffect } from 'react';
import { WishlistContext } from './WishlistContext';
import { WishlistContextProps } from './types';
import { Product } from '../../types/product';
import {
  getWishlist,
  addProductToWishlist,
  removeProductFromWishlist
} from '../../services/WishlistService';
import { useUser } from '../UserContext/useUser';
import { Wishlist } from '../../types/wishlist';

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<Wishlist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser();

  const fetchWishlist = async () => {
    if (!user || !user.id) {
      console.warn('El usuario no está autenticado o el ID no está disponible');
      setWishlistItems([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data: Wishlist[] = await getWishlist(user.id);
      setWishlistItems(data);
    } catch (err) {
      setError('Error al obtener la lista de deseos');
      console.error('Error al obtener la wishlist:', err);
    } finally {
      setLoading(false);
    }
  };

  const isInWishlist = (productId: number): boolean => {
  return wishlistItems.some((item) => item.productoId === productId);
};

  const toggleWishlistItem = async (productId: number) => {
    if (!user) {
      setError('Debes iniciar sesión para modificar la lista de deseos');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (isInWishlist(productId)) {
        await removeProductFromWishlist(user.id, productId);
      } else {
        await addProductToWishlist(user.id, productId);
      }
      await fetchWishlist();
    } catch (err) {
      setError('Error al modificar la lista de deseos');
      console.error('Error al modificar la wishlist:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [user]);

  const contextValue: WishlistContextProps = {
    wishlistItems,
    isInWishlist: (productId: number) => wishlistItems.some((item) => item.productoId === productId),
    toggleWishlistItem: async (productId: number) => {
      if (!user || !user.id) {
        setError('Debes iniciar sesión para modificar la lista de deseos');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        if (isInWishlist(productId)) {
          await removeProductFromWishlist(user.id, productId);
        } else {
          await addProductToWishlist(user.id, productId);
        }
        await fetchWishlist();
      } catch (err) {
        setError('Error al modificar la lista de deseos');
        console.error('Error al modificar la wishlist:', err);
      } finally {
        setLoading(false);
      }
    },
    loading,
    error,
  };

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};
