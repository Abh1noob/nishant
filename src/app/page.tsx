/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { FormAction1 } from "@/components/formAction1";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import filter from "@/assets/filtericon.svg";
import { useEffect, useState } from "react";
import { postData } from "@/services/imageService";
import { type BodyResponse } from "@/interfaces/interfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerOverlay,
} from "@/components/ui/drawer";
import { IoMdClose } from "react-icons/io";

export default function HomePage() {
  const [data, setData] = useState<BodyResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await postData();
        const arr: BodyResponse[] = JSON.parse(response.body);
        setData(arr);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
  }, []);

  const handleCardClick = () => {
    setIsChecked(!isChecked);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="px-6 pt-6">
      <div className="flex items-center justify-between pb-6">
        <p className="text-2xl">Select your product(s)</p>
        {data.length > 0 && (
          <Button onClick={() => setIsDrawerOpen(true)}>
            Add a new product
          </Button>
        )}
      </div>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerContent className="bg-[#F9F9FC]">
          <IoMdClose onClick={closeDrawer} className="absolute right-0 cursor-pointer mt-2 mr-2" />
          <FormAction1 />
        </DrawerContent>
      </Drawer>
      <div className="flex items-center justify-between">
        <div className="relative w-[27%]">
          <CiSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search files..." className="pl-8" />
        </div>
        <Button variant="outline" className="flex items-center gap-x-3">
          <Image src={filter} alt="filter" height={16} width={16} />
          <span>Filters</span>
        </Button>
      </div>
      <div className="py-6">
        <span className="text-xl font-semibold">Products </span> - Select
        product(s) to create content for
      </div>
      {isLoading ? (
        <div className="flex h-32 items-center justify-center">Loading...</div>
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <Card
            key={index}
            className={`w-fit cursor-pointer ${isChecked ? "border border-primary" : ""}`}
            onClick={handleCardClick}
          >
            <CardContent className="mt-3">
              <Checkbox
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <Image
                src={`https://objectcaps.s3.ap-south-1.amazonaws.com/${item.name}.png`}
                alt="dropperimg"
                width={150}
                height={150}
              />
            </CardContent>
            <CardFooter className="flex flex-col">
              <p>{item.type}</p>
              <p className="text-sm text-[#667085]">{item.name}</p>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="flex flex-col items-center rounded-lg bg-white py-7 text-center text-sm text-[#667085]">
          <p>No Products!</p>
          <p>Please select “Add a New Product” above to add.</p>
          <Button className="mt-4" onClick={() => setIsDrawerOpen(true)}>
            Add a new product
          </Button>
        </div>
      )}
    </div>
  );
}
