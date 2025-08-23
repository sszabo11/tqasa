import type { Article } from '$lib/types';
import type { PageServerLoad } from './$types';

const articles: Article[] = [
  {
    id: '1',
    title: 'How Small Can a Wave Get?',
    description: 'Exploring the limits of wave physics, from ocean swells to quantum fluctuations.',
    author: 'Dr. Lena Hart',
    created_at: '2025-08-21T10:00:00Z',
    thumbnail: '/images/waves.svg'
  },
  {
    id: '2',
    title: 'Can we predict the future and past?',
    description:
      'If everyone came from  a starting point in time (the big bang), and (if) we had the position and velocity of the initial particles in the universe, then (if) we had the computation power, we could calculate the rest of the universe? We’ll discuss the limits to this theory and how it’s actually (nearly) viable. Does anyone actually have free will?',
    author: 'Marcus Reed',
    created_at: '2025-08-20T15:30:00Z',
    thumbnail: '/images/determi.svg'
  },
  {
    id: '3',
    title: 'Engines that accelerate particles?',
    description:
      'Let’s discuss ion propulsion, and why its so powerful yet so weak. Why isn’t it being used more in space travel, let alone air travel?',
    author: 'Elena Zhou',
    created_at: '2025-08-19T09:45:00Z',
    thumbnail: '/images/ion.svg'
  },
  {
    id: '7',
    title: 'Where are the aliens?',
    description:
      'Humans have only had radio astronomy for 100 years, cameras for only 150 years, science for only 2500 years, so its obvious that we haven’t seen them, right? Well, in this article I will discuss my thoughts on aliens, and humans presence in the cosmos.',
    author: 'Samir Patel',
    created_at: '2025-08-18T18:20:00Z',
    thumbnail: '/images/alien.svg'
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
