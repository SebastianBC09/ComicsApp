import { Wishlist } from '../../types/wishlist';

export interface WishlistContextProps {
  wishlistItems: Wishlist[];
  isInWishlist: (productId: number) => boolean;
  toggleWishlistItem: (productId: number) => Promise<void>;
  loading: boolean;
  error: string | null;
}
