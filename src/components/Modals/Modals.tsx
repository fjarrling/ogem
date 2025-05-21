import {useModal} from "@/context/AppealDialogContext.tsx";
import AppealDialog from "@/components/AppealDialog/AppealDialog.tsx";


const Modals = () => {
  const {isAppealDialogOpen, handleDialogToggle} = useModal();
  return (
    <AppealDialog
      isOpen={isAppealDialogOpen}
      isOpenToggle={handleDialogToggle}
    />
  );
};

export default Modals;