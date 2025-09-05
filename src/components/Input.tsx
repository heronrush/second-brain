import type { ChangeEvent, ComponentPropsWithoutRef } from "react"

type InputType = {
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
  ...props
}: InputType) {
  return (
    <div className="my-3">
      <label htmlFor="" className={`text-sm font-semibold`}>
        {label}
      </label>
      <br />
      <input
        className={`mt-3 w-full rounded-md border border-gray-200 px-3 py-2 transition duration-300 outline-none focus:border-sky-700`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}

type ContentInputType = {
  label: string
  placeholder: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export function ContentInput({
  label,
  placeholder,
  onChange,
}: ContentInputType) {
  return (
    <div className="my-3 w-2/3">
      <label className="text-xl font-semibold" htmlFor="">
        {label}
      </label>
      <br />
      <input
        onChange={onChange}
        type="text"
        className={`mt-3 w-full rounded-md border border-gray-200 px-3 py-2 transition duration-300 outline-none focus:border-sky-700`}
        placeholder={placeholder}
        required
      />
    </div>
  )
}
