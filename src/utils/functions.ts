import { Genre } from '@/types/global';

export const isPrime = (number: number) => {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
};

export const isEven = (number: number) => {
  return number % 2 === 0;
};

export const getGenreText = (options: Genre[], id: number): string => {
  const genre = options.filter(Boolean).find(genre => genre.id === id);
  return genre?.name ?? 'Unknown';
};

//eslint-disable-next-line
export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
