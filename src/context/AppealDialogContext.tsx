import {createContext, FC, ReactNode, useContext, useState} from 'react';

// Типизация контекста
interface ModalContextType {
  isAppealDialogOpen: boolean;
  openAppealDialog: () => void;
  closeAppealDialog: () => void;
  handleDialogToggle: (open: boolean) => void;
}

// Заглушки для значений по умолчанию
const defaultContext: ModalContextType = {
  isAppealDialogOpen: false,
  openAppealDialog: () => {
  },
  closeAppealDialog: () => {
  },
  handleDialogToggle: () => {
  },
};

const ModalContext = createContext<ModalContextType>(defaultContext);

type ModalProviderProps = {
  children: ReactNode;
};

export const useModal = () => useContext(ModalContext);

export const ModalProvider: FC<ModalProviderProps> = ({children}) => {
  const [isAppealDialogOpen, setIsAppealDialogOpen] = useState(false);

  const openAppealDialog = () => setIsAppealDialogOpen(true);
  const closeAppealDialog = () => setIsAppealDialogOpen(false);

  const handleDialogToggle = (open: boolean) => {
    if (open) openAppealDialog();
    else closeAppealDialog();
  };

  return (
    <ModalContext.Provider
      value={{
        isAppealDialogOpen,
        openAppealDialog,
        closeAppealDialog,
        handleDialogToggle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
