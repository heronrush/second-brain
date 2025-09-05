import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { CrossIcon } from "../icons/CrossIcon"
import { DocumentIcon } from "../icons/DocumentIcon"
import { LinkIcon } from "../icons/LinkIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { VideoIcon } from "../icons/VideoIcon"
import { Button } from "./Button"
import { contentTypeAtom, modalAtom } from "../store/atoms/atom"
import { useState } from "react"
import axios from "axios"
import { ContentInput } from "./Input"

const BACKEND_URL = import.meta.env.VITE_API_URL

type ModalType = {
  open: boolean
  onClose: () => void
}

// new modal
export function AddContentModal({ open, onClose }: ModalType) {
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
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
    >
      {/* actual modal */}

      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={`w-[60%] rounded-xl bg-white p-6 shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} `}
      >
        {/* close button at the top right corner */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 rounded-lg bg-white p-1 text-gray-400"
        >
          <CrossIcon />
        </button>

        {/* everything else after the top right button */}
        <div className="flex flex-col items-center justify-center py-3 pt-1">
          <ContentInput
            label="Title"
            placeholder="Elon Mus, Tesla, tweet"
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />

          <ContentInput
            label="Description"
            placeholder="Elon Musk is talking about tesla"
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />

          <ContentInput
            label="Content Link"
            placeholder="https://..."
            onChange={(e) => {
              setContentLink(e.target.value)
            }}
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
