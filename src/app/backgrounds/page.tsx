"use client";
import Image from "next/image";
import bg1 from "@/assets/bg1.svg";
import bg2 from "@/assets/bg2.svg";
import bg3 from "@/assets/bg3.svg";
import bg4 from "@/assets/bg4.svg";
import bg5 from "@/assets/bg5.svg";
import bg6 from "@/assets/bg6.svg";
import bg7 from "@/assets/bg7.svg";
import bg8 from "@/assets/bg8.svg";
import bg9 from "@/assets/bg9.svg";
import bg10 from "@/assets/bg10.svg";
import bg11 from "@/assets/bg11.svg";
import bg12 from "@/assets/bg12.svg";
import bg13 from "@/assets/bg13.svg";
import bg14 from "@/assets/bg14.svg";
import bg15 from "@/assets/bg15.svg";
import { useState } from "react";

function BackgroundImages() {
  const [selectedImageIndex1, setSelectedImageIndex1] = useState<number | null>(
    null,
  );
  const handleImageClick = (index: number) => {
    if (selectedImageIndex1 === index) {
      setSelectedImageIndex1(null);
    } else if (selectedImageIndex1 != index) {
      setSelectedImageIndex1(index);
    }
  };
  return (
    <>
      <div className="mx-auto mt-4 w-fit rounded-2xl bg-white">
        <div className="flex gap-x-5 p-6 opacity-50">
          <span>3D Renders</span>
          <span>Nature</span>
          <span>Travel</span>
          <span>Animals</span>
          <span>People</span>
          <span>Food and Drink</span>
          <span>Arts and Culture</span>
        </div>
        <div className="mb-6 flex gap-x-8 px-9 pb-6">
          <div className="flex w-[24%] flex-col gap-y-4">
            <Image
              src={bg1}
              alt="bg1"
              className={
                selectedImageIndex1 === 1
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(1)}
            />
            <Image
              src={bg5}
              alt="bg5"
              className={
                selectedImageIndex1 === 5
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(5)}
            />
            <Image
              src={bg6}
              alt="bg6"
              className={
                selectedImageIndex1 === 6
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(6)}
            />
          </div>
          <div className="flex w-[24%] flex-col gap-y-4">
            <Image
              src={bg2}
              alt="bg2"
              className={
                selectedImageIndex1 === 2
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(2)}
            />
            <Image
              src={bg7}
              alt="bg7"
              className={
                selectedImageIndex1 === 7
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(7)}
            />
            <Image
              src={bg8}
              alt="bg8"
              className={
                selectedImageIndex1 === 8
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(8)}
            />
            <Image
              src={bg9}
              alt="bg9"
              className={
                selectedImageIndex1 === 9
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(9)}
            />
          </div>
          <div className="flex w-[24%] flex-col gap-y-4">
            <Image
              src={bg3}
              alt="bg3"
              className={
                selectedImageIndex1 === 3
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(3)}
            />
            <Image
              src={bg10}
              alt="bg10"
              className={
                selectedImageIndex1 === 10
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(10)}
            />
            <Image
              src={bg11}
              alt="bg11"
              className={
                selectedImageIndex1 === 11
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(11)}
            />

            <Image
              src={bg12}
              alt="bg12"
              className={
                selectedImageIndex1 === 12
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(12)}
            />
          </div>
          <div className="flex w-[24%] flex-col gap-y-4">
            <Image
              src={bg4}
              alt="bg4"
              className={
                selectedImageIndex1 === 4
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(4)}
            />
            <Image
              src={bg13}
              alt="bg13"
              className={
                selectedImageIndex1 === 13
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(13)}
            />
            <Image
              src={bg14}
              alt="bg14"
              className={
                selectedImageIndex1 === 14
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(14)}
            />
            <Image
              src={bg15}
              alt="bg15"
              className={
                selectedImageIndex1 === 15
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(15)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BackgroundImages;
