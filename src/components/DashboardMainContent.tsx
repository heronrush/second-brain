import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Button } from "./Button";
import Card from "./Card";

export default function DashboardMainContent() {
  return (
    <div className="ml-64 bg-[#f9fbfc] h-full pb-50">
      <Topbar />
      <ContentContainer />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="mt-20 px-20  pb-20 flex flex-wrap gap-10 ">
      <Card
        content="https://www.youtube.com/watch?v=Q2NePVoGxYg"
        title="some youtube video"
        contentType="video"
        description="dave gray youtube video"
      />
      <Card
        content="https://www.youtube.com/watch?v=DcKXiQOagZ8&list=RDDcKXiQOagZ8&start_radio=1"
        title="some youtube video"
        contentType="video"
        description="dave gray youtube video"
      />
      <Card
        content="https://youtu.be/3B5M8TyYpeg?si=18ZkGoq4sIVD5zW7"
        title="some youtube video"
        contentType="video"
        description="dave gray youtube video"
      />
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
