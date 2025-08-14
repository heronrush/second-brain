import { useSetAtom } from "jotai";
import { CrossIcon } from "../icons/CrossIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { VideoIcon } from "../icons/VideoIcon";
import { Button } from "./Button";
import { modalAtom } from "../store/atoms/atom";

export function AddContentModal() {
  const showModal = useSetAtom(modalAtom);

  return (
    <div className="h-full w-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0  flex justify-center items-center">
      <div className=" w-[450px] pb-10 rounded-lg bg-white text-black shadow-md z-10 ">
        <div className="flex justify-end m-3">
          <button
            onClick={() => {
              showModal(false);
            }}
          >
            <CrossIcon />
          </button>
        </div>
        <div className="flex flex-col items-center py-3 pt-1">
          <LabelledInput label="Title" placeholder="Elon Musk, Tesla, Tweet" />
          <LabelledInput
            label="Description"
            placeholder="Elon musk is talking something about tesla"
          />
          <LabelledInput
            label="Content Link"
            placeholder="https://x.com/..."
            required={true}
          />

          <ContentType />

          <Button
            size="lg"
            variant="secondary"
            text="Add content"
            onClick={() => {
              alert("add content");
            }}
            className="w-80 mt-4 flex justify-center"
          />
        </div>
      </div>
    </div>
  );
}

function ContentType() {
  return (
    <div className="w-80 mb-3">
      <label className="font-semibold text-xl mb-5" htmlFor="">
        Content type
      </label>
      <div className="flex gap-3 mt-3 py-1 justify-between">
        <TwitterIcon className="hover:text-[#37319e] size-7  cursor-pointer" />
        <VideoIcon className="hover:text-[#37319e] size-7 cursor-pointer" />
        <DocumentIcon className="hover:text-[#37319e] size-7 cursor-pointer" />
        <LinkIcon className="hover:text-[#37319e] size-7 cursor-pointer" />
      </div>
    </div>
  );
}

type LabelledInputType = {
  label: string;
  placeholder: string;
  required?: boolean;
};

function LabelledInput({ label, placeholder, required }: LabelledInputType) {
  return (
    <div className="my-3 w-80 ">
      <label className="font-semibold text-xl" htmlFor="">
        {label}
      </label>
      <br />
      <input
        type="text"
        className="border w-full mt-2 border-gray-300 outline-none px-2 py-3 rounded-sm"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
