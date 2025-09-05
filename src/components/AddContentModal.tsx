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
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-[rgba(212,211,211,0.5)]">
      {/* centered, content creation modal */}
      <div className="z-10 w-2/3 rounded-lg border-gray-300 bg-white pb-10 text-black shadow-md">
        {/* top right button to close the modal */}
        <div className="m-3 flex justify-end">
          <button
            onClick={() => {
              setShowModal(false)
            }}
          >
            <CrossIcon />
          </button>
        </div>

        {/* everything else after the top right button */}
        <div className="flex flex-col items-center justify-center py-3 pt-1">
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
            placeholder="https://..."
          />

          <ContentType />

          <Button
            size="lg"
            variant="secondary"
            text="Add content"
            onClick={() => {
              addContentRequest()
            }}
            className="mt-4 flex w-80 justify-center"
          />
        </div>
      </div>
    </div>
  )
}

function ContentType() {
  const [contentType, setContentType] = useAtom(contentTypeAtom)

  return (
    <div className="mb-3 w-80">
      <label className="mb-5 text-xl font-semibold" htmlFor="">
        Content type
      </label>
      <div className="mt-3 flex items-center justify-between gap-3 py-1">
        <TwitterIcon
          className={`size-7 cursor-pointer hover:text-[#37319e] ${
            contentType === "TWEET" ? "text-[#37319e]" : ""
          }`}
          onClick={() => {
            setContentType("TWEET")
          }}
        />
        <VideoIcon
          className={`size-7 cursor-pointer hover:text-[#37319e] ${
            contentType === "VIDEO" ? "text-[#37319e]" : ""
          }`}
          onClick={() => {
            setContentType("VIDEO")
          }}
        />
        <DocumentIcon
          className={`size-7 cursor-pointer hover:text-[#37319e] ${
            contentType === "DOCUMENT" ? "text-[#37319e]" : ""
          }`}
          onClick={() => {
            setContentType("DOCUMENT")
          }}
        />
        <LinkIcon
          className={`size-7 cursor-pointer hover:text-[#37319e] ${
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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function LabelledInput({ label, placeholder, onChange }: LabelledInputType) {
  return (
    <div className="my-3 w-2/3">
      <label className="text-xl font-semibold" htmlFor="">
        {label}
      </label>
      <br />
      <input
        onChange={onChange}
        type="text"
        className="mt-2 w-full rounded-sm border border-gray-300 px-2 py-3 outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  )
}
