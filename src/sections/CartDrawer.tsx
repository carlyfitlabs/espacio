import { useState } from 'react';
import { Plus, Minus, Trash2, MessageCircle, MapPin, Truck, ArrowLeft, Rocket } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { WHATSAPP_NUMBER } from '@/data/products';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const productEmojis: Record<string, string> = {
  'mantequilla-mani': '🥜',
  'psi-cookie': '🍪',
  'maza-power': '💪',
  'apple-flow': '🍎',
  'zen-energy': '🧘',
  'core-cookie': '🍪',
  'brownie-cosmico': '🍫'
};

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [shippingOption, setShippingOption] = useState<'local' | 'nacional'>('local');
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';
    
    let message = '🚀 *Pedido Carlyfit Lab* 🚀\n\n';
    message += '👩‍🔬 *Fórmulas seleccionadas:*\n\n';
    
    items.forEach((item, index) => {
      const emoji = productEmojis[item.id] || '✨';
      message += `${index + 1}. ${emoji} *${item.formula}* - ${item.name}\n`;
      message += `   Cantidad: ${item.quantity}\n`;
      message += `   Precio: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    message += `💰 *Subtotal: $${totalPrice.toFixed(2)}*\n`;
    
    message += '\n📦 *Tipo de Envío:*\n';
    if (shippingOption === 'local') {
      message += '🏠 Entrega en Barca, Jalisco (Gratis)\n';
    } else {
      message += '🚚 Paquetería Nacional ($150)\n';
    }
    
    const totalFinal = shippingOption === 'nacional' ? totalPrice + 150 : totalPrice;
    message += `\n💵 *Total: $${totalFinal.toFixed(2)}*\n\n`;
    message += '¡Gracias por elegir nutrición intergaláctica! 🌟\n';
    message += 'Te contactaremos pronto para confirmar tu pedido.';
    
    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Tu carrito está vacío 🛒');
      return;
    }
    
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    toast.success('¡Redirigiendo a WhatsApp! 💬');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const finalTotal = shippingOption === 'nacional' ? totalPrice + 150 : totalPrice;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {/* Botón de carrito con cohete */}
        <button className="fixed bottom-6 right-6 z-50 group">
          {/* Efecto de propulsión */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-10">
            <div className="w-full h-full bg-gradient-to-t from-orange-500 via-amber-400 to-transparent rounded-full blur-md animate-pulse" />
          </div>
          
          {/* Cohete */}
          <div className="relative w-16 h-16 transition-transform group-hover:scale-110 group-hover:-translate-y-1">
            <div className="text-5xl">🚀</div>
            
            {/* Badge de contador */}
            {totalItems > 0 && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce border-2 border-slate-900">
                {totalItems}
              </div>
            )}
          </div>
          
          {/* Tooltip */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-1 rounded-full border border-amber-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            🚀 Tu Lab: ${totalPrice.toFixed(0)}
          </div>
        </button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-md bg-slate-900/95 backdrop-blur-md border-l border-amber-500/20 flex flex-col">
        {/* Header con botón de regresar */}
        <SheetHeader className="border-b border-white/10 pb-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleClose}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Regresar</span>
            </button>
            
            <SheetTitle className="flex items-center gap-2 text-white">
              <Rocket className="w-5 h-5 text-amber-400" />
              Tu Laboratorio
              <span className="text-lg">🧪</span>
            </SheetTitle>
            
            {/* Espaciador para centrar */}
            <div className="w-20" />
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-10">
              <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-4 animate-pulse">
                <span className="text-5xl">🚀</span>
              </div>
              <p className="text-gray-400 text-lg">Tu laboratorio está vacío</p>
              <p className="text-gray-500 text-sm mt-2">
                Agrega fórmulas intergalácticas 🌟
              </p>
              <button
                onClick={handleClose}
                className="mt-6 px-6 py-2 bg-amber-500 hover:bg-amber-400 text-white font-medium rounded-full transition-colors"
              >
                Ver productos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 rounded-xl bg-slate-800/50 border border-white/5 animate-fade-in"
                >
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={`${item.formula}: ${item.name}`}
                      className="w-full h-full object-contain rounded-lg bg-black/50 p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-amber-400">{item.formula}</span>
                    <h4 className="font-semibold text-white truncate">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 font-medium">
                      ${item.price}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-white font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="self-start p-2 text-gray-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-white/10 pt-4 space-y-4">
            {/* Opciones de envío */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400 mb-2">📦 Selecciona tipo de envío:</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setShippingOption('local')}
                  className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${
                    shippingOption === 'local'
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-white/10 bg-slate-800/50 hover:border-white/20'
                  }`}
                >
                  <MapPin className={`w-4 h-4 ${shippingOption === 'local' ? 'text-amber-400' : 'text-gray-400'}`} />
                  <div className="text-left">
                    <p className={`text-xs font-medium ${shippingOption === 'local' ? 'text-white' : 'text-gray-300'}`}>
                      Barca, Jal.
                    </p>
                    <p className="text-xs text-green-400">Gratis 🎉</p>
                  </div>
                </button>
                <button
                  onClick={() => setShippingOption('nacional')}
                  className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${
                    shippingOption === 'nacional'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-white/10 bg-slate-800/50 hover:border-white/20'
                  }`}
                >
                  <Truck className={`w-4 h-4 ${shippingOption === 'nacional' ? 'text-blue-400' : 'text-gray-400'}`} />
                  <div className="text-left">
                    <p className={`text-xs font-medium ${shippingOption === 'nacional' ? 'text-white' : 'text-gray-300'}`}>
                      Nacional
                    </p>
                    <p className="text-xs text-gray-500">$150</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Resumen */}
            <div className="space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Envío</span>
                <span className={shippingOption === 'local' ? 'text-green-400' : 'text-blue-400'}>
                  {shippingOption === 'local' ? 'Gratis 🎉' : '$150.00'}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-white/10">
                <span>Total</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Botones */}
            <div className="space-y-2">
              <Button
                onClick={handleCheckout}
                className="w-full py-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Comprar por WhatsApp
                <span className="ml-2">💬</span>
              </Button>
              
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    clearCart();
                    toast.success('Laboratorio vaciado 🧹');
                  }}
                  variant="outline"
                  className="flex-1 border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Vaciar
                </Button>
                
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="flex-1 border-amber-500/30 text-amber-400 hover:text-amber-300 hover:bg-amber-500/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Seguir comprando
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
