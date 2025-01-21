import { Modal } from '@/components/Modal/Modal';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

describe('Testing Modal functionality', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  test('modal should open with isOpen on true', () => {
    const onCloseModal = vi.fn();
    const modalTitle = 'Testing Modal';
    const modalMessage = 'This is a modal test';

    render(
      <Modal title={modalTitle} isOpen onClose={onCloseModal}>
        <p>{modalMessage}</p>
      </Modal>,
    );

    const modal = screen.getByRole('dialog', { hidden: true });
    const modalChild = screen.getByRole('paragraph', { hidden: true });

    expect(modal).toBeInTheDocument();
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
    expect(screen.getByText(modalTitle)).toBeInTheDocument();
    expect(modalChild).toHaveTextContent(modalMessage);
  });
});
