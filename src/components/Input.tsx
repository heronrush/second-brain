import type { ChangeEvent, ComponentPropsWithoutRef } from "react"

type LabelledInputType = {
  label: string
  type: "text" | "password"
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
} & ComponentPropsWithoutRef<"input">

export function Input({
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
        className="mt-3 w-full rounded-md border border-gray-200 px-3 py-2 transition duration-300 outline-none focus:border-sky-700"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  )
}
