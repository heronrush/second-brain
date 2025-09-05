import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BrainIcon } from "../icons/BrainIcon"
import axios from "axios"
import { useSetAtom } from "jotai"
import { userIdAtom } from "../store/atoms/contentAtom"
import { Input } from "../components/Input"

const BACKEND_URL = import.meta.env.VITE_API_URL

export default function Signup() {
  const navigate = useNavigate()

  // from jotai atoms
  const setUserIdAtomFromBackend = useSetAtom(userIdAtom)

  // all local state variables
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // collects all the data from the form inputs and sends them to the backend for signup
  async function sendSignupRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        fullname: fullname,
        email: email,
        password: password,
      })

      if (response.status === 200) {
        alert("success")
        console.log("success")

        localStorage.setItem("token", response.data.token)
        localStorage.setItem("userId", response.data.userId)
        setUserIdAtomFromBackend(response.data.userId)

        navigate("/dashboard")
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 403) {
          alert("user already exists")
        } else if (err.response?.status === 411) {
          alert("error in inputs")
        } else {
          alert("server error")
        }
      } else {
        alert("some error occurred")
      }
    }
  }

  // final jsx returned
  return (
    <div className="flex h-screen flex-col items-center bg-[#f9fafb]">
      <div className="flex w-full justify-between px-20 pt-2">
        <button
          className="cursor-pointer"
          onClick={() => {
            navigate("/")
          }}
        >
          <BrainIcon />
        </button>
        <LoginButton />
      </div>
      <div className="mt-10 flex w-[500px] flex-col justify-center rounded-2xl border border-gray-200 bg-white p-10 pb-16">
        <h1 className="text-3xl">Get started</h1>
        <p className="mt-2 text-gray-600">
          Create your account and start storing in your second brain
        </p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault()
            sendSignupRequest()
          }}
          className="mt-10"
        >
          <Input
            onChange={(e) => {
              setFullname(e.target.value)
            }}
            label="Full name"
            placeholder="eg. John doe"
            type="text"
            required
          />
          <Input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            label="Email"
            placeholder="eg. john@example.com"
            type="text"
            required
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            label="Password"
            type="password"
            required
          />
          <CreateAccount />
        </form>
      </div>
    </div>
  )
}

function LoginButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => {
        navigate("/login")
      }}
      className="text-[18px] font-semibold text-[#37319e] hover:cursor-pointer"
    >
      Log in
    </button>
  )
}

function CreateAccount() {
  return (
    <button
      type="submit"
      className="mt-3 cursor-pointer self-start rounded-md bg-blue-500 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#0e57c2]"
    >
      Create account
    </button>
  )
}
