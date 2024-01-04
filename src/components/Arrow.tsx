"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface ArrowProps {
  direction: "left" | "right";
  text: string;
  href: string;
  top: number;
  directionPercentage: number;
}

export const Arrow = ({
  href,
  text,
  direction,
  top,
  directionPercentage,
}: ArrowProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const textEl = textRef.current;

    if (textEl) {
      const textWidth = textEl.offsetWidth + 31;
      setWidth(textWidth);
    }
  }, []);

  return (
    <>
      <Link
        href={href}
        className={`absolute group text-white border border-white rounded-full flex ${
          direction === "right" ? "flex-row-reverse" : "pr-2"
        } items-center px-1 w-6 h-6 transition-all duration-500 ease-in-out`}
        style={{
          width: isHovered ? `${width}px` : "",
          left: direction === "left" ? `${directionPercentage}%` : "",
          right: direction === "right" ? `${directionPercentage}%` : "",
          top: `${top}%`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>
          {direction === "left" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
        <span
          ref={textRef}
          className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out font-bold"
        >
          {text}
        </span>
      </Link>
    </>
  );
};
