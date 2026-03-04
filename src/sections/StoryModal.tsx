import { useState } from 'react';
import { Rocket, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const chapters = [
  {
    id: 1,
    title: 'CAPÍTULO 1: LA MISIÓN',
    image: '/comic-capitulo1.png',
    text: 'Decidí ir al espacio en busca de un ingrediente que ayudara al cuerpo y alma a sentirse bien.',
    description: 'Carly, científica deportiva apasionada, emprende un viaje al espacio buscando ingredientes que transformen el cuerpo y eleven el espíritu.'
  },
  {
    id: 2,
    title: 'CAPÍTULO 2: EL ACCIDENTE',
    image: '/comic-capitulo2.png',
    text: 'PERO ALGO SALIÓ MAL...',
    description: 'Una explosión inesperada desintegra su nave. Pero entre nebulosas de cacao y asteroides de dátil, Carly descubre que los ingredientes que buscaba la rodeaban.'
  },
  {
    id: 3,
    title: 'CAPÍTULO 3: EL LABORATORIO',
    image: '/comic-capitulo3.png',
    text: 'En medio del vacío, construí mi propio laboratorio. Ahí, cada molécula tenía una emoción, y cada fórmula un propósito.',
    description: 'Sin nave pero con determinación, Carly construye el primer laboratorio de nutrición funcional en el espacio.'
  },
  {
    id: 4,
    title: 'CAPÍTULO 4: LAS PRIMERAS FÓRMULAS',
    image: '/comic-capitulo4.png',
    text: 'De esa energía nacieron tres creaciones: Mazapower, PSI-COOKIE y Apple Flow.',
    description: 'Del caos cósmico nacen las primeras fórmulas — experiencias nutricionales creadas con precisión científica y amor interestelar.'
  },
  {
    id: 5,
    title: 'CAPÍTULO 5: LA FÓRMULA DE LA ENERGÍA',
    image: '/comic-capitulo5.png',
    text: 'La primera chispa fue Mazapower. Un impulso natural nacido de las nueces, dátiles y maca negra. Energía limpia, pura y consciente.',
    description: 'Mazapower fue la primera creación: un pre-entreno natural que desafía todo lo que conocíamos sobre energía.'
  },
  {
    id: 6,
    title: 'CAPÍTULO 6: LA FÓRMULA DEL ENFOQUE',
    image: '/comic-capitulo6.png',
    text: 'Después vino la PSI-COOKIE. La mezcla perfecta de hongos adaptógenos, calma y claridad.',
    description: 'Cuando el caos mental amenaza, PSI-COOKIE llega como un oasis de claridad con hongos milenarios.'
  },
  {
    id: 7,
    title: 'CAPÍTULO 7: LA FÓRMULA DEL EQUILIBRIO',
    image: '/comic-capitulo7.png',
    text: 'Finalmente nació Apple Flow. Una combinación dorada de manzana y golden milk.',
    description: 'Apple Flow representa la armonía perfecta entre sabor y funcionalidad.'
  },
  {
    id: 8,
    title: 'CAPÍTULO FINAL: EL REGRESO',
    image: '/comic-capitulofinal.png',
    text: 'Con las fórmulas completas, emprendí el viaje de regreso. CarlyFit Lab apenas comienza...',
    description: 'Carly regresa a la Tierra con siete fórmulas cósmicas. El universo del bienestar está en constante expansión.'
  }
];

export function StoryModal() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextChapter = () => {
    setCurrentChapter((prev) => (prev + 1) % chapters.length);
  };

  const prevChapter = () => {
    setCurrentChapter((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  const chapter = chapters[currentChapter];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="fixed bottom-24 right-6 z-40 group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-all duration-300 animate-pulse" />
          <div className="relative flex items-center gap-2 px-4 py-3 bg-slate-900 border-2 border-amber-500 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
            <Rocket className="w-5 h-5 text-amber-400" />
            <span className="text-white font-bold text-sm hidden sm:inline">Conoce mi aventura</span>
            <span className="text-lg">🚀</span>
          </div>
        </button>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl w-full bg-slate-900/95 backdrop-blur-xl border-amber-500/30 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="border-b border-white/10 pb-4">
          <DialogTitle className="flex items-center gap-3 text-white text-2xl">
            <Rocket className="w-6 h-6 text-amber-400" />
            La Odisea Cósmica de Carly
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          {/* Navegación de capítulos */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevChapter}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Anterior</span>
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">{currentChapter + 1}</span>
              <span className="text-gray-500">/</span>
              <span className="text-gray-500">{chapters.length}</span>
            </div>
            
            <button
              onClick={nextChapter}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Contenido del capítulo */}
          <div className="relative">
            {/* Título del capítulo */}
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                {chapter.title}
              </h3>
            </div>

            {/* Imagen del cómic */}
            <div className="relative mb-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl" />
              <img
                src={chapter.image}
                alt={chapter.title}
                className="relative w-full rounded-xl border-2 border-amber-500/30 shadow-2xl"
              />
            </div>

            {/* Texto del capítulo */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-white/5">
              <p className="text-lg text-amber-300 font-medium mb-3 italic">
                "{chapter.text}"
              </p>
              <p className="text-gray-400 leading-relaxed">
                {chapter.description}
              </p>
            </div>
          </div>

          {/* Indicadores de capítulo */}
          <div className="flex justify-center gap-2 mt-6">
            {chapters.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentChapter(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentChapter
                    ? 'bg-amber-500 w-6'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Botón de video */}
          <div className="mt-8 text-center">
            <a
              href="https://youtube.com/watch?v=carlyfit-story"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-all duration-300"
            >
              <span className="text-xl">▶️</span>
              Ver video de la aventura
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
