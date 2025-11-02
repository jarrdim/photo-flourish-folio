export interface Image {
  id: string;
  title: string;
  category: string;
  price: number;
  extendedPrice: number;
  thumbnail: string;
  preview: string;
  resolution: string;
  format: string;
  fileSize: string;
  license: string;
  orientation: 'landscape' | 'portrait' | 'square';
  tags: string[];
}

export const categories = [
  { name: 'Nature', slug: 'nature', count: 234 },
  { name: 'Business', slug: 'business', count: 156 },
  { name: 'Abstract', slug: 'abstract', count: 189 },
  { name: 'People', slug: 'people', count: 298 },
  { name: 'Technology', slug: 'technology', count: 167 },
  { name: 'Architecture', slug: 'architecture', count: 142 },
];

export const sampleImages: Image[] = [
  {
    id: '1',
    title: 'Mountain Sunset Glory',
    category: 'nature',
    price: 29,
    extendedPrice: 99,
    thumbnail: '/placeholder.svg',
    preview: '/placeholder.svg',
    resolution: '6000x4000',
    format: 'JPG, PNG, TIFF',
    fileSize: '24.5 MB',
    license: 'Royalty-free',
    orientation: 'landscape',
    tags: ['mountains', 'sunset', 'landscape', 'nature'],
  },
  {
    id: '2',
    title: 'Abstract Teal Patterns',
    category: 'abstract',
    price: 39,
    extendedPrice: 129,
    thumbnail: '/placeholder.svg',
    preview: '/placeholder.svg',
    resolution: '5000x5000',
    format: 'JPG, PNG',
    fileSize: '18.2 MB',
    license: 'Royalty-free',
    orientation: 'square',
    tags: ['abstract', 'geometric', 'pattern', 'modern'],
  },
  {
    id: '3',
    title: 'Modern Office Space',
    category: 'business',
    price: 49,
    extendedPrice: 149,
    thumbnail: '/placeholder.svg',
    preview: '/placeholder.svg',
    resolution: '7200x4800',
    format: 'JPG, PNG, TIFF',
    fileSize: '32.1 MB',
    license: 'Royalty-free',
    orientation: 'landscape',
    tags: ['office', 'workspace', 'business', 'interior'],
  },
  {
    id: '4',
    title: 'Forest Path Morning',
    category: 'nature',
    price: 29,
    extendedPrice: 99,
    thumbnail: '/placeholder.svg',
    preview: '/placeholder.svg',
    resolution: '4500x6000',
    format: 'JPG, PNG',
    fileSize: '28.7 MB',
    license: 'Royalty-free',
    orientation: 'portrait',
    tags: ['forest', 'nature', 'path', 'trees'],
  },
  {
    id: '5',
    title: 'Tech Innovation Hub',
    category: 'technology',
    price: 59,
    extendedPrice: 179,
    thumbnail: '/placeholder.svg',
    preview: '/placeholder.svg',
    resolution: '6000x4000',
    format: 'JPG, PNG, TIFF',
    fileSize: '26.3 MB',
    license: 'Royalty-free',
    orientation: 'landscape',
    tags: ['technology', 'innovation', 'digital', 'modern'],
  },
  {
    id: '6',
    title: 'Minimalist Architecture',
    category: 'architecture',
    price: 45,
    extendedPrice: 139,
    thumbnail: '/placeholder.svg',
    preview: '/placeholder.svg',
    resolution: '5400x7200',
    format: 'JPG, PNG',
    fileSize: '30.5 MB',
    license: 'Royalty-free',
    orientation: 'portrait',
    tags: ['architecture', 'minimalist', 'building', 'design'],
  },
  {
    id: '7',
    title: 'Professional Team Meeting',
    category: 'people',
    price: 49,
    extendedPrice: 149,
    thumbnail: '/placeholder.svg',
    preview: '/placeholder.svg',
    resolution: '6000x4000',
    format: 'JPG, PNG, TIFF',
    fileSize: '29.8 MB',
    license: 'Royalty-free',
    orientation: 'landscape',
    tags: ['people', 'business', 'meeting', 'team'],
  },
  {
    id: '8',
    title: 'Ocean Wave Close-up',
    category: 'nature',
    price: 35,
    extendedPrice: 119,
    thumbnail: '/placeholder.svg',
    preview: '/placeholder.svg',
    resolution: '6000x6000',
    format: 'JPG, PNG',
    fileSize: '22.4 MB',
    license: 'Royalty-free',
    orientation: 'square',
    tags: ['ocean', 'wave', 'water', 'nature'],
  },
];
