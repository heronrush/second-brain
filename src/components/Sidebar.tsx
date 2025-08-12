import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { TagIcon } from "../icons/TagIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { VideoIcon } from "../icons/VideoIcon";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="w-64 border-gray-300 shadow-md border-r h-screen flex flex-col items-center fixed">
      <h1 className="text-2xl mt-3">Second brain</h1>

      <div className="mt-20">
        <SidebarItem icon={<TwitterIcon />} contentType="Tweets" />
        <SidebarItem icon={<VideoIcon />} contentType="Videos" />
        <SidebarItem icon={<DocumentIcon />} contentType="Documents" />
        <SidebarItem icon={<LinkIcon />} contentType="Links" />
        <SidebarItem icon={<TagIcon />} contentType="Tags" />
      </div>
    </div>
  );
}
