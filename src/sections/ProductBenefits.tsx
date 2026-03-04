import { Zap, Brain, Heart, Leaf, Shield, Award, Moon, Cookie, Apple, Flame } from 'lucide-react';

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProductBenefitData {
  id: string;
  name: string;
  formula: string;
  headline: string;
  benefits: Benefit[];
  color: string;
}

const productsBenefits: ProductBenefitData[] = [
  {
    id: 'maza-power',
    name: 'MazaPower',
    formula: 'FÓRMULA 01',
    headline: 'Energía limpia que dura horas',
    color: 'from-blue-500 to-cyan-500',
    benefits: [
      { icon: Zap, title: 'Energía Sostenida', description: '2-3 horas de energía limpia sin picos ni caídas' },
      { icon: Flame, title: 'Rendimiento Físico', description: 'Más fuerza y resistencia en tu entrenamiento' },
      { icon: Heart, title: 'Recuperación Muscular', description: 'Repara fibras dañadas post-ejercicio' },
      { icon: Brain, title: 'Enfoque Mental', description: 'Claridad sin nerviosismo ni estimulantes' },
      { icon: Leaf, title: '100% Natural', description: 'Sin químicos, solo ingredientes de origen natural' },
      { icon: Shield, title: 'Sin Cafeína', description: 'Energía real, no estimulantes sintéticos' }
    ]
  },
  {
    id: 'psi-cookie',
    name: 'PsiCookie',
    formula: 'FÓRMULA 02',
    headline: 'Despierta tu mente, expande tu conciencia',
    color: 'from-purple-500 to-pink-500',
    benefits: [
      { icon: Brain, title: 'Enfoque Profundo', description: '3-4 horas de concentración intensa' },
      { icon: Zap, title: 'Memoria Mejorada', description: 'Retén más información con claridad' },
      { icon: Heart, title: 'Calma Productiva', description: 'Reduce el estrés mental sin somnolencia' },
      { icon: Shield, title: 'Creatividad Potenciada', description: 'Rompe bloqueos mentales' },
      { icon: Leaf, title: 'Hongos Adaptógenos', description: 'Cordyceps, Lion\'s Mane y Reishi' },
      { icon: Award, title: 'Estado de Ánimo', description: 'Bienestar natural y equilibrado' }
    ]
  },
  {
    id: 'mantequilla-mani',
    name: 'ManíPower',
    formula: 'FÓRMULA 03',
    headline: '25g de proteína que tu cuerpo absorbe',
    color: 'from-amber-500 to-orange-500',
    benefits: [
      { icon: Flame, title: '25g Proteína/100g', description: 'Perfil de aminoácidos completo' },
      { icon: Heart, title: 'Recuperación Óptima', description: 'Comparable a proteínas animales' },
      { icon: Shield, title: 'Saciedad Prolongada', description: 'Control del apetito natural' },
      { icon: Zap, title: 'Energía Sostenida', description: 'Sin picos de azúcar' },
      { icon: Leaf, title: '100% Vegana', description: 'Buena para ti, buena para el planeta' },
      { icon: Award, title: 'Omega-3 + Chía', description: '5g de omega-3 y 10g de fibra' }
    ]
  },
  {
    id: 'apple-flow',
    name: 'AppleFlow',
    formula: 'FÓRMULA 04',
    headline: 'La calma que fluye desde adentro',
    color: 'from-emerald-500 to-green-500',
    benefits: [
      { icon: Heart, title: 'Antiinflamatorio', description: 'Cúrcuma con piperina (2000% biodisponible)' },
      { icon: Shield, title: 'Regulación Glucémica', description: 'Energía estable sin picos' },
      { icon: Leaf, title: 'Digestión Mejorada', description: 'Jengibre y fibra de manzana' },
      { icon: Moon, title: 'Momento de Calma', description: 'Bienestar emocional natural' },
      { icon: Apple, title: 'Manzana Real', description: 'Deshidratada, no concentrado' },
      { icon: Award, title: 'Golden Milk', description: 'Tradición ayurvédica milenaria' }
    ]
  },
  {
    id: 'zen-energy',
    name: 'ZenEnergy',
    formula: 'FÓRMULA 05',
    headline: 'La verdadera energía nace de la calma',
    color: 'from-teal-500 to-emerald-500',
    benefits: [
      { icon: Heart, title: 'Reduce el Estrés', description: 'Cortisol equilibrado, -44% en estudios' },
      { icon: Moon, title: 'Calma sin Somnolencia', description: 'Alerta y relajado al mismo tiempo' },
      { icon: Shield, title: 'Sueño Reparador', description: 'Descanso profundo y reparador' },
      { icon: Zap, title: 'Energía Sostenida', description: 'Sin estimulantes, solo adaptógenos' },
      { icon: Leaf, title: 'Ashwagandha', description: 'La reina de los adaptógenos' },
      { icon: Brain, title: 'Enfoque Claro', description: 'Atención sin ansiedad' }
    ]
  },
  {
    id: 'core-cookie',
    name: 'CoreCookie',
    formula: 'FÓRMULA 06',
    headline: 'El antojo más inteligente que vas a tener',
    color: 'from-rose-500 to-pink-500',
    benefits: [
      { icon: Flame, title: '15g de Proteína', description: 'Recuperación muscular en cada mordida' },
      { icon: Shield, title: '5g de Fibra', description: 'Saciedad y digestión saludable' },
      { icon: Leaf, title: 'Sin Gluten', description: 'Apto para celíacos' },
      { icon: Award, title: 'Bajo en Azúcar', description: 'Solo 2g de azúcares totales' },
      { icon: Cookie, title: 'Deliciosa', description: 'Sin sabor a "proteína en polvo"' },
      { icon: Heart, title: 'Eritritol + Stevia', description: '0 calorías, sin impacto glucémico' }
    ]
  },
  {
    id: 'brownie-cosmico',
    name: 'Brownie Cósmico',
    formula: 'FÓRMULA 07',
    headline: 'El pecado que puedes comer todos los días',
    color: 'from-amber-700 to-orange-800',
    benefits: [
      { icon: Flame, title: '12g de Proteína', description: 'Postre que nutre tu cuerpo' },
      { icon: Shield, title: 'Sin Azúcar Añadida', description: 'Endulzado solo con dátiles Medjool' },
      { icon: Heart, title: 'Grasas Saludables', description: 'Aguacate y almendra' },
      { icon: Leaf, title: 'Sin Gluten', description: 'Base de harina de almendra' },
      { icon: Cookie, title: 'Denso y Húmedo', description: 'Textura de brownie tradicional' },
      { icon: Award, title: 'Cacao Puro', description: 'Antioxidantes y magnesio natural' }
    ]
  }
];

export function ProductBenefits() {
  return (
    <section id="beneficios" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 text-3xl mb-4">
            <span className="animate-bounce">✨</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🌟</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Beneficios de cada <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-400">Fórmula</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada fórmula está diseñada para una necesidad específica de tu cuerpo y mente
          </p>
        </div>

        {/* Grid de beneficios por producto */}
        <div className="space-y-16">
          {productsBenefits.map((product) => (
            <div
              key={product.id}
              className="relative"
            >
              {/* Header del producto */}
              <div className={`text-center mb-8 p-6 rounded-2xl bg-gradient-to-r ${product.color} bg-opacity-10 border border-white/5`}>
                <span className="text-sm font-bold uppercase tracking-wider text-white/70">
                  {product.formula}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {product.name}
                </h3>
                <p className="text-white/80 mt-2 italic">
                  "{product.headline}"
                </p>
              </div>

              {/* Grid de beneficios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group bg-slate-900/80 rounded-xl p-5 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} bg-opacity-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-bold mb-1">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
