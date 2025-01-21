import { ReactNode, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Modal = ({ title, children, onClose, isOpen = false }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const timeOutRef = useRef<number | null>(null);

  const modalClose = () => {
    modalRef.current?.classList.add(
      'backdrop:opacity-0',
      'backdrop:transition-opacity',
      'backdrop:duration-300',
      'backdrop:ease-out',
      'opacity-0',
      'animate-fadeOut-300',
    );
    document.body.classList.remove('overflow-hidden');
    timeOutRef.current = window.setTimeout(() => {
      modalRef.current?.close();
      onClose();
    }, 300);
  };

  useEffect(() => {
    if (modalRef.current && Object.hasOwn(modalRef.current, 'scrollTo')) {
      modalRef.current.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeOutRef.current !== null) clearTimeout(timeOutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
      return;
    }
  }, [isOpen]);

  return (
    isOpen && (
      <dialog
        ref={modalRef}
        className="rounded-2xl p-4 bg-modal text-white  backdrop:bg-black/60 animate-fadeIn-300 backdrop:animate-fadeIn-200">
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
    )
  );
};
