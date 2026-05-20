export interface Earning {
  statisticsDescription: string;
  value: number;
  percentageChange: number;
}

export interface Activities {
  id: number;
  description: string;
  date: string;
  type: 'purchase' | 'registration' | 'review';
}
