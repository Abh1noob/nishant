/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import pixlab from "@/assets/pixlabs.svg";
import { FaFileArrowUp } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

function SideNav() {
  return (
    <div className="w-[20%] hidden lg:block bg-white bg-white min-h-screen overflow-y-auto">
      <div className="flex items-center gap-x-2 pl-6 pt-6">
        <Image src={pixlab} alt="pixlab" height={34} width={34} />
        <span className="text-2xl font-semibold">Pixlab</span>
      </div>
      <div className="flex-col pt-10">
        <div className="flex items-center gap-x-2 pl-6 py-3 cursor-pointer bg-[#F4ECFB] text-[#883DCF] border-l-4 border-[#883DCF]">
          <FaFileArrowUp />
          <span>Create</span>
        </div>
        <div className="flex items-center gap-x-2 pl-6 py-3 cursor-pointer text-[#858D9D] hover:bg-[#F4ECFB] hover:text-[#883DCF] hover:border-l-4 hover:border-[#883DCF]">
          <FaCartShopping />
          <span>Manage</span>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
