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
          h-14
          w-14
          place-items-center
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          from-primary
          to-upload
        "
      >
        <Link href="/" className="text-2xl font-black">
          A
        </Link>
      </div>
    </div>
  );
}