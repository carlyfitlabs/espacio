import { useState } from 'react';
import { ChevronDown, AlertTriangle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFAQData {
  id: string;
  name: string;
  faqs: FAQItem[];
  allergens: string;
  warnings?: string[];
}

const productsFAQ: ProductFAQData[] = [
  {
    id: 'maza-power',
    name: 'MazaPower',
    faqs: [
      {
        question: '¿Cuándo debo consumir Mazapower?',
        answer: 'Idealmente 30-45 minutos antes de tu entrenamiento o actividad física. También puedes usarlo como snack energético a media mañana (10-11 am) o media tarde (3-4 pm) cuando sientas que tu energía decae.'
      },
      {
        question: '¿Puedo comer más de una pieza al día?',
        answer: 'Sí, pero recomendamos empezar con una pieza para evaluar tu tolerancia. La maca negra es potente, y cada persona responde diferente. La bolsa contiene 6 piezas, suficiente para una semana de entrenamientos.'
      },
      {
        question: '¿Tiene cafeína?',
        answer: 'No contiene cafeína añadida. La energía proviene exclusivamente de los ingredientes naturales: los dátiles aportan glucosa de absorción lenta, las nueces proporcionan grasas saludables para el cerebro, y la maca negra activa tus sistemas energéticos de forma natural.'
      },
      {
        question: '¿Cuánto dura la bolsa?',
        answer: 'La bolsa contiene 6 piezas. Si entrenas 3 veces por semana, te durará 2 semanas. Si lo usas diariamente, una semana. Una vez abierta, consume dentro de 15 días para máxima frescura.'
      }
    ],
    allergens: 'Contiene NUECES (almendra, nuez de castilla, pacana). Puede contener trazas de otros frutos secos.',
    warnings: ['No exceder la dosis recomendada', 'Si estás embarazada, lactando o tomando medicamentos, consulta a tu médico', 'Mantener fuera del alcance de niños pequeños']
  },
  {
    id: 'psi-cookie',
    name: 'PsiCookie',
    faqs: [
      {
        question: '¿Cuánto tiempo tarda en hacer efecto?',
        answer: 'La mayoría de personas sienten los efectos entre 30-45 minutos después de consumirla. El pico de efectividad ocurre a las 1.5-2 horas y dura aproximadamente 3-4 horas en total.'
      },
      {
        question: '¿Tiene sabor a hongos?',
        answer: 'No. Aunque contiene hongos adaptógenos, el sabor dominante es a cacao de alta calidad con notas sutiles de vainilla. Los hongos se procesan en extractos concentrados que no aportan sabor terroso.'
      },
      {
        question: '¿Puedo combinarla con café?',
        answer: 'Sí, pero con moderación. PSI-COOKIE ya contiene teobromina del cacao, que es un estimulante suave. Si tomas café, te recomendamos reducir la cantidad habitual o espaciar el consumo por al menos 2 horas.'
      },
      {
        question: '¿Es seguro tomarla todos los días?',
        answer: 'Sí, los hongos adaptógenos son seguros para consumo diario. De hecho, muchos estudios sugieren que los beneficios se acumulan con el uso regular. Sin embargo, recomendamos descansar 1-2 días por semana para mantener la sensibilidad.'
      }
    ],
    allergens: 'Puede contener trazas de FRUTOS SECOS y GLUTEN por procesamiento en instalaciones compartidas.',
    warnings: ['No consumir si estás tomando anticoagulantes sin consultar médico', 'Si estás embarazada o lactando, consulta a tu médico']
  },
  {
    id: 'mantequilla-mani',
    name: 'ManíPower',
    faqs: [
      {
        question: '¿Cuánta proteína tiene cada porción?',
        answer: 'Cada 100g de ManíPower contiene 25g de proteína de alta calidad. Una porción recomendada de 30g (2 cucharadas) aporta 7.5g de proteína — ideal como snack post-entreno o complemento de desayuno.'
      },
      {
        question: '¿Necesito refrigerarla después de abrir?',
        answer: 'No es necesario, pero recomendamos refrigerarla después de abrir para mantener la frescura óptima por más tiempo. Sin refrigeración, consume dentro de 30 días. Refrigerada, dura hasta 90 días.'
      },
      {
        question: '¿Por qué es mejor que una proteína en polvo comercial?',
        answer: 'Las proteínas en polvo comerciales suelen contener: edulcorantes artificiales, espesantes químicos, saborizantes sintéticos. ManíPower es 100% natural, hecho con ingredientes reales que puedes pronunciar, y proporciona nutrientes adicionales (grasas saludables, fibra, vitaminas).'
      },
      {
        question: '¿Es apta para niños?',
        answer: 'Sí, ManíPower es completamente segura para niños. De hecho, es una excelente forma de aumentar su ingesta de proteína y grasas saludables. Sin embargo, si tu hijo tiene alergia al maní o frutos secos, evita este producto.'
      }
    ],
    allergens: 'Contiene MANÍ (cacahuate). Puede contener trazas de otros FRUTOS SECOS.',
    warnings: ['No consumir si tienes alergia al maní', 'La separación de aceite es natural — simplemente revuelve antes de usar']
  },
  {
    id: 'apple-flow',
    name: 'AppleFlow',
    faqs: [
      {
        question: '¿Sabe mucho a cúrcuma?',
        answer: 'No. Aunque contiene cúrcuma, el sabor dominante es a manzana dulce con notas cálidas de canela y vainilla. La cúrcuma está perfectamente balanceada para que obtengas sus beneficios sin el sabor terroso.'
      },
      {
        question: '¿Necesita refrigeración?',
        answer: 'No, Apple Flow es estable a temperatura ambiente. Puedes llevarla en tu bolso, dejarla en tu escritorio, o guardarla en el cajón del trabajo. Solo manténla alejada del calor directo y la humedad.'
      },
      {
        question: '¿Cuántas puedo comer al día?',
        answer: 'Recomendamos 1-2 piezas al día. Aunque son completamente saludables, contienen ingredientes bioactivos (como cúrcuma y jengibre) que son más efectivos en dosis moderadas.'
      },
      {
        question: '¿Por qué es mejor que una galleta comercial?',
        answer: 'Una galleta comercial contiene: azúcar refinada, aceites hidrogenados, conservadores artificiales, cero valor nutricional. Apple Flow contiene: manzana real, cúrcuma orgánica, jengibre fresco, leche de coco, y especias que activamente mejoran tu salud.'
      }
    ],
    allergens: 'Contiene COCO (leche de coco). Puede contener trazas de FRUTOS SECOS y GLUTEN.',
    warnings: ['Si tomas anticoagulantes, consulta a tu médico (la cúrcuma tiene efectos anticoagulantes leves)']
  },
  {
    id: 'zen-energy',
    name: 'ZenEnergy',
    faqs: [
      {
        question: '¿Cuánto tiempo tarda en hacer efecto?',
        answer: 'Los efectos iniciales suelen sentirse entre 30-60 minutos después del consumo. Sin embargo, los beneficios completos de la Ashwagandha se acumulan con el uso regular durante 2-4 semanas. Muchos usuarios reportan notar mejoras significativas en la calidad del sueño desde la primera noche.'
      },
      {
        question: '¿Tiene sabor fuerte a hierbas?',
        answer: 'La Ashwagandha tiene un sabor terroso característico. En Zen Energy, hemos enmascarado este sabor con una mezcla de cacao, vainilla y un toque de canela. El resultado es un sabor similar a un chocolate calteado suave con notas herbales sutiles.'
      },
      {
        question: '¿Puedo tomarla con otros medicamentos?',
        answer: 'IMPORTANTE: La Ashwagandha puede interactuar con ciertos medicamentos, especialmente: sedantes y tranquilizantes, medicamentos para la tiroides, inmunosupresores, medicamentos para la diabetes. Si tomas cualquier medicamento recetado, consulta a tu médico antes de consumir Zen Energy.'
      },
      {
        question: '¿Es seguro para embarazadas o lactantes?',
        answer: 'No recomendamos Zen Energy para mujeres embarazadas o lactantes. Aunque la Ashwagandha es generalmente segura, no hay suficientes estudios sobre su seguridad durante el embarazo y la lactancia.'
      },
      {
        question: '¿Puedo conducir después de tomarla?',
        answer: 'Sí, completamente. Zen Energy no causa somnolencia ni altera tus sentidos. De hecho, muchas personas reportan que conducir después de tomar Zen Energy es más placentero porque están más relajadas y enfocadas.'
      }
    ],
    allergens: 'Puede contener trazas de FRUTOS SECOS y SOYA.',
    warnings: [
      '⚠️ CONSULTA A TU MÉDICO antes de usar si: estás embarazada o lactando, tienes una condición de la tiroides, tomas medicamentos recetados (especialmente sedantes, anticoagulantes, o inmunosupresores), tienes una condición médica diagnosticada, planeas someterte a una cirugía (suspende 2 semanas antes)',
      'Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad.'
    ]
  },
  {
    id: 'core-cookie',
    name: 'CoreCookie',
    faqs: [
      {
        question: '¿Qué tipo de endulzante usa?',
        answer: 'Core Cookie usa una combinación de eritritol y stevia. El eritritol es un alcohol de azúcar natural (se encuentra en frutas como las uvas y peras) que tiene cero calorías y cero impacto en el azúcar en sangre. La stevia es un edulcorante de origen vegetal.'
      },
      {
        question: '¿Necesita refrigeración?',
        answer: 'No, Core Cookie es estable a temperatura ambiente gracias a su bajo contenido de humedad. Puedes llevarla en tu bolsa, guardarla en tu escritorio, o tenerla en el coche. Dura hasta 60 días sin refrigeración.'
      },
      {
        question: '¿Por qué es mejor que una galleta comercial?',
        answer: 'Comparación: Core Cookie tiene 15g de proteína vs 2-3g de la comercial, 2g de azúcar vs 15-20g, 5g de fibra vs <1g, 8 ingredientes naturales vs 20+ químicos. Core Cookie te da satisfacción real, no un ciclo de azúcar y hambre.'
      },
      {
        question: '¿Es apta para diabéticos?',
        answer: 'Core Cookie tiene un bajo impacto glucémico gracias a la harina de almendra, el eritritol y el alto contenido de proteína y fibra. Sin embargo, cada persona responde diferente. Si tienes diabetes, consulta con tu médico y monitorea tu glucosa.'
      }
    ],
    allergens: 'Contiene ALMENDRAS, LECHE (suero), HUEVO.',
    warnings: ['Contiene edulcorantes que pueden causar laxación si se consume en exceso']
  },
  {
    id: 'brownie-cosmico',
    name: 'Brownie Cósmico',
    faqs: [
      {
        question: '¿De verdad sabe a brownie normal?',
        answer: 'Sí, y no lo decimos nosotros, lo dicen nuestros clientes. El secreto está en la combinación de cacao de alta calidad, dátiles Medjool (que aportan una dulzura caramelizada), y aguacate (que da la humedad característica). Muchas personas no pueden distinguirlo de un brownie tradicional.'
      },
      {
        question: '¿Necesita refrigeración?',
        answer: 'Sí, el Brownie Cósmico debe refrigerarse. Debido a su alto contenido de humedad del aguacate y los dátiles, dura 7-10 días refrigerado o hasta 3 meses congelado. Te recomendamos sacarlo del refrigerador 10 minutos antes de comer.'
      },
      {
        question: '¿Por qué es mejor que un brownie comercial?',
        answer: 'Brownie comercial: azúcar refinada, harina blanca, aceites hidrogenados, jarabe de maíz alto en fructosa. Brownie Cósmico: dátiles Medjool, harina de almendra, aguacate, cacao puro, proteína de huevo. El comercial te da una bomba de azúcar seguida de crash. El Cósmico te da energía sostenida y nutrientes reales.'
      },
      {
        question: '¿Cuántos puedo comer al día?',
        answer: 'Recomendamos 1 brownie al día como postre o snack. Cada brownie tiene aproximadamente 250 calorías de nutrientes densos: 12g de proteína, grasas saludables, y carbohidratos complejos. Es suficientemente saciante para satisfacer tu antojo de chocolate.'
      }
    ],
    allergens: 'Contiene HUEVO, ALMENDRAS.',
    warnings: ['Requiere refrigeración', 'Consumir dentro de 7-10 días después de abrir']
  }
];

export function ProductFAQ() {
  const [openProduct, setOpenProduct] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <span className="text-2xl">❓</span>
            <span className="text-amber-300 text-sm font-bold">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Todo sobre nuestras <span className="text-amber-400">Fórmulas</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Encuentra respuestas específicas para cada producto
          </p>
        </div>

        {/* Lista de productos FAQ */}
        <div className="space-y-4">
          {productsFAQ.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900/80 rounded-2xl border border-white/5 overflow-hidden"
            >
              {/* Header del producto */}
              <button
                onClick={() => setOpenProduct(openProduct === product.id ? null : product.id)}
                className="w-full flex items-center justify-between p-5 hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-amber-400 font-bold">{product.name}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openProduct === product.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Contenido del producto */}
              {openProduct === product.id && (
                <div className="px-5 pb-5">
                  {/* Preguntas */}
                  <div className="space-y-3 mb-6">
                    {product.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-slate-800/50 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenQuestion(openQuestion === `${product.id}-${index}` ? null : `${product.id}-${index}`)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700/50 transition-colors"
                        >
                          <span className="text-white font-medium pr-4">{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-amber-400 flex-shrink-0 transition-transform ${
                              openQuestion === `${product.id}-${index}` ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {openQuestion === `${product.id}-${index}` && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Alérgenos */}
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-300 font-semibold mb-1">Alérgenos:</p>
                        <p className="text-red-200/80 text-sm">{product.allergens}</p>
                      </div>
                    </div>
                  </div>

                  {/* Advertencias */}
                  {product.warnings && (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-amber-300 font-semibold mb-1">Advertencias:</p>
                          <ul className="space-y-1">
                            {product.warnings.map((warning, idx) => (
                              <li key={idx} className="text-amber-200/80 text-sm">• {warning}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
