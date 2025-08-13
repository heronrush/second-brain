import { AddContentModal } from "../components/AddContentModal";
import DashboardMainContent from "../components/DashboardMainContent";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <AddContentModal />
    </div>
  );

  return (
    <div>
      <Sidebar />
      <DashboardMainContent />
    </div>
  );
}
