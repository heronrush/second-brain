import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { VideoIcon } from "../icons/VideoIcon";

type CardType = {
  // id?: string;
  title?: string;
  content: string;
  contentType?: "tweet" | "document" | "video" | "link";
};

const contentTypeIcon = {
  tweet: <TwitterIcon />,
  video: <VideoIcon />,
  document: <DocumentIcon />,
  link: <LinkIcon />,
};

export default function Card({ title, content, contentType }: CardType) {
  return (
    <div className="max-w-96 p-8 pt-2 border border-gray-300 rounded-md shadow-sm">
      {/* contains the top div, contains icons */}
      <div className="flex items-center justify-between">
        <div>{contentType && contentTypeIcon[contentType]}</div>
        <div className="flex items-center gap-5">
          <ShareIcon />
          <DeleteIcon />
        </div>
      </div>
      <h1 className="text-2xl mt-2">{title}</h1>
      <p className="mt-7 ">
        {contentType === "tweet" ? <TwitterPost /> : <VideoPost />}
      </p>
    </div>
  );
}

function TwitterPost() {
  return (
    <>
      <blockquote className="twitter-tweet">
        <p lang="hi" dir="ltr">
          Badmosh baap hai😄{" "}
          <a href="https://t.co/JtcgzEJ4F2">pic.twitter.com/JtcgzEJ4F2</a>
        </p>
        &mdash; Aditya Tiwari ❤️👻 (@aditiwari9111){" "}
        <a href="https://twitter.com/aditiwari9111/status/1954840601087594531?ref_src=twsrc%5Etfw">
          August 11, 2025
        </a>
      </blockquote>{" "}
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </>
  );
}

function VideoPost() {
  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/OXGznpKZ_sA?si=TOtgsGUhWl_Pjirn"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
