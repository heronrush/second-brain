import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { BrainIcon } from "../icons/BrainIcon";

export default function Signup() {
  const navigate = useNavigate();

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
        <LoginButton />
      </div>
      <div className="border bg-white w-[500px] mt-10  border-gray-200 rounded-2xl p-10 pb-16 flex flex-col justify-center">
        <h1 className="text-3xl">Get started</h1>
        <p className="text-gray-600 mt-2">
          Create your account and start storing in your second brain
        </p>
        <form action="" className="mt-10">
          <LabelledInput label="Full name" placeholder="John doe" type="text" />
          <LabelledInput
            label="Email"
            placeholder="john@example.com"
            type="text"
          />
          <LabelledInput label="Password" type="password" />
        </form>

        <CreateAccount />
      </div>
    </div>
  );
}

function LoginButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/login");
      }}
      className="font-semibold hover:cursor-pointer text-[#37319e] text-[18px]"
    >
      Log in
    </button>
  );
}

function CreateAccount() {
  return (
    <button className="mt-3 self-start px-7 cursor-pointer text-white bg-blue-500 transition duration-300 py-3 rounded-md font-semibold hover:bg-[#0e57c2]">
      Create account
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
