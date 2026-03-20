export type CategoryId = 'family' | 'travel' | 'driving' | 'business' | 'ids' | 'education';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  iconName: string;
  tasks: string[];
}

export interface Step {
  title: string;
  description: string;
  tips?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Guide {
  id: string;
  categoryId: CategoryId;
  title: string;
  slug: string;
  summary: string;
  lastUpdated: string;
  estimatedCost: string;
  estimatedTime: string;
  requirements: string[];
  steps: Step[];
  locationName?: string;
  officialLink?: string;
  signpostInsights?: string[];
  faqs?: FAQ[];
  scope: 'Lagos' | 'Nigeria';
  verified: boolean;
}