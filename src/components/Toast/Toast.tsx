import ReactDOM from 'react-dom';
import { MdError } from 'react-icons/md';
import { CgSpinner } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { useEffect, useState } from 'react';

type Icons = 'error' | 'loading';

interface ToastProps {
  title: string;
  text?: string;
  icon?: Icons;
}

export const Toast = ({ text, title, icon }: ToastProps) => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timerFo = window.setTimeout(() => {
      setFadeOut(true);
    }, 4500);
    const timerFi = window.setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => {
      clearTimeout(timerFi);
      clearTimeout(timerFo);
    };
  }, []);

  if (!visible) return null;

  const modal = document.getElementById('modal');
  if (!modal) return null;

  return ReactDOM.createPortal(
    <div
      className={`${fadeOut ? 'animate-fadeOut' : ''} animate-fadeIn absolute flex gap-4 items-center bg-black border-gray-600 border rounded-md p-4 w-1/2 left-2/4 -translate-x-1/2 translate-y-4 z-10`}>
      {icon && (
        <IconContext.Provider value={{ className: `text-white w-8 h-8 ${icon === 'loading' ? 'animate-spin' : ''}` }}>
          {icon === 'loading' && <CgSpinner />}
          {icon === 'error' && <MdError />}
        </IconContext.Provider>
      )}
      <div className="flex flex-col text-white">
        <p className="text-lg font-bold">{title}</p>
        {text && <p className="text-base">{text}</p>}
      </div>
    </div>,
    modal,
  );
};
