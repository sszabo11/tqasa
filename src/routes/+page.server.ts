import type { Article } from '$lib/types';
import type { PageServerLoad } from './$types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'How Small Can a Wave Get?',
    description: 'Exploring the limits of wave physics, from ocean swells to quantum fluctuations.',
    author: 'Dr. Lena Hart',
    created_at: '2025-08-21T10:00:00Z',
    thumbnail: '/wave.png'
  },
  {
    id: '2',
    title: 'Determinism: Is Everything Already Decided?',
    description: 'A deep dive into the philosophy of determinism and its clash with free will.',
    author: 'Marcus Reed',
    created_at: '2025-08-20T15:30:00Z',
    thumbnail: '/deter.png'
  },
  {
    id: '3',
    title: 'Air-Breathing Ion Engines: Future of Space Travel',
    description:
      'How air-breathing ion engines could revolutionize propulsion and space exploration.',
    author: 'Elena Zhou',
    created_at: '2025-08-19T09:45:00Z',
    thumbnail: '/ion.png'
  },
  {
    id: '4',
    title: 'The Physics of Spinning',
    description: "Why do spinning objects stay balanced, and what happens when they don't?",
    author: 'Samir Patel',
    created_at: '2025-08-18T18:20:00Z',
    thumbnail: '/spinning.png'
  },
  {
    id: '5',
    title: 'What Are Dimensions, Really?',
    description: 'From the familiar three to the mysterious higher dimensions — what do they mean?',
    author: 'Dr. Carla Mendez',
    created_at: '2025-08-17T12:10:00Z',
    thumbnail: '/dimensions.png'
  }
];

export const load: PageServerLoad = async () => {
  return {
    articles
  };
};
