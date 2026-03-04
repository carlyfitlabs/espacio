import { useState } from 'react';
import { ChevronRight, ChevronLeft, BookOpen, Sparkles, ArrowLeft } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const comicPages = [
  {
    id: 1,
    title: 'CAPÍTULO 1: LA MISIÓN',
    image: '/comic-capitulo1.png',
    quote: 'Decidí ir al espacio en busca de un ingrediente que ayudara al cuerpo y alma a sentirse bien.',
    description: 'Carly, científica deportista apasionada, emprende un viaje al espacio buscando ingredientes que transformen el cuerpo y eleven el espíritu.'
  },
  {
    id: 2,
    title: 'CAPÍTULO 2: EL ACCIDENTE',
    image: '/comic-capitulo2.png',
    quote: 'PERO ALGO SALIÓ MAL...',
    description: 'Una explosión inesperada desintegra su nave. Pero entre nebulosas de cacao y asteroides de dátil, Carly descubre que los ingredientes que buscaba la rodeaban.'
  },
  {
    id: 3,
    title: 'CAPÍTULO 3: EL LABORATORIO',
    image: '/comic-capitulo3.png',
    quote: 'En medio del vacío, construí mi propio laboratorio. Ahí, cada molécula tenía una emoción, y cada fórmula un propósito.',
    description: 'Sin nave pero con determinación, Carly construye el primer laboratorio de nutrición funcional en el espacio.'
  },
  {
    id: 4,
    title: 'CAPÍTULO 4: LAS PRIMERAS FÓRMULAS',
    image: '/comic-capitulo4.png',
    quote: 'De esa energía nacieron tres creaciones: Mazapower, PSI-COOKIE y Apple Flow.',
    description: 'Del caos cósmico nacen las primeras fórmulas — experiencias nutricionales creadas con precisión científica y amor interestelar.'
  },
  {
    id: 5,
    title: 'CAPÍTULO 5: LA FÓRMULA DE LA ENERGÍA',
    image: '/comic-capitulo5.png',
    quote: 'La primera chispa fue Mazapower. Un impulso natural nacido de las nueces, dátiles y maca negra.',
    description: 'Mazapower fue la primera creación: un pre-entreno natural que desafía todo lo que conocíamos sobre energía limpia.'
  },
  {
    id: 6,
    title: 'CAPÍTULO 6: LA FÓRMULA DEL ENFOQUE',
    image: '/comic-capitulo6.png',
    quote: 'Después vino la PSI-COOKIE. La mezcla perfecta de hongos adaptógenos, calma y claridad.',
    description: 'Cuando el caos mental amenaza, PSI-COOKIE llega como un oasis de claridad con hongos milenarios.'
  },
  {
    id: 7,
    title: 'CAPÍTULO 7: LA FÓRMULA DEL EQUILIBRIO',
    image: '/comic-capitulo7.png',
    quote: 'Finalmente nació Apple Flow. Una combinación dorada de manzana y golden milk.',
    description: 'Apple Flow representa la armonía perfecta entre sabor y funcionalidad ayurvédica.'
  },
  {
    id: 8,
    title: 'CAPÍTULO FINAL: EL REGRESO',
    image: '/comic-capitulofinal.png',
    quote: 'CarlyFit Lab apenas comienza...',
    description: 'Carly regresa a la Tierra con siete fórmulas cósmicas. El universo del bienestar está en constante expansión.'
  }
];

export function StoryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % comicPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + comicPages.length) % comicPages.length);
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentPage(0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setIsOpen(true); }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30 group"
        >
          <Sparkles className="w-5 h-5 group-hover:animate-bounce" />
          Conoce mi aventura
          <Sparkles className="w-5 h-5" />
        </a>
      </DialogTrigger>
      
      <DialogContent className="max-w-6xl w-full h-[90vh] bg-slate-950/98 backdrop-blur-xl border-amber-500/30 p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900/80 border-b border-white/10 p-4">
          <div className="flex items-center justify-between gap-4">
            {/* Botón Regresar - Más prominente */}
            <button
              onClick={handleClose}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-full transition-all border border-white/10 hover:border-amber-500/50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Regresar</span>
            </button>
            
            <DialogTitle className="flex items-center gap-2 text-white text-lg sm:text-xl">
              <BookOpen className="w-5 h-5 text-amber-400" />
              La Odisea Cósmica
            </DialogTitle>
            
            {/* Indicador de página */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full">
              <span className="text-amber-400 font-bold text-sm">{currentPage + 1}</span>
              <span className="text-gray-500 text-sm">/</span>
              <span className="text-gray-500 text-sm">{comicPages.length}</span>
            </div>
          </div>
        </div>

        {/* Content - Solo Cómic */}
        <div className="h-[calc(90vh-80px)] overflow-y-auto">
          <div className="p-4 sm:p-6">
            {/* Navigation top */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <button
                onClick={prevPage}
                className="flex items-center gap-1 sm:gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Anterior</span>
              </button>
              
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">{currentPage + 1}</span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-500">{comicPages.length}</span>
              </div>
              
              <button
                onClick={nextPage}
                className="flex items-center gap-1 sm:gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors text-sm"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Current page */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  {comicPages[currentPage].title}
                </h3>
              </div>

              {/* Comic image */}
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl" />
                <img
                  src={comicPages[currentPage].image}
                  alt={comicPages[currentPage].title}
                  className="relative w-full rounded-xl border-2 border-amber-500/30 shadow-2xl"
                />
              </div>

              {/* Quote and description */}
              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-white/5">
                <p className="text-base sm:text-lg text-amber-300 font-medium mb-2 sm:mb-3 italic text-center">
                  "{comicPages[currentPage].quote}"
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center">
                  {comicPages[currentPage].description}
                </p>
              </div>
            </div>

            {/* Page indicators */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {comicPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentPage
                      ? 'bg-amber-500 w-6 sm:w-8'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnail navigation */}
            <div className="mt-6 flex justify-center gap-2 overflow-x-auto pb-4">
              {comicPages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`flex-shrink-0 w-16 h-12 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentPage
                      ? 'border-amber-500 ring-2 ring-amber-500/30'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={page.image}
                    alt={page.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
