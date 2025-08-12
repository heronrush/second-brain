import { useAtom } from "jotai";
import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { TagIcon } from "../icons/TagIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { VideoIcon } from "../icons/VideoIcon";
import SidebarItem from "./SidebarItem";
import {
  documentsTileAtom,
  linksTileAtom,
  tagsTileAtom,
  tweetTileAtom,
  videosTileAtom,
} from "../store/atoms/contentTypeAtom";

export default function Sidebar() {
  const [tweetsTile, setTweetsTile] = useAtom(tweetTileAtom);
  const [videosTile, setVideosTile] = useAtom(videosTileAtom);
  const [documentsTile, setDocumentsTile] = useAtom(documentsTileAtom);
  const [linksTile, setLinksTile] = useAtom(linksTileAtom);
  const [tagsTile, setTagsTile] = useAtom(tagsTileAtom);

  return (
    <div className="w-64 border-gray-300 shadow-md border-r h-screen flex flex-col items-center fixed">
      <h1 className="text-2xl mt-3">Second brain</h1>

      <div className="mt-20">
        <SidebarItem
          icon={<TwitterIcon />}
          contentType="Tweets"
          onClick={() => {
            setTweetsTile(true);
            setVideosTile(false);
            setDocumentsTile(false);
            setLinksTile(false);
            setTagsTile(false);
          }}
          selected={tweetsTile}
        />
        <SidebarItem
          icon={<VideoIcon />}
          contentType="Videos"
          onClick={() => {
            setVideosTile(true);
            setTweetsTile(false);
            setDocumentsTile(false);
            setLinksTile(false);
            setTagsTile(false);
          }}
          selected={videosTile}
        />
        <SidebarItem
          icon={<DocumentIcon />}
          contentType="Documents"
          onClick={() => {
            setDocumentsTile(true);
            setTweetsTile(false);
            setVideosTile(false);
            setLinksTile(false);
            setTagsTile(false);
          }}
          selected={documentsTile}
        />
        <SidebarItem
          icon={<LinkIcon />}
          contentType="Links"
          onClick={() => {
            setLinksTile(true);
            setTweetsTile(false);
            setVideosTile(false);
            setDocumentsTile(false);
            setTagsTile(false);
          }}
          selected={linksTile}
        />
        <SidebarItem
          icon={<TagIcon />}
          contentType="Tags"
          onClick={() => {
            setTagsTile(true);
            setTweetsTile(false);
            setVideosTile(false);
            setDocumentsTile(false);
            setLinksTile(false);
          }}
          selected={tagsTile}
        />
      </div>
    </div>
  );
}
