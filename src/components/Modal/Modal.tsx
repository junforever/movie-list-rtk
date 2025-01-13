import { ReactNode, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  title: string;
  children: ReactNode;
  modalRef: React.RefObject<HTMLDialogElement>;
}

export const Modal = ({ title, children, modalRef }: ModalProps) => {
  const timeOutRef = useRef<number | null>(null);

  const modalClose = () => {
    modalRef.current?.classList.add(
      'backdrop:opacity-0',
      'backdrop:transition-opacity',
      'backdrop:duration-500',
      'backdrop:ease-out',
      'opacity-0',
    );
    timeOutRef.current = window.setTimeout(() => {
      modalRef.current?.close();
      modalRef.current?.classList.remove(
        'backdrop:opacity-0',
        'backdrop:transition-opacity',
        'backdrop:duration-500',
        'backdrop:ease-out',
        'opacity-0',
      );
    }, 800);
  };

  useEffect(() => {
    if (modalRef.current) modalRef.current.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return () => {
      if (timeOutRef.current !== null) clearTimeout(timeOutRef.current);
    };
  }, []);

  return (
    <dialog
      ref={modalRef}
      className="rounded-2xl p-4 bg-modal text-white  backdrop:bg-black/60 animate-fadeIn-600 backdrop:animate-fadeIn-200">
      <div className="flex justify-between items-baseline">
        <h2 className="font-bold tracking-wide text-2xl text-modal-title">{title}</h2>
        <button
          onClick={modalClose}
          className="transition-transform duration-500 ease-in-out hover:scale-125 p-1 border border-gray-400 rounded-md text-gray-400 hover:text-white hover:border-white">
          <IoClose />
        </button>
      </div>
      <div className="py-4 flex flex-col gap-y-4">{children}</div>
    </dialog>
  );
};
