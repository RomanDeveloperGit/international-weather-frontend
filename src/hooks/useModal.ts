import { useCallback, useState } from 'react';

type useModalType = (initialOpen?: boolean) => {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useModal: useModalType = (initialOpen = false) => {
  const [isOpen, setOpen] = useState<boolean>(initialOpen);

  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  return {
    isOpen,
    open,
    close,
  };
};

export default useModal;
