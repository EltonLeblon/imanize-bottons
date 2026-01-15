export const defaultConfig = {
  branding: {
    storeName: 'Buttons & Cia',
    slogan: 'Bottons, Chaveiros e Ímãs Personalizados',
    description: 'Produtos personalizados com qualidade e criatividade. Entrega rápida para todo Brasil!',
    primaryColor: '#e11d48',
    secondaryColor: '#64748b',
  },
  hero: {
    title: 'Personalize seu Estilo!',
    subtitle: 'Bottons, chaveiros e ímãs únicos feitos sob medida para você.',
    ctaButton1: 'Ver Produtos',
    ctaButton2: 'Fazer Pedido',
  },
  categories: [
    'Bottons',
    'Chaveiros',
    'Ímãs de Geladeira',
    'Kits Personalizados',
    'Aniversário',
    'Casamento',
    'Empresas',
    'Eventos'
  ],
  products: [
    {
      id: 1,
      name: 'Botton Personalizado 5cm',
      price: 5.90,
      oldPrice: 8.90,
      discount: 34,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500&h=500&fit=crop'
    },
    {
      id: 2,
      name: 'Chaveiro Acrílico Dupla Face',
      price: 12.90,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=500&fit=crop'
    },
    {
      id: 3,
      name: 'Ímã de Geladeira Redondo',
      price: 8.90,
      oldPrice: 12.90,
      discount: 31,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop'
    },
    {
      id: 4,
      name: 'Kit 10 Bottons Temáticos',
      price: 45.00,
      oldPrice: 60.00,
      discount: 25,
      rating: 5.0,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&h=500&fit=crop'
    },
    {
      id: 5,
      name: 'Chaveiro Coração Personalizado',
      price: 15.90,
      rating: 4.8,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop'
    },
    {
      id: 6,
      name: 'Botton 3cm Aniversário',
      price: 4.50,
      rating: 4.6,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop'
    },
    {
      id: 7,
      name: 'Ímã Quadrado Empresas',
      price: 10.90,
      oldPrice: 14.90,
      discount: 27,
      rating: 4.7,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=500&fit=crop'
    },
    {
      id: 8,
      name: 'Chaveiro Estrela Glitter',
      price: 13.90,
      rating: 4.9,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop'
    }
  ]
};

export const getConfig = () => {
  const saved = localStorage.getItem('marketplaceConfig');
  return saved ? JSON.parse(saved) : defaultConfig;
};

export const saveConfig = (config) => {
  localStorage.setItem('marketplaceConfig', JSON.stringify(config));
};
