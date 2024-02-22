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

function BackgroundImages() {
  return (
    <>
      <div className="mx-auto mt-4 rounded-2xl bg-white w-fit">
        <div className="flex gap-x-5 p-6 opacity-50">
          <span>3D Renders</span>
          <span>Nature</span>
          <span>Travel</span>
          <span>Animals</span>
          <span>People</span>
          <span>Food and Drink</span>
          <span>Arts and Culture</span>
        </div>
        <div className="px-9 flex pb-6 mb-6 gap-x-8">
          <div className="flex w-[24%] flex-col gap-y-4">
            <Image src={bg1} alt="bg1" className="rounded-xl" />
            <Image src={bg5} alt="bg5" className="rounded-xl" />
            <Image src={bg6} alt="bg6" className="rounded-xl" />
          </div>
          <div className="flex w-[24%] flex-col gap-y-4">
            <Image src={bg2} alt="bg2" className="rounded-xl" />
            <Image src={bg7} alt="bg7" className="rounded-xl" />
            <Image src={bg8} alt="bg8" className="rounded-xl" />
            <Image src={bg9} alt="bg9" className="rounded-xl" />
          </div>
          <div className="flex w-[24%] flex-col gap-y-4">
            <Image src={bg3} alt="bg3" className="rounded-xl" />
            <Image src={bg10} alt="bg10" className="rounded-xl" />
            <Image src={bg11} alt="bg11" className="rounded-xl" />
            <Image src={bg12} alt="bg12" className="rounded-xl" />
          </div>
          <div className="flex w-[24%] flex-col gap-y-4">
            <Image src={bg4} alt="bg4" className="rounded-xl" />
            <Image src={bg13} alt="bg13" className="rounded-xl" />
            <Image src={bg14} alt="bg14" className="rounded-xl" />
            <Image src={bg15} alt="bg15" className="rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BackgroundImages;
