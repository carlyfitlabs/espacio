import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'maza-power',
    name: 'MazaPower',
    formula: 'FÓRMULA 01',
    price: 180,
    description: 'Pre-entreno natural formulado con dátiles, nueces mixtas y maca negra. Energía limpia, pura y consciente. Bolsa con 6 piezas.',
    image: '/producto-mazapower.png',
    badge: '6 piezas',
    color: 'blue'
  },
  {
    id: 'psi-cookie',
    name: 'PsiCookie',
    formula: 'FÓRMULA 02',
    price: 60,
    description: 'Galleta cuántica con hongos adaptógenos (Cordyceps, Lion\'s Mane, Reishi) para potenciar la mentalidad, el enfoque cognitivo y la claridad.',
    image: '/producto-psicookie.png',
    badge: 'Nuevo',
    color: 'purple'
  },
  {
    id: 'mantequilla-mani',
    name: 'ManíPower',
    formula: 'FÓRMULA 03',
    price: 125,
    description: 'Mantequilla de maní artesanal con 25g de proteína vegetal por 100g. Elaborada con maní orgánico, proteína de guisante y chía.',
    image: '/producto-manipower.png',
    badge: 'Más Popular',
    color: 'amber'
  },
  {
    id: 'apple-flow',
    name: 'AppleFlow',
    formula: 'FÓRMULA 04',
    price: 49,
    description: 'Galleta antiinflamatoria con manzana real y golden milk (cúrcuma + jengibre). Calma, equilibrio y bienestar que fluyen desde adentro.',
    image: '/producto-appleflow.png',
    color: 'green'
  },
  {
    id: 'zen-energy',
    name: 'ZenEnergy',
    formula: 'FÓRMULA 05',
    price: 85,
    description: 'Fórmula adaptógena con Ashwagandha, L-teanina y pasiflora. Reduce el estrés, mejora el sueño y encuentra tu calma interior.',
    image: '/producto-zenenergy.png',
    badge: 'Calma',
    color: 'teal'
  },
  {
    id: 'core-cookie',
    name: 'CoreCookie',
    formula: 'FÓRMULA 06',
    price: 55,
    description: 'Galleta proteica con 15g de proteína, sin gluten, baja en azúcar. Harina de almendra, proteína de suero y chocolate negro 70%.',
    image: '/producto-corecookie.png',
    badge: '15g Proteína',
    color: 'rose'
  },
  {
    id: 'brownie-cosmico',
    name: 'Brownie Cósmico',
    formula: 'FÓRMULA 07',
    price: 70,
    description: 'El pecado permisible. Brownie denso y húmedo con 12g de proteína, endulzado con dátiles Medjool y aguacate. Sin azúcar añadida.',
    image: '/producto-brownie.png',
    badge: 'Postre',
    color: 'chocolate'
  }
];

// Número de WhatsApp para pedidos
export const WHATSAPP_NUMBER = '4433580280';

// Slogan de la marca
export const SLOGAN = 'Formulando tu mejor versión';

// Redes sociales
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/carlyfit.lab?igsh=MTJsYWU1c2s1ajhodg==',
  facebook: 'https://www.facebook.com/share/14Vjst7zBUA/'
};
