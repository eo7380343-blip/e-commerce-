import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const cartProducts = cartItems.map(item => {
    const product = products.find(p => String(p.id) === item.productId);
    return product ? { ...product, quantity: item.quantity } : null;
  }).filter(Boolean);

  const subtotal = cartProducts.reduce((sum, item) => {
    if (!item) return sum;
    const price = parseFloat(item.newPrice.replace(/[^0-9.]/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold" style={{ fontFamily: 'Lato, sans-serif' }}>
              Shopping Cart ({cartItems.length})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cartProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p className="text-lg mb-2">Your cart is empty</p>
                <p className="text-sm">Add items to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartProducts.map((item) => {
                  if (!item) return null;
                  return (
                    <div key={item.id} className="flex gap-4 border-b pb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-28 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium mb-1 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-sm font-bold mb-2">{item.newPrice}</p>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(String(item.id), item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(String(item.id), item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Plus size={16} />
                          </button>
                          <button
                            onClick={() => removeFromCart(String(item.id))}
                            className="ml-auto p-1 hover:bg-red-50 text-red-600 rounded"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {cartProducts.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Subtotal:</span>
                <span>SAR {subtotal.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-black text-white py-3 font-medium hover:bg-gray-900 transition-colors"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
