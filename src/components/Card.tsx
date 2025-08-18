import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { VideoIcon } from "../icons/VideoIcon";
import axios from "axios";
import { useAtom } from "jotai";
import { userContentAtom } from "../store/atoms/contentAtom";
import { Tweet } from "react-twitter-widgets";

const BACKEND_URL = import.meta.env.VITE_API_URL;

type CardType = {
  // id?: string;
  contentId: number;
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
  contentId,
  title,
  description,
  contentLink,
  contentType,
}: CardType) {
  const [userContents, setUserContents] = useAtom(userContentAtom);

  return (
    <div className="max-w-96 p-8 pt-2 border border-gray-300 rounded-md shadow-sm hover:shadow-lg">
      {/* contains the top div, contains icons */}
      <div className="flex items-center justify-between">
        <div>{contentType && contentTypeIcon[contentType]}</div>
        <div className="flex items-center gap-5">
          <ShareIcon className="hover:text-[#3e36c0] size-5" />
          <DeleteIcon
            onClick={async () => {
              try {
                const response = await axios.delete(
                  `${BACKEND_URL}/api/v1/content`,
                  {
                    data: {
                      contentId,
                      userId: localStorage.getItem("userId"),
                    },
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );

                if (response.status === 200) {
                  const newContent = userContents?.filter(
                    (content) => content.id !== contentId
                  );
                  setUserContents(newContent);
                }

                alert("content deleted");
              } catch (err) {
                if (axios.isAxiosError(err)) {
                  if (err.response?.status === 403) {
                    alert(
                      "you're trying to delete something, which is not present"
                    );
                  } else {
                    alert("some internal server error");
                  }
                }
              }
            }}
            className="hover:text-red-500 size-5"
          />
        </div>
      </div>
      <h1 className="text-2xl ml-3 mt-7 font-semibold text-gray-700">
        Title: {title}
      </h1>
      <div className="mt-7 ">
        {contentType === "TWEET" && <TwitterPost twitterLink={contentLink} />}{" "}
        {contentType === "VIDEO" && <VideoPost videoLink={contentLink} />}
      </div>

      {/* description */}
      {description && (
        <p className="mt-3">
          <span className="font-bold text-gray-600">Description:</span> <br />
          {description}
        </p>
      )}
    </div>
  );
}

function TwitterPost({ twitterLink }: { twitterLink: string }) {
  // Extract tweet ID from URL
  const match = twitterLink.match(/status\/(\d+)/);
  if (!match) return <p>Invalid tweet URL</p>;
  const tweetId = match[1];

  return <Tweet tweetId={tweetId} />;
}

function VideoPost({ videoLink }: { videoLink: string }) {
  const embedUrl = getYouTubeEmbed(videoLink);

  if (!embedUrl) return <p>Invalid video URL</p>;

  return (
    <iframe
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

// to get youtube embed from a url
function getYouTubeEmbed(url: string) {
  // Extract the video ID
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
  const match = url.match(regex);
  if (!match) return null;
  const videoId = match[1];
  return `https://www.youtube.com/embed/${videoId}`;
}
