import { Truck, MapPin, Package, Clock, CheckCircle } from 'lucide-react';

export function Shipping() {
  return (
    <section id="envios" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Truck className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Envíos Intergalácticos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Cómo <span className="text-blue-400">llegamos</span> a ti?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enviamos nuestros productos cósmicos a donde estés
          </p>
        </div>

        {/* Grid de opciones de envío */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Envío Local - Barca */}
          <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-3xl p-8 border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                Entrega en Barca, Jalisco
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                ¿Vives en Barca? ¡Perfecto! Realizamos entregas personales en la zona. 
                Coordina con nosotros y llevamos tus productos directamente a tu puerta.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Entrega el mismo día (pedidos antes de las 2pm)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Sin costo de envío</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Pago en efectivo o transferencia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Envío Nacional - Paquetería */}
          <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Package className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                Paquetería a Toda la República
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                ¿Estás en otra ciudad? No hay problema. Enviamos a cualquier parte de México 
                a través de paqueterías confiables y seguras.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Cobertura en todo México</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Envío en 3-5 días hábiles</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Rastreo de tu pedido en tiempo real</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="text-white font-semibold">Horario de Atención</p>
              <p className="text-gray-400 text-sm">Lun - Vie: 9am - 6pm</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Truck className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-white font-semibold">Envíos Seguros</p>
              <p className="text-gray-400 text-sm">Empaque protegido</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-white font-semibold">Garantía</p>
              <p className="text-gray-400 text-sm">Satisfacción garantizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
