import { Instagram, Facebook, MessageCircle, Mail, MapPin, Truck, Heart } from 'lucide-react';
import { SLOGAN, SOCIAL_LINKS } from '@/data/products';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950/90 backdrop-blur-md border-t border-amber-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Avatar Carly grande */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img 
              src="/avatar-carly-final.png" 
              alt="Carly" 
              className="w-24 h-36 sm:w-32 sm:h-48 object-contain animate-bounce-slow"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              <span className="text-lg animate-bounce">⭐</span>
              <span className="text-lg animate-bounce" style={{ animationDelay: '0.2s' }}>⭐</span>
              <span className="text-lg animate-bounce" style={{ animationDelay: '0.4s' }}>⭐</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo.png" 
                alt="Carlyfit Lab" 
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
              />
              <div className="text-left">
                <span className="text-xl font-bold text-white">Carlyfit Lab</span>
                <span className="text-amber-400 text-sm block">{SLOGAN}</span>
              </div>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Nutrición intergaláctica para potenciar tu salud y rendimiento. 
              Ingredientes traídos desde los confines del universo, elaborados con amor en Barca, Jalisco. 🚀
            </p>
            
            {/* Redes sociales con logos oficiales */}
            <div className="flex gap-4 pt-2">
              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                title="Síguenos en Instagram"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Instagram
                </span>
              </a>
              
              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                title="Síguenos en Facebook"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Facebook
                </span>
              </a>
              
              {/* WhatsApp */}
              <a
                href={`https://wa.me/4433580280`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                title="Contáctanos por WhatsApp"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold flex items-center gap-2">
              <span>🚀</span> Enlaces
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#productos" className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2">
                  <span>🧪</span> Nuestras Fórmulas
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-pink-400 transition-colors text-sm flex items-center gap-2">
                  <span>✨</span> Beneficios
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                  <span>❓</span> Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#envios" className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2">
                  <span>🚚</span> Envíos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold flex items-center gap-2">
              <span>📍</span> Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                Barca, Jalisco, México
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Truck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                Envíos a toda la República
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                hola@carlyfitlab.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                443 358 0280
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright divertido */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2 flex-wrap">
            <span>© 2024 Carlyfit Lab.</span>
            <span className="text-amber-400">Hecho con</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
            <span className="text-amber-400">y magia interestelar</span>
            <span>🚀✨🧪</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
