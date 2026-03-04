import { CartProvider } from '@/hooks/useCart';
import { GalaxyBackground } from '@/components/GalaxyBackground';
import { Hero } from '@/sections/Hero';
import { Products } from '@/sections/Products';
import { ProductBenefits } from '@/sections/ProductBenefits';
import { ProductFAQ } from '@/sections/ProductFAQ';
import { Shipping } from '@/sections/Shipping';
import { CartDrawer } from '@/sections/CartDrawer';
import { Footer } from '@/sections/Footer';
import { Toaster } from '@/components/ui/sonner';
import { SLOGAN } from '@/data/products';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen relative">
        {/* Fondo de estrellas */}
        <GalaxyBackground />
        
        {/* Navegación */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between px-4 sm:px-6 py-2 rounded-full bg-slate-900/90 backdrop-blur-md border border-amber-500/20 shadow-lg">
              {/* Logo - Clickeable para ir al inicio */}
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="Carlyfit Lab" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-amber-500"
                  />
                </div>
                <div className="hidden sm:block text-left">
                  <span className="text-white font-bold text-sm">Carlyfit Lab</span>
                  <span className="text-amber-400 text-xs block">{SLOGAN}</span>
                </div>
              </button>
              
              {/* Links */}
              <div className="flex items-center gap-2 sm:gap-6">
                <a
                  href="#productos"
                  className="text-xs sm:text-sm text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span className="hidden sm:inline">🧪</span>
                  Fórmulas
                </a>
                <a
                  href="#beneficios"
                  className="text-xs sm:text-sm text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-1"
                >
                  <span className="hidden sm:inline">✨</span>
                  Beneficios
                </a>
                <a
                  href="#faq"
                  className="text-xs sm:text-sm text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span className="hidden sm:inline">❓</span>
                  FAQ
                </a>
                <a
                  href="#envios"
                  className="text-xs sm:text-sm text-gray-300 hover:text-green-400 transition-colors flex items-center gap-1"
                >
                  <span className="hidden sm:inline">🚚</span>
                  Envíos
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Contenido principal */}
        <main className="relative z-10">
          <Hero />
          <Products />
          <ProductBenefits />
          <ProductFAQ />
          <Shipping />
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
        
        {/* Carrito flotante - Cohete */}
        <CartDrawer />
        
        {/* Toast notifications */}
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#1e293b',
              color: '#fff',
              border: '1px solid rgba(245, 158, 11, 0.3)',
            },
          }}
        />
      </div>
    </CartProvider>
  );
}

export default App;
