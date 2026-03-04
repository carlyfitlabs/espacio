import { Zap, Heart, Brain, Leaf, Shield, Award } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Ingredientes de origen natural, sin químicos artificiales',
    emoji: '🌱',
    color: 'text-green-400'
  },
  {
    icon: Zap,
    title: 'Energía Real',
    description: 'Potencia tu día con energía sostenida y saludable',
    emoji: '⚡',
    color: 'text-yellow-400'
  },
  {
    icon: Brain,
    title: 'Enfoque Mental',
    description: 'Mejora tu concentración y claridad cognitiva',
    emoji: '🧠',
    color: 'text-purple-400'
  },
  {
    icon: Heart,
    title: 'Bienestar Total',
    description: 'Cuida tu cuerpo desde adentro hacia afuera',
    emoji: '❤️',
    color: 'text-pink-400'
  },
  {
    icon: Shield,
    title: 'Calidad Garantizada',
    description: 'Cada fórmula es probada y aprobada por Carly',
    emoji: '✅',
    color: 'text-blue-400'
  },
  {
    icon: Award,
    title: 'Hecho en México',
    description: 'Elaborado con amor en Barca, Jalisco',
    emoji: '🇲🇽',
    color: 'text-amber-400'
  }
];

export function Benefits() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 text-3xl mb-4">
            <span className="animate-bounce">✨</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🌟</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            ¿Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-400">Carlyfit Lab</span>?
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nuestras fórmulas están diseñadas para transformar tu bienestar 🚀
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-6 border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Emoji flotante */}
              <div className="absolute top-4 right-4 text-2xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
                {benefit.emoji}
              </div>

              {/* Icono */}
              <div className={`w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>

              {/* Efecto hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#productos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:scale-105 transition-all duration-300"
          >
            <span>🛒</span>
            Probar las Fórmulas
            <span>✨</span>
          </a>
        </div>
      </div>
    </section>
  );
}
