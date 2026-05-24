import Link from "next/link";

export default function BaseLogo(){
  return (
    <div
      className="inline-flex items-center gap-3"
    >
      <div
        className="
          relative
          grid
          h-10
          w-10
          place-items-center
          overflow-hidden
          rounded-2xl
          border
          border-gray-300
          from-primary
          to-upload
        "
      >
        <Link href="/" className="text-xl">
          A
        </Link>
      </div>
    </div>
  );
}