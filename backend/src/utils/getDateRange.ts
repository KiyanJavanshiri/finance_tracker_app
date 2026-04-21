import { TDateRange } from './types';

export const getDateRange = (range: TDateRange) => {
  const now = new Date();

  let from: Date;
  const to = now;

  switch (range) {
    case 'daily':
      from = new Date(now);
      from.setHours(0, 0, 0, 0);
      break;

    case 'monthly':
      from = new Date(now.getFullYear(), now.getMonth(), 1);
      break;

    case 'yearly':
      from = new Date(now.getFullYear(), 0, 1);
      break;
  }

  return { from, to };
};
