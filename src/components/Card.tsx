import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { VideoIcon } from "../icons/VideoIcon";

type CardType = {
  // id?: string;
  title?: string;
  description?: string;
  contentLink: string;
  contentType?: "TWEET" | "DOCUMENT" | "VIDEO" | "LINK";
};

const contentTypeIcon = {
  TWEET: <TwitterIcon />,
  VIDEO: <VideoIcon className="text-gray-600" />,
  DOCUMENT: <DocumentIcon />,

  LINK: <LinkIcon />,
};

export default function Card({
  title,
  description,
  contentLink,
  contentType,
}: CardType) {
  return (
    <div className="max-w-96 p-8 pt-2 border border-gray-300 rounded-md shadow-sm hover:shadow-lg">
      {/* contains the top div, contains icons */}
      <div className="flex items-center justify-between">
        <div>{contentType && contentTypeIcon[contentType]}</div>
        <div className="flex items-center gap-5">
          <ShareIcon className="hover:text-[#3e36c0] size-5" />
          <DeleteIcon className="hover:text-red-500 size-5" />
        </div>
      </div>
      <h1 className="text-2xl ml-3 mt-2 text-gray-700">{title}</h1>
      <div className="mt-7 ">
        {contentType === "TWEET" && <TwitterPost twitterLink={contentLink} />}{" "}
        {contentType === "VIDEO" && <VideoPost videoLink={contentLink} />}
      </div>

      <p className="mt-3">{contentLink}</p>

      {/* description */}
      <p className="mt-3">{description}</p>
    </div>
  );
}

function TwitterPost({ twitterLink }: { twitterLink: string }) {
  return (
    <>
      <blockquote className="twitter-tweet">
        <a href={twitterLink}>August 11, 2025</a>
      </blockquote>{" "}
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </>
  );
}

function VideoPost({ videoLink }: { videoLink: string }) {
  const videoId = getVideoId(videoLink);

  return (
    <div>
      <a href={`youtube.com/watch?v=${videoId}`} target="_blank">
        <iframe src={`https://www.youtube.com/embed/${videoId}`}></iframe>
      </a>
    </div>
  );
}

function getVideoId(link: string) {
  const dotComIncludes = link.includes(".com/");
  if (dotComIncludes) {
    const twoString = link.split("v=");
    const videoId = twoString[1].split("&");
    return videoId[0];
  } else {
    const twoStrings = link.split("youtu.be/");
    const againSplit = twoStrings[1].split("?si=");

    const videoId = againSplit[0];
    return videoId;
  }
}
