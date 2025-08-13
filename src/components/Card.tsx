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
  content: string;
  contentType?: "tweet" | "document" | "video" | "link";
};

const contentTypeIcon = {
  tweet: <TwitterIcon />,
  video: <VideoIcon className="text-gray-600" />,
  document: <DocumentIcon />,
  link: <LinkIcon />,
};

export default function Card({
  title,
  description,
  content,
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
      <h1 className="text-2xl mt-2">{title}</h1>
      <div className="mt-7 ">
        {contentType === "tweet" ? (
          <TwitterPost />
        ) : (
          <VideoPost videoLink={content} />
        )}
      </div>

      {/* description */}
      <p className="mt-3">{description}</p>
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

/*
https://www.youtube.com/watch?v=4zKQyW7KVPA
https://youtu.be/4zKQyW7KVPA?si=YT2jQSIQ9RDbgDpm

src="https://www.youtube.com/embed/4zKQyW7KVPA?si=YT2jQSIQ9RDbgDpm" 



*/

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
