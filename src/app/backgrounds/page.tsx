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
import axios from "axios";
import { Button } from "@/components/ui/button";

function BackgroundImages() {
  const [selectedID, setSelectedID] = useState<number | null>(null);
  const handleImageClick = (index: number) => {
    if (selectedID === index) {
      setSelectedID(null);
    } else if (selectedID != index) {
      setSelectedID(index);
    }
  };

  // const handleSubmit = () => {
  //   try {
  //     axios.post("link", { product: selectedID });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const handleSubmit = () => {
    if (selectedID !== null) {
      alert("Submitted");
      console.log("Selected Product ID: ", selectedID);
    } else {
      alert("NULL VALUE SUBMITTED");
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
                selectedID === 1
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(1)}
            />
            <Image
              src={bg5}
              alt="bg5"
              className={
                selectedID === 5
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(5)}
            />
            <Image
              src={bg6}
              alt="bg6"
              className={
                selectedID === 6
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
                selectedID === 2
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(2)}
            />
            <Image
              src={bg7}
              alt="bg7"
              className={
                selectedID === 7
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(7)}
            />
            <Image
              src={bg8}
              alt="bg8"
              className={
                selectedID === 8
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(8)}
            />
            <Image
              src={bg9}
              alt="bg9"
              className={
                selectedID === 9
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
                selectedID === 3
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(3)}
            />
            <Image
              src={bg10}
              alt="bg10"
              className={
                selectedID === 10
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(10)}
            />
            <Image
              src={bg11}
              alt="bg11"
              className={
                selectedID === 11
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(11)}
            />

            <Image
              src={bg12}
              alt="bg12"
              className={
                selectedID === 12
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
                selectedID === 4
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(4)}
            />
            <Image
              src={bg13}
              alt="bg13"
              className={
                selectedID === 13
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(13)}
            />
            <Image
              src={bg14}
              alt="bg14"
              className={
                selectedID === 14
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(14)}
            />
            <Image
              src={bg15}
              alt="bg15"
              className={
                selectedID === 15
                  ? "rounded-xl border-[3px] border-primary hover:cursor-pointer"
                  : "rounded-xl hover:cursor-pointer"
              }
              onClick={() => handleImageClick(15)}
            />
          </div>
        </div>
        <div className="mb-6 flex w-full items-center justify-center pb-6">
          <Button variant="default" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default BackgroundImages;
