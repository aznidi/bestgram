export const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annual', priceSuffix: '/year' },
];

export const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    price: { monthly: '0', annually: '0' },
    description: 'Everything you need to start optimizing your Instagram account.',
    features: [
      'Basic follower analysis',
      'Management of one Instagram account',
      'Basic hashtag generator',
      'Limited statistics',
      'Email support',
    ],
    mostPopular: false,
  },
  {
    name: 'Standard',
    id: 'tier-standard',
    href: '#',
    price: { monthly: '10', annually: '96' },
    description: 'Ideal solution for content creators who want to grow their audience.',
    features: [
      'All Basic features',
      'Management of 3 Instagram accounts',
      'Advanced follower analysis',
      'Post scheduler',
      'Advanced hashtag generator',
      'Priority support',
    ],
    mostPopular: true,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    price: { monthly: '100', annually: '960' },
    description: 'Complete solution for professionals and influencers.',
    features: [
      'All Standard features',
      'Management of 10 Instagram accounts',
      'Detailed competitor analysis',
      'Automatic fake follower detection',
      'Advanced scheduler with content suggestions',
      'Dedicated 24/7 support',
      'API access for custom integrations',
    ],
    mostPopular: false,
  },
]; 