import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase, WishlistItem } from '../lib/supabase';
import { useAuth } from './AuthContext';

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  loading: boolean;
  addToWishlist: (productId: string) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
  toggleWishlist: (productId: string) => Promise<void>;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const fetchWishlistItems = async () => {
    if (!user) {
      setWishlistItems([]);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from('wishlist_items')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching wishlist items:', error);
    } else {
      setWishlistItems(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWishlistItems();
  }, [user]);

  const addToWishlist = async (productId: string) => {
    if (!user) {
      alert('Please sign in to add items to wishlist');
      return;
    }

    const { data, error } = await supabase
      .from('wishlist_items')
      .insert({
        user_id: user.id,
        product_id: productId
      })
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        console.log('Item already in wishlist');
      } else {
        console.error('Error adding to wishlist:', error);
        alert('Failed to add item to wishlist');
      }
    } else {
      setWishlistItems([...wishlistItems, data]);
    }
  };

  const removeFromWishlist = async (productId: string) => {
    if (!user) return;

    const { error } = await supabase
      .from('wishlist_items')
      .delete()
      .eq('user_id', user.id)
      .eq('product_id', productId);

    if (error) {
      console.error('Error removing from wishlist:', error);
      alert('Failed to remove item from wishlist');
    } else {
      setWishlistItems(wishlistItems.filter(item => item.product_id !== productId));
    }
  };

  const toggleWishlist = async (productId: string) => {
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
    } else {
      await addToWishlist(productId);
    }
  };

  const isInWishlist = (productId: string): boolean => {
    return wishlistItems.some(item => item.product_id === productId);
  };

  const value = {
    wishlistItems,
    loading,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
