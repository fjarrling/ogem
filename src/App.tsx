import React from 'react'
import AppRouter from "./components/AppRouter/AppRouter"
import {ModalProvider} from "@/context/AppealDialogContext.tsx";
import '@/i18n';
import Modals from "@/components/Modals/Modals.tsx";

const App: React.FC = () => {
  return (
    <ModalProvider>
      <AppRouter/>
      <Modals/>
    </ModalProvider>
  );
};

export default App;