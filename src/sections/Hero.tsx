import { Sparkles, Star, ChevronDown, Zap, FlaskConical } from 'lucide-react';
import { SLOGAN } from '@/data/products';
import { StoryPage } from './StoryPage';

export function Hero() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        
        {/* Logo circular con borde animado - Clickeable */}
        <button 
          onClick={scrollToTop}
          className="mb-6 relative inline-block group cursor-pointer"
        >
          {/* Anillos decorativos giratorios */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute -inset-4 border-2 border-dashed border-amber-500/30 rounded-full" />
          </div>
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="absolute -inset-8 border border-dotted border-blue-500/20 rounded-full" />
          </div>
          
          {/* Logo circular */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-amber-500 shadow-xl shadow-amber-500/20 animate-float group-hover:shadow-amber-500/40 transition-shadow">
            <img
              src="/logo.png"
              alt="Carlyfit Lab Logo"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Estrellas decorativas alrededor */}
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
          <Star className="absolute -bottom-2 -left-2 w-5 h-5 text-amber-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Zap className="absolute top-1/2 -right-6 w-5 h-5 text-orange-400 animate-pulse" style={{ animationDelay: '1s' }} />
        </button>

        {/* Slogan */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
            <FlaskConical className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 font-medium tracking-wide">{SLOGAN}</span>
            <FlaskConical className="w-4 h-4 text-amber-400" />
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8">
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Carlyfit Lab
          </span>
          <span className="inline-block ml-2 animate-wiggle">🚀</span>
        </h1>

        {/* Sección de la Historia - Imagen principal + Avatar */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-2xl">📖</span>
            <span className="text-amber-300 font-bold text-lg">La Historia de Carly</span>
            <span className="text-2xl">🌟</span>
          </div>
          
          {/* Layout: Imagen principal + Avatar flotante */}
          <div className="relative max-w-3xl mx-auto">
            {/* Imagen principal que engloba toda la historia */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse" />
              <img
                src="/comic-hero.png"
                alt="Carlyfit Lab - La Odisea Cósmica"
                className="relative w-full rounded-xl border-2 border-amber-500/30 shadow-2xl"
              />
              
              {/* Avatar flotante sin fondo - usando la imagen original */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-28 h-40 sm:w-36 sm:h-52 animate-bounce-slow">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/30 blur-xl rounded-full" />
                  <img
                    src="/avatar-carly-oficial.png"
                    alt="Carly"
                    className="relative w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 mt-10 text-sm sm:text-base max-w-lg mx-auto">
            Carly es una astronauta intrépida que viaja fuera de nuestra galaxia 
            buscando <span className="text-amber-400 font-semibold">ingredientes intergalácticos</span> y 
            <span className="text-pink-400 font-semibold"> secretos cósmicos</span> para mejorar tu salud.
          </p>
        </div>

        {/* CTA - Conoce mi aventura */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <StoryPage />
          
          <a
            href="#productos"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 border border-amber-500/30 group"
          >
            <span className="text-xl group-hover:animate-bounce">🧪</span>
            Ver Fórmulas
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>

        {/* Decoraciones divertidas */}
        <div className="flex justify-center gap-4 mt-8 text-2xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🧪</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>⭐</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🥜</span>
          <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🍎</span>
          <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>💪</span>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-amber-400" />
      </div>
    </section>
  );
}
