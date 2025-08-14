import type { ChangeEvent } from "react";

export default function Signin() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f9fafb]">
      <div className="border bg-white w-[500px]  border-gray-200 rounded-2xl p-10 pb-16 flex flex-col justify-center">
        <h1 className="text-3xl">Log in</h1>
        <form action="" className="mt-10">
          <LabelledInput
            label="Email"
            placeholder="john@example.com"
            type="text"
          />
          <LabelledInput label="Password" type="password" />
        </form>

        <Login />
      </div>
    </div>
  );
}

function Login() {
  return (
    <button className="mt-3 self-start px-7 cursor-pointer text-white bg-blue-500 transition duration-300 py-3 rounded-md font-semibold hover:bg-[#0e57c2]">
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
