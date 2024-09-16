import { Product } from '../../types/product';

export interface WishlistContextProps {
  wishlistItems: Product[];
  isInWishlist: (productId: number) => boolean;
  toggleWishlistItem: (productId: number) => Promise<void>;
  loading: boolean;
  error: string | null;
}
