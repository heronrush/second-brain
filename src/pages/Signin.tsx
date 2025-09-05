import { Suspense, useState } from "react"
import { BrainIcon } from "../icons/BrainIcon"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { LoadingSpinner } from "../components/LoadingSpinner"
import { Input } from "../components/Input"

const BACKEND_URL = import.meta.env.VITE_API_URL

export default function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  // collects all the data from the form inputs and sends them to the backend for signup
  async function sendSigninRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        email: email,
        password: password,
      })

      if (response) {
        alert("success")
        console.log("success")

        localStorage.setItem("token", response.data.token)
        localStorage.setItem("userId", response.data.userId)

        navigate("/dashboard")
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 403) {
          alert("wrong email or password")
        } else {
          alert("server error")
        }
      }
    }
  }

  // return <LoadingSpinner />

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
        <SignupButton />
      </div>
      <div className="mt-20 flex w-[500px] flex-col justify-center rounded-2xl border border-gray-200 bg-white p-10 pb-16">
        <h1 className="text-3xl">Log in</h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault()
            sendSigninRequest()
          }}
          className="mt-10"
        >
          <Input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            label="Email"
            placeholder="john@example.com"
            type="text"
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            label="Password"
            type="password"
          />
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        </form>
      </div>
    </div>
  )
}

function SignupButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => {
        navigate("/signup")
      }}
      className="text-[18px] font-semibold text-[#37319e] hover:cursor-pointer"
    >
      Create account
    </button>
  )
}

function Login() {
  return (
    <button
      type="submit"
      className="mt-3 cursor-pointer self-start rounded-md bg-blue-500 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#0e57c2]"
    >
      Log in
    </button>
  )
}
