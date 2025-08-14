import type { ChangeEvent } from "react";

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f9fafb]">
      <div className="border bg-white w-[500px]  border-gray-200 rounded-2xl p-10 pb-16 flex flex-col justify-center">
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
