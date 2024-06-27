"use client";
import Image from "next/image";
import { ImagesSlider } from "@/components/ui/ImageSlider";
import { motion } from "framer-motion";
import Logo from "../../public/logo.png";

export default function Home() {
  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <ImagesSlider images={images} className="h-screen">
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <Image src={Logo} alt={"Tribe&Thread"} className="h-[60px] lg:h-[100px] w-fit" />
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>COMING SOON</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
