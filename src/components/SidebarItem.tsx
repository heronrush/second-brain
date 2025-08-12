import type { ReactElement } from "react";

export default function SidebarItem({
  icon,
  contentType,
}: {
  icon: ReactElement;
  contentType: "Tweets" | "Videos" | "Documents" | "Links" | "Tags";
}) {
  return (
    <div
      className={`flex gap-3 my-8 hover:cursor-pointer text-gray-600 hover:bg-gray-300 py-2 px-5 rounded-md transition duration-300`}
    >
      {icon}
      <p>{contentType}</p>
    </div>
  );
}
