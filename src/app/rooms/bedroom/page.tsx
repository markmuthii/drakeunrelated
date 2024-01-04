import Image from "next/image";

import BedroomImage from "/public/assets/bedroom.jpg";
import { Images } from "@/components/Images";

const BedroomPage = () => {
  return (
    <>
      <Images room="bedroom" />
    </>
  );
};

export default BedroomPage;
