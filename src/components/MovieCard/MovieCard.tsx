import { Movie } from '@/types/global';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { ChatAnswer } from '../ChatAnswer/ChatAnswer';
interface MovieCardProps {
  movie: Movie;
  cssClass: string;
}

export const MovieCard = ({ cssClass, movie }: MovieCardProps) => {
  const { title, poster_path, release_date } = movie;
  const formattedDate = new Date(release_date);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onModalClose = () => setIsModalOpen(false);
  const onModalOpen = () => {
    document.body.classList.add('overflow-hidden');
    setIsModalOpen(true);
  };

  return (
    <>
      <figure
        onClick={onModalOpen}
        className="flex flex-col pb-[0.3rem] w-full h-full rounded-2xl overflow-hidden shadow-white-card transition-transform duration-500 ease-in-out hover:scale-[1.05] cursor-pointer">
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
          <span>{isNaN(formattedDate.getTime()) ? '' : formattedDate.getFullYear()}</span>
        </figcaption>
      </figure>
      <Modal title={movie.original_title} onClose={onModalClose} isOpen={isModalOpen}>
        <ChatAnswer avatarUrl="/images/avatar.webp" dividerTitle="Overview">
          <p>{movie.overview}</p>
          {movie.genre_labels && (
            <>
              <p className="mt-4">
                <b>Categories:</b>
              </p>
              <p className="mt-3 mb-2 flex gap-2 flex-wrap">
                {movie.genre_labels.map((genre, index) => (
                  <span
                    className="p-2 rounded-xl border-sky-500/15 bg-sky-500/10 text-sky-300"
                    key={`${genre}-${index}`}>
                    {genre}
                  </span>
                ))}
              </p>
            </>
          )}
        </ChatAnswer>
        <ChatAnswer avatarUrl="/images/avatar.webp" dividerTitle="Additional Information">
          <p>
            <b>Popularity:</b> {movie.popularity}
          </p>
          <p>
            <b>Vote Average:</b> {movie.vote_average}
          </p>
          <p>
            <b>Vote Count:</b> {movie.vote_count}
          </p>
          <p>
            <b>Release Date:</b> {movie.release_date}
          </p>
          <p className="capitalize">
            <b>Original Language:</b> {movie.original_language}
          </p>
        </ChatAnswer>
      </Modal>
    </>
  );
};
