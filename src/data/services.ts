export interface Service {
  id: string
  icon: string
  title: string
  description: string
  accent: 'warm' | 'fresh' | 'trust' | 'offer'
}

export const services: Service[] = [
  {
    id: 'combustivel',
    icon: '⛽',
    title: 'Desconto no Combustível',
    description: 'Abasteça com preços especiais e economize toda semana no tanque.',
    accent: 'warm',
  },
  {
    id: 'oleo',
    icon: '🔧',
    title: 'Troca de Óleo 10x s/ Juros',
    description: 'Manutenção do seu carro parcelada em até 10x sem juros. Sem stress.',
    accent: 'offer',
  },
  {
    id: 'mercado',
    icon: '🛒',
    title: 'Mini Mercado A–Z',
    description: 'Perecíveis frescos e congelados. Tudo que você precisa, sempre em estoque.',
    accent: 'fresh',
  },
  {
    id: 'farmacia',
    icon: '💊',
    title: 'Farmácia',
    description: 'Medicamentos e produtos de saúde com atendimento rápido e confiável.',
    accent: 'trust',
  },
  {
    id: 'banco',
    icon: '🏦',
    title: 'Banco',
    description: 'Serviços bancários no posto. Depósitos, saques e pagamentos.',
    accent: 'trust',
  },
  {
    id: 'lavanderia',
    icon: '👕',
    title: 'Lavanderia',
    description: 'Roupas limpas enquanto você abastece. Praticidade total.',
    accent: 'fresh',
  },
  {
    id: 'pet',
    icon: '🐾',
    title: 'Espaço Pet 24h',
    description: 'Área dedicada para seu pet a qualquer hora. Aberto 24 horas.',
    accent: 'warm',
  },
  {
    id: 'autoservice',
    icon: '🚗',
    title: 'Autoservice',
    description: 'Abasteça você mesmo com praticidade, segurança e os melhores preços.',
    accent: 'warm',
  },
]

export const promotions = [
  {
    id: 'combustivel-off',
    badge: 'Economia',
    title: 'Combustível com desconto',
    highlight: 'Até 15% OFF',
    description: 'Nos dias de promoção, abasteça pagando menos. Consulte o calendário.',
    gradient: 'warm' as const,
  },
  {
    id: 'oleo-10x',
    badge: 'Parcelamento',
    title: 'Troca de óleo em 10x',
    highlight: 'Sem juros',
    description: 'Cuide do motor do seu carro e parcele sem pagar a mais.',
    gradient: 'offer' as const,
  },
  {
    id: 'mercado-fresco',
    badge: 'Frescor',
    title: 'Perecíveis frescos',
    highlight: 'Todo dia',
    description: 'Frutas, verduras, congelados e muito mais no mercado mais completo.',
    gradient: 'fresh' as const,
  },
]
