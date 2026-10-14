export interface PortfolioProject {
  id: string;
  name: string;
  url: string;
  description: string;
  statusLabels: string[];
  isLive: boolean;
  isApp?: boolean;
  ctaText?: string;
  image?: string;
  logo?: string;
  techTags: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'raipur-homes',
    name: 'Raipur Homes',
    url: 'https://raipurhomes.com/',
    description: 'Product design for the Raipur Homes website and mobile application.',
    statusLabels: ['UI/UX DESIGN'],
    isLive: false,
    logo: '/logos/raipur-homes.svg',
    techTags: ['Figma', 'Mobile UX', 'Design System'],
  },
  {
    id: 'achievers-international-school',
    name: 'Achievers International School',
    url: 'https://www.aisppur.org/',
    description: "School website and admin panel designed and developed to support the institution's digital presence.",
    statusLabels: ['DESIGN + DEVELOPMENT', 'LIVE'],
    isLive: true,
    image: '/projects/achievers-hero.jpg',
    logo: '/logos/achievers.png',
    techTags: ['Next.js', 'React', 'Admin Panel'],
  },
  {
    id: 'major-kalshi-classes-website',
    name: 'Major Kalshi Classes — Website',
    url: 'https://www.majorkalshiclasses.com/',
    description: 'Website UI/UX design for Major Kalshi Classes and its educational offerings.',
    statusLabels: ['UI/UX DESIGN'],
    isLive: true,
    image: '/projects/mkc-hero.png',
    logo: '/logos/mkc.png',
    techTags: ['UI/UX Design', 'Education Portal'],
  },
  {
    id: 'major-kalshi-classes-app',
    name: 'Major Kalshi Classes — Mobile App',
    url: 'https://www.majorkalshiclasses.com/',
    description: 'Mobile app experience designed for Major Kalshi Classes, with development currently underway.',
    statusLabels: ['DESIGN COMPLETE', 'IN DEVELOPMENT'],
    isLive: false,
    isApp: true,
    ctaText: 'In Development',
    logo: '/logos/mkc.png',
    techTags: ['Mobile UI/UX', 'iOS & Android'],
  },
  {
    id: 'apply-education-loans',
    name: 'Apply Education Loans',
    url: 'https://applyeducationloans.com/',
    description: 'User-focused website design for an education-loan platform.',
    statusLabels: ['UI/UX DESIGN'],
    isLive: true,
    techTags: ['Fintech UX', 'Responsive Layout'],
  },
  {
    id: 'legal-masters',
    name: 'Legal Masters',
    url: 'https://www.thelegalmasters.in/',
    description: 'Website design and development for a legal-services business.',
    statusLabels: ['DESIGN + DEVELOPMENT', 'LIVE'],
    isLive: true,
    logo: '/logos/legal-masters.svg',
    techTags: ['Next.js', 'Web Development'],
  },
  {
    id: 'deliver-my-tune',
    name: 'Deliver My Tune',
    url: 'https://delivermytune.com/',
    description: 'Website and admin-panel UI/UX design for the Deliver My Tune platform.',
    statusLabels: ['UI/UX DESIGN'],
    isLive: true,
    techTags: ['Music Platform', 'Admin UX'],
  },
  {
    id: 'home-aura',
    name: 'Home Aura',
    url: 'https://www.homeauraconstruction.com/',
    description: 'Development of the Home Aura website.',
    statusLabels: ['DEVELOPMENT', 'LIVE'],
    isLive: true,
    image: '/projects/home-aura-hero.jpg',
    logo: '/logos/home-aura.png',
    techTags: ['Web Development', 'Modern Frontend'],
  },
  {
    id: 'mapsmaster',
    name: 'MapsMaster',
    url: 'https://www.mapsmaster.in/',
    description: 'Website development for the MapsMaster digital platform.',
    statusLabels: ['DEVELOPMENT', 'LIVE'],
    isLive: true,
    techTags: ['Web Development', 'SEO Ready'],
  },
  {
    id: 'cosmetic-krafts',
    name: 'Cosmetic Krafts',
    url: 'https://cosmetickrafts.com/',
    description: 'Website development for Cosmetic Krafts.',
    statusLabels: ['DEVELOPMENT', 'LIVE'],
    isLive: true,
    image: '/projects/cosmetic-krafts-hero.webp',
    logo: '/logos/cosmetic-krafts.png',
    techTags: ['Web Development', 'High-Res Media'],
  },
  {
    id: 'archi-and-aura',
    name: 'ARCHI & AURA',
    url: 'https://archiaura.com/',
    description: 'Website development for ARCHI & AURA.',
    statusLabels: ['DEVELOPMENT', 'LIVE'],
    isLive: true,
    techTags: ['Web Development', 'Portfolio CMS'],
  },
  {
    id: 'ansh-taxi-raipur',
    name: 'Ansh Taxi Raipur',
    url: 'https://www.anshtaxiraipur.com/',
    description: 'Website development for Ansh Taxi Raipur.',
    statusLabels: ['DEVELOPMENT', 'LIVE'],
    isLive: true,
    image: '/projects/ansh-taxi-hero.jpg',
    logo: '/logos/ansh-taxi.png',
    techTags: ['Web Development', 'Booking UX'],
  },
];
