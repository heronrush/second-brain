import { useState, type ChangeEvent } from "react";
import { BrainIcon } from "../icons/BrainIcon";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_API_URL;

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // collects all the data from the form inputs and sends them to the backend for signup
  async function sendSigninRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        email: email,
        password: password,
      });

      if (response) {
        alert("success");
        console.log("success");

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);

        navigate("/dashboard");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 403) {
          alert("wrong email or password");
        } else {
          alert("server error");
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-center h-screen bg-[#f9fafb]">
      <div className="flex justify-between px-20 pt-2 w-full">
        <button
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <BrainIcon />
        </button>
        <SignupButton />
      </div>
      <div className="border bg-white w-[500px] mt-20  border-gray-200 rounded-2xl p-10 pb-16 flex flex-col justify-center">
        <h1 className="text-3xl">Log in</h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            sendSigninRequest();
          }}
          className="mt-10"
        >
          <LabelledInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="Email"
            placeholder="john@example.com"
            type="text"
          />
          <LabelledInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
            type="password"
          />
          <Login />
        </form>
      </div>
    </div>
  );
}

function SignupButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/signup");
      }}
      className="font-semibold hover:cursor-pointer text-[#37319e] text-[18px]"
    >
      Create account
    </button>
  );
}

function Login() {
  return (
    <button
      type="submit"
      className="mt-3 self-start px-7 cursor-pointer text-white bg-blue-500 transition duration-300 py-3 rounded-md font-semibold hover:bg-[#0e57c2]"
    >
      Log in
    </button>
  );
}

type LabelledInputType = {
  label: string;
  type: "text" | "password";
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

function LabelledInput({
  label,
  type,
  placeholder,
  onChange,
}: LabelledInputType) {
  return (
    <div className="my-3">
      <label htmlFor="" className="text-sm font-semibold">
        {label}
      </label>
      <br />
      <input
        className="border border-gray-200 mt-3 focus:border-sky-700 transition duration-300 outline-none w-full rounded-md px-3 py-2"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
