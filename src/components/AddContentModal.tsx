import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { CrossIcon } from "../icons/CrossIcon"
import { DocumentIcon } from "../icons/DocumentIcon"
import { LinkIcon } from "../icons/LinkIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { VideoIcon } from "../icons/VideoIcon"
import { Button } from "./Button"
import { contentTypeAtom, modalAtom } from "../store/atoms/atom"
import { useState, type ChangeEvent } from "react"
import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_API_URL

export function AddContentModal() {
  const setShowModal = useSetAtom(modalAtom)

  // modal states
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [contentLink, setContentLink] = useState("")

  const contentType = useAtomValue(contentTypeAtom)

  // send request to add new content
  async function addContentRequest() {
    const localStorageUserId = localStorage.getItem("userId") as string
    const userId = parseInt(localStorageUserId)

    const sendRequest = await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        title,
        description,
        link: contentLink,
        type: contentType,
        userId,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )

    if (sendRequest.status === 200) {
      setShowModal(false)
      alert("content added")
    } else {
      alert("some server error")
    }
  }

  return (
    <div className="h-full w-full bg-[rgba(212,211,211,0.5)] fixed top-0 left-0  flex justify-center items-center">
      <div className=" w-[450px] pb-10 rounded-lg bg-white text-black shadow-md z-10 ">
        <div className="flex justify-end m-3">
          <button
            onClick={() => {
              setShowModal(false)
            }}
          >
            <CrossIcon />
          </button>
        </div>
        <div className="flex flex-col items-center py-3 pt-1">
          <LabelledInput
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            label="Title"
            placeholder="Elon Musk, Tesla, Tweet"
          />
          <LabelledInput
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            label="Description"
            placeholder="Elon musk is talking something about tesla"
          />
          <LabelledInput
            onChange={(e) => setContentLink(e.target.value)}
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
              addContentRequest()
            }}
            className="w-80 mt-4 flex justify-center"
          />
        </div>
      </div>
    </div>
  )
}

function ContentType() {
  const [contentType, setContentType] = useAtom(contentTypeAtom)

  return (
    <div className="w-80 mb-3">
      <label className="font-semibold text-xl mb-5" htmlFor="">
        Content type
      </label>
      <div className="flex gap-3 mt-3 py-1 items-center justify-between">
        <TwitterIcon
          className={`hover:text-[#37319e] size-7  cursor-pointer ${
            contentType === "TWEET" ? "text-[#37319e]" : ""
          }`}
          onClick={() => {
            setContentType("TWEET")
          }}
        />
        <VideoIcon
          className={`hover:text-[#37319e] size-7  cursor-pointer ${
            contentType === "VIDEO" ? "text-[#37319e]" : ""
          }`}
          onClick={() => {
            setContentType("VIDEO")
          }}
        />
        <DocumentIcon
          className={`hover:text-[#37319e] size-7  cursor-pointer ${
            contentType === "DOCUMENT" ? "text-[#37319e]" : ""
          }`}
          onClick={() => {
            setContentType("DOCUMENT")
          }}
        />
        <LinkIcon
          className={`hover:text-[#37319e] size-7  cursor-pointer ${
            contentType === "LINK" ? "text-[#37319e]" : ""
          }`}
          onClick={() => {
            setContentType("LINK")
          }}
        />
      </div>
    </div>
  )
}

type LabelledInputType = {
  label: string
  placeholder: string
  required?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function LabelledInput({
  label,
  placeholder,
  required,
  onChange,
}: LabelledInputType) {
  return (
    <div className="my-3 w-80 ">
      <label className="font-semibold text-xl" htmlFor="">
        {label}
      </label>
      <br />
      <input
        onChange={onChange}
        type="text"
        className="border w-full mt-2 border-gray-300 outline-none px-2 py-3 rounded-sm"
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}
