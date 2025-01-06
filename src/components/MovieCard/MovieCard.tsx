import { Movie } from '@/types/global';
import { useState } from 'react';

interface MovieCardProps {
  movie: Movie;
  cssClass: string;
}

export const MovieCard = ({ cssClass, movie }: MovieCardProps) => {
  const { title, poster_path, release_date } = movie;
  const formattedDate = new Date(release_date);
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <figure className="flex flex-col pb-[0.3rem] w-full h-full rounded-2xl overflow-hidden shadow-white-card transition-transform duration-500 ease-in-out hover:scale-[1.05] cursor-pointer">
      {!imgLoaded && <img src="/images/fff.webp" alt="Placeholder image" className="aspect-movie blur-lg" />}
      <img
        src={`${import.meta.env.VITE_API_IMAGES_URL}/${poster_path}`}
        alt={movie.title}
        className={`${imgLoaded ? '' : 'hidden'} aspect-movie`}
        onLoad={() => setImgLoaded(true)}
      />
      <figcaption
        className={`flex justify-between flex-grow-0 flex-shrink-0 basis-1/5 px-2 pt-4 min-h-24 sm:min-h-28 gap-x-2 items-baseline text-gray-400 ${cssClass}`}>
        <span className="text-xl overflow-hidden">{title}</span>
        <span>{formattedDate.getFullYear()}</span>
      </figcaption>
    </figure>
  );
};
