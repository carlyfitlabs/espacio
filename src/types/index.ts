// Tipos para Carlyfitlab

export interface Product {
  id: string;
  name: string;
  formula: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
  color: 'blue' | 'purple' | 'amber' | 'green' | 'teal' | 'rose' | 'chocolate';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
