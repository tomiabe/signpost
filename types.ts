export type CategoryId = 'civil' | 'travel' | 'transport' | 'health' | 'business' | 'education';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  iconName: string;
  color: string;
}

export interface Step {
  title: string;
  description: string;
  tips?: string[];
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
  locationMapUrl?: string;
  officialLink?: string;
  author: string;
  verified: boolean;
}