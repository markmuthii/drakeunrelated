import Image from "next/image";

import { Arrow, ArrowProps } from "@/components/Arrow";
import { PulsingCircle, PulsingCircleProps } from "@/components/PulsingCircle";
import { Images } from "@/components/Images";

const arrows: ArrowProps[] = [
  {
    direction: "left",
    text: "Enter Bedroom",
    href: "/rooms/bedroom",
    directionPercentage: 44,
    top: 14,
  },
  {
    direction: "left",
    text: "Enter Studio",
    href: "/rooms/bedroom",
    directionPercentage: 29,
    top: 75,
  },
  {
    direction: "right",
    text: "Enter Lounge",
    href: "/rooms/bedroom",
    directionPercentage: 25,
    top: 21,
  },
  {
    direction: "right",
    text: "Enter El Chico Studios",
    href: "/rooms/bedroom",
    directionPercentage: 15,
    top: 50,
  },
];

const circles: PulsingCircleProps[] = [
  {
    href: "/products/jeep",
    text: "White Jeep",
    top: 53,
    left: 54,
  },
  {
    href: "/products/jeep",
    text: "Black Jeep",
    top: 80,
    left: 78.5,
  },
];

const FrontPage = () => {
  return (
    <>
      <Images room="front" />
      <div className="absolute w-full h-full top-0 left-0">
        {arrows.map((arrow, i) => (
          <Arrow key={i} {...arrow} />
        ))}

        {circles.map((circle, i) => (
          <PulsingCircle key={i} {...circle} />
        ))}
      </div>
    </>
  );
};

export default FrontPage;
