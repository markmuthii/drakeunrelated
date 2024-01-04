import Link from "next/link";

export interface PulsingCircleProps {
  href: string;
  text: string;
  top: number;
  left: number;
}

export const PulsingCircle = ({
  href,
  text,
  top,
  left,
}: PulsingCircleProps) => {
  return (
    <>
      <div
        className="group absolute cursor-pointer flex flex-col items-center justify-center"
        style={{ left: `${left}%`, top: `${top}%` }}
      >
        <div className="circle w-4 h-4 rounded-full bg-white relative group-hover:opacity-0 group-hover:-z-10">
          <span className="block absolute h-full w-full rounded-full bg-white/5 border border-white opacity-75 animate-ping-xl group-hover:animate-none"></span>
        </div>
        <Link
          href={href}
          className="link flex flex-col items-center justify-center opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:-mt-4 transition-all duration-500 ease-in-out"
        >
          <span className="-mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="#ffffff"
            >
              <path d="M24 22h-24l12-20z" />
            </svg>
          </span>
          <div className="bg-white px-4 py-1 rounded-full font-bold">
            <span className="text">{text}</span>
          </div>
        </Link>
      </div>
    </>
  );
};
