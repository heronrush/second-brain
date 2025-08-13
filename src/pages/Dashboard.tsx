import { useAtomValue } from "jotai";
import { AddContentModal } from "../components/AddContentModal";
import DashboardMainContent from "../components/DashboardMainContent";
import Sidebar from "../components/Sidebar";
import { modalAtom } from "../store/atoms/atom";

export default function Dashboard() {
  const modalIsOpened = useAtomValue(modalAtom);

  if (modalIsOpened) {
    return (
      <div>
        <AddContentModal />
      </div>
    );
  }

  return (
    <div>
      <Sidebar />
      <DashboardMainContent />
    </div>
  );
}
