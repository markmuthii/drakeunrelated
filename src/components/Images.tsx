"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import FrontImage from "/public/assets/front.jpg";
import FrontImage100 from "/public/assets/front-100.jpg";
import BedroomImage from "/public/assets/bedroom.jpg";
import BedroomImage100 from "/public/assets/bedroom-100.jpg";

export const Images = ({ room }: { room: "front" | "bedroom" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Image
        src={room === "front" ? FrontImage100 : BedroomImage100}
        alt={room}
        className={`w-full h-full absolute top-0 left-0 pointer-events-none blur-md transition-all duration-900 ease-in-out z-10 ${
          isLoaded ? "opacity-0 blur-none" : "opacity-100"
        }`}
      />
      <Image
        src={room === "front" ? FrontImage : BedroomImage}
        alt={room}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};
