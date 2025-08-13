import { useSetAtom } from "jotai";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Button } from "./Button";
import Card from "./Card";
import { modalAtom } from "../store/atoms/atom";

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
    <div className="mt-20 px-10  pb-20 flex flex-wrap gap-10 ">
      <Card
        content="https://www.youtube.com/watch?v=8tx2viHpgA8"
        title="gpt"
        contentType="video"
      />
      <Card
        content="https://www.youtube.com/watch?v=0XvOOi6g5Ok"
        title="some youtube video"
        contentType="video"
        description="dave gray youtube video"
      />
    </div>
  );
}

function Topbar() {
  const openModal = useSetAtom(modalAtom);

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
            openModal(true);
          }}
          startIcon={<PlusIcon />}
        />
      </div>
    </div>
  );
}
