export function Tag({ name }: { name: string }) {
  return (
    <span className="inline-block bg-blue-100 text-gray-800 text-xs px-2 py-1 rounded-full mr-2">
      # {name}
    </span>
  );
}
