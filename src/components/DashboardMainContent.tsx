import { useAtom, useSetAtom } from "jotai";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Button } from "./Button";
import Card from "./Card";
import { modalAtom } from "../store/atoms/atom";
import { userContentAtom } from "../store/atoms/contentAtom";
import { useEffect } from "react";
import axios from "axios";

export default function DashboardMainContent() {
  return (
    <div className="ml-64 bg-[#f9fbfc] h-full pb-50">
      <Topbar />
      <ContentContainer />
    </div>
  );
}

function ContentContainer() {
  const [userContents, setUserContents] = useAtom(userContentAtom);
  const userId = localStorage.getItem("userId");

  // useEffect
  useEffect(() => {
    async function getContent() {
      const response = await axios.get(
        `http://localhost:3000/api/v1/content/${userId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (response) {
        setUserContents(response.data.contents);
      } else {
        setUserContents([]);
      }
    }

    getContent();
  }, []);

  //
  if (userContents?.length === 0) {
    return (
      <div className="mt-20 px-10  pb-20 flex flex-wrap gap-10 justify-center ">
        <h1 className="text-3xl">No contents added yet.</h1>
      </div>
    );
  }

  return (
    <div className="mt-20 px-10  pb-20 flex flex-wrap gap-10 ">
      {userContents?.map((content) => {
        return (
          <Card
            key={content.id}
            contentId={content.id}
            contentLink={content.link}
            title={content.title}
            contentType={content.type}
            description={content.description}
          />
        );
      })}
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
