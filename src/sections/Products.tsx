import { ShoppingCart, Plus, Star, FlaskConical } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { products } from '@/data/products';
import { toast } from 'sonner';

const productEmojis: Record<string, string> = {
  'maza-power': '💪',
  'psi-cookie': '🍪',
  'mantequilla-mani': '🥜',
  'apple-flow': '🍎',
  'zen-energy': '🧘',
  'core-cookie': '💪',
  'brownie-cosmico': '🍫'
};

const colorClasses: Record<string, { badge: string; button: string; price: string; band: string }> = {
  blue: {
    badge: 'from-blue-500 to-cyan-500',
    button: 'from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400',
    price: 'from-blue-400 to-cyan-400',
    band: 'bg-blue-500'
  },
  purple: {
    badge: 'from-purple-500 to-pink-500',
    button: 'from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400',
    price: 'from-purple-400 to-pink-400',
    band: 'bg-purple-500'
  },
  amber: {
    badge: 'from-amber-500 to-orange-500',
    button: 'from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400',
    price: 'from-amber-400 to-orange-400',
    band: 'bg-amber-500'
  },
  green: {
    badge: 'from-emerald-500 to-green-500',
    button: 'from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400',
    price: 'from-emerald-400 to-green-400',
    band: 'bg-emerald-500'
  },
  teal: {
    badge: 'from-teal-500 to-emerald-500',
    button: 'from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400',
    price: 'from-teal-400 to-emerald-400',
    band: 'bg-teal-500'
  },
  rose: {
    badge: 'from-rose-500 to-pink-500',
    button: 'from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400',
    price: 'from-rose-400 to-pink-400',
    band: 'bg-rose-500'
  },
  chocolate: {
    badge: 'from-amber-700 to-orange-800',
    button: 'from-amber-700 to-orange-800 hover:from-amber-600 hover:to-orange-700',
    price: 'from-amber-600 to-orange-700',
    band: 'bg-amber-700'
  }
};

export function Products() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    toast.success(`${productEmojis[product.id]} ${product.formula} ${product.name} agregado`, {
      description: `$${product.price.toFixed(2)}`,
      icon: <ShoppingCart className="w-4 h-4" />,
    });
  };

  return (
    <section id="productos" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 text-3xl mb-4">
            <span className="animate-bounce">🧪</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>⚗️</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🔬</span>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-pink-500/20 border border-amber-500/30 mb-4">
            <FlaskConical className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-bold">Laboratorio Cósmico</span>
            <FlaskConical className="w-4 h-4 text-pink-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-400">7 Fórmulas</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada fórmula está cuidadosamente diseñada con ingredientes intergalácticos 🌌
          </p>
        </div>

        {/* Grid de productos - 7 productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const colors = colorClasses[product.color];
            return (
              <div
                key={product.id}
                className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-3xl overflow-hidden border-2 border-white/5 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Fórmula badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${colors.badge} text-white shadow-lg`}>
                    <FlaskConical className="w-3 h-3" />
                    {product.formula}
                  </span>
                </div>

                {/* Badge extra */}
                {product.badge && (
                  <div className="absolute top-3 right-3 z-20">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${colors.badge} text-white shadow-lg`}>
                      <Star className="w-3 h-3" />
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Imagen del producto */}
                <div className="relative h-56 overflow-hidden bg-black">
                  <img
                    src={product.image}
                    alt={`${product.formula}: ${product.name}`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-4"
                  />
                </div>

                {/* Contenido */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Nombre con fórmula */}
                  <div className="mb-3">
                    <span className={`text-xs font-bold uppercase tracking-wider ${colors.band.replace('bg-', 'text-')}`}>
                      {product.formula}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                    {product.description}
                  </p>

                  {/* Precio y botón */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Precio</span>
                      <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colors.price}`}>
                        ${product.price}
                      </span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${colors.button} text-white font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg`}
                    >
                      <Plus className="w-4 h-4" />
                      <span className="hidden sm:inline">Agregar</span>
                    </button>
                  </div>
                </div>

                {/* Efecto hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-pink-500/5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Decoración final */}
        <div className="flex justify-center gap-3 mt-12 text-2xl">
          <span className="animate-pulse">✨</span>
          <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>🌟</span>
          <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>⭐</span>
          <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>✨</span>
        </div>
      </div>
    </section>
  );
}
