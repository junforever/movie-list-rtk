import { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { BiCheckDouble } from 'react-icons/bi';

interface ChatAnswerProps {
  children: ReactNode;
  avatarUrl: string;
  dividerTitle?: string;
}

const getCurrentHour = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes().toString();
  return `${currentHour}:${currentMinutes.length === 1 ? `0${currentMinutes}` : currentMinutes}`;
};

export const ChatAnswer = ({ children, avatarUrl, dividerTitle }: ChatAnswerProps) => {
  return (
    <>
      {dividerTitle && <div className="divider animate-bounceInDown">{dividerTitle}</div>}
      <div className="flex overflow-hidden gap-x-5 items-end animate-bounceInDown">
        <div className="relative min-w-10">
          <div className="absolute -right-2 top-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <img
            className="inline-block size-10 rounded-full ring-2 ring-white ml-1 mb-1"
            src={avatarUrl}
            alt="chat avatar"
          />
        </div>
        <div className="flex flex-col">
          <div className="chat-msg relative bg-grey-chat rounded-lg py-2 px-3">{children}</div>
          <div className="flex items-center gap-x-1">
            <span className="block text-modal-title text-base ">Sent at {getCurrentHour()}</span>
            <IconContext.Provider value={{ className: 'text-xl' }}>
              <BiCheckDouble />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};
