import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Button } from "./Button";

export default function DashboardMainContent() {
  return (
    <div className="ml-64 bg-[#f9fbfc] h-screen">
      <Topbar />
    </div>
  );
}

function Topbar() {
  return (
    <div className="flex justify-end pr-10 pt-5">
      <div className="flex gap-6">
        <Button
          variant="secondary"
          size="lg"
          text="Share content"
          onClick={() => {
            alert("share content");
          }}
          startIcon={<ShareIcon />}
        />
        <Button
          variant="primary"
          size="lg"
          text="Add content"
          onClick={() => {
            alert("add content");
          }}
          startIcon={<PlusIcon />}
        />
      </div>
    </div>
  );
}
