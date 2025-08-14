import { BrainIcon } from "../icons/BrainIcon";
import { Button } from "./Button";

export default function Topbar() {
  return (
    <div className="py-5 flex justify-between border-b border-gray-300 px-40">
      <div className="flex gap-4 items-center">
        <BrainIcon />
        <h1 className="text-2xl text-[#37319e] font-semibold">Second Brain</h1>
      </div>

      <div className="flex gap-10">
        <NavbarItem text="Pricing" />
        <NavbarItem
          text="Login"
          onClick={() => {
            alert("login");
          }}
        />

        <GetStarted />
      </div>
    </div>
  );
}

type NavbarItem = {
  text: string;
  className?: string;
  onClick?: () => void;
};

function NavbarItem({ text, className, onClick }: NavbarItem) {
  return (
    <button
      onClick={onClick}
      className={`font-semibold cursor-pointer text-[18px] text-[#37319e]  hover:text-[#7a76c0] ${className}`}
    >
      {text}
    </button>
  );
}

function GetStarted() {
  return (
    <Button
      variant="primary"
      size="md"
      text="Get started"
      onClick={() => {
        alert("jaofei");
      }}
    />
  );
}
