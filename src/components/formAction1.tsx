/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProductViewer from "./ProductViewer";
import Image from "next/image";
import model from "@/assets/modelIcon.svg";
import edit from "@/assets/editIcon.svg";
import { CiSearch } from "react-icons/ci";
import dropper from "@/assets/dropper.svg";
import screwcap from "@/assets/screwcap.svg";
import applicator from "@/assets/applicator.svg";
import uploadIcon from "@/assets/uploadicon.svg";
import jar from "@/assets/jar.svg";
import { Canvas } from "@react-three/fiber";

const categoryToTypesMap = {
  "Health and Wellness": [
    "Essential oils",
    "Liquid medicines",
    "Ear and eye drops",
    "CBD oil",
  ],
  "Beauty and personal care": [
    "Serums and facial oils",
    "Beard oils",
    "Hair care products",
    "Nail care products",
  ],
  "Food and beverages": ["Flavoring extracts", "Food colourings", "Condiments"],
  Other: ["E-liquids", "Art supplies", "DIY products"],
};

export const FormAction1 = () => {
  const [formData, setFormData] = useState({
    productName: "Dropper",
    category: "",
    type: "",
  });

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit");
    if (!isFirstVisit) {
      localStorage.clear();
      localStorage.setItem("isFirstVisit", "true");
    } else {
      const storedImages: string[] = JSON.parse(
        localStorage.getItem("uploadedImages") || "[]",
      );
      setImages(storedImages);
    }
  }, []);

  const handleImageError = (index: number) => {
    setImages([]);
    localStorage.removeItem("uploadedImages");
  };

  const [images, setImages] = useState<string[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedCardSize, setSelectedCardSize] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string>("");
  const [selectedColour, setSelectedColour] = useState<string>("");
  const [selectedCaptype, setSelectedCaptype] = useState<string | null>(null);
  const [selectedCapcolour, setSelectedCapcolour] = useState<string>("");
  const [bottleLocation, setBottleLocation] = useState<string>("");
  const [capLocation, setCapLocation] = useState<string>("");
  const [save, setSave] = useState<number>(0);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;

    const imageUrls: string[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (!file) continue;
      const imageUrl = URL.createObjectURL(file);
      imageUrls.push(imageUrl);
    }

    setImages((prevImages) => [...prevImages, ...imageUrls]);

    const storedImages: string[] = JSON.parse(
      localStorage.getItem("uploadedImages") || "[]",
    );
    localStorage.setItem(
      "uploadedImages",
      JSON.stringify([...storedImages, ...imageUrls]),
    );
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      category: value,
    }));
  };
  const handleTypeChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      type: value,
    }));
  };

  const handleSaveClick = () => {
    setSave(1);
  };

  const handleCardClick = (cardName: string) => {
    setSelectedCard(cardName === selectedCard ? null : cardName);
    setBottleLocation(
      cardName === "Glass Dropper Bottle" ? "models/dropper_30g.gltf" : "",
    );
  };
  const handleCardSizeClick = (cardName: string) => {
    setSelectedCardSize(cardName === selectedCardSize ? null : cardName);
  };
  const handleCardCap = (cardName: string) => {
    setSelectedCaptype(cardName === selectedCaptype ? null : cardName);
    setCapLocation(
      cardName === "screwcap" ? "models/30gCap.gltf" : "models/30gCap2.gltf",
    );
  };

  const handleMaterialClick = (avatarName: string) => {
    setSelectedMaterial(avatarName === selectedMaterial ? "" : avatarName);
  };
  const handleColourClick = (avatarName: string) => {
    setSelectedColour(avatarName === selectedColour ? "" : avatarName);
  };
  const handleCapColourClick = (avatarName: string) => {
    setSelectedCapcolour(avatarName === selectedCapcolour ? "" : avatarName);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const obj = {
      product: formData.productName,
      category: formData.category,
      type: formData.type,
      design: {
        model: selectedCard,
        size: selectedCardSize,
        material: selectedMaterial,
        colour: selectedColour,
        capType: selectedCaptype,
        capColour: selectedCapcolour,
      },
    };
    console.log(obj);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full overflow-auto">
      <h1 className="mx-6 text-xl font-semibold">Add a New Product</h1>
      <div className="mb-4 mt-4">
        <label
          htmlFor="productName"
          className="mx-6 mb-2 mt-2 block text-sm font-medium text-gray-600 "
        >
          Name of the Product
        </label>
        <Input
          type="text"
          name="productName"
          placeholder="Enter the name of the product"
          className="mx-auto w-[97%] bg-gray-100"
          value={formData.productName}
          onChange={handleInputChange}
        />
      </div>
      <h1 className="mx-6 text-xl font-semibold">Product Type</h1>
      <div className="mb-4 mt-4">
        <label
          htmlFor="category"
          className="mx-6 mb-2 mt-2 block text-sm font-medium text-gray-600"
        >
          Category
        </label>
        <Select
          name="category"
          value={formData.category}
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger className="mx-auto w-[97%] bg-gray-100 text-gray-500">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Health and Wellness">
                Health and Wellness
              </SelectItem>
              <SelectItem value="Beauty and personal care">
                Beauty and personal care
              </SelectItem>
              <SelectItem value="Food and beverages">
                Food and beverages
              </SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="type"
          className="mx-6 mb-2 mt-2 block text-sm font-medium text-gray-600"
        >
          Type Of Product
        </label>
        <Select
          name="type"
          value={formData.type}
          onValueChange={handleTypeChange}
        >
          <SelectTrigger className="mx-auto w-[97%] bg-gray-100 text-gray-500">
            <SelectValue placeholder="Select a Type" />
          </SelectTrigger>
          <SelectContent>
            {formData.category &&
              (
                categoryToTypesMap[
                  formData.category as keyof typeof categoryToTypesMap
                ] as string[]
              ).map((type, index) => (
                <SelectGroup key={index}>
                  <SelectItem value={type}>{type}</SelectItem>
                </SelectGroup>
              ))}
          </SelectContent>
        </Select>
      </div>
      <h1 className="mx-6 text-xl font-semibold">Product Design</h1>
      <div className="flex">
        <Tabs defaultValue="model" className="mx-6 mt-4 w-[50%]">
          <TabsList className="w-[70%]">
            <TabsTrigger value="model" className="flex w-[50%] gap-x-2">
              <Image src={model} alt="model" />
              <span>Model</span>
            </TabsTrigger>
            <TabsTrigger value="edit" className="flex w-[50%] gap-x-2">
              <Image src={edit} alt="edit" />
              <span>Edit</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex w-[50%] gap-x-2">
              <span>+ Upload</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="edit">
            <div className="flex gap-x-4">
              <Card
                className={`mt-4 flex w-fit cursor-pointer flex-col items-center px-4 ${
                  selectedCardSize === "30 Ml (10z)"
                    ? "border-2 border-primary"
                    : ""
                }`}
                onClick={() => handleCardSizeClick("30 Ml (10z)")}
              >
                <CardContent className="">
                  <Image src={dropper} alt="dropper" />
                </CardContent>
                <CardFooter className="text-sm">30 mL (1 oz)</CardFooter>
              </Card>
              <Card
                className={`mt-4 flex w-fit cursor-pointer flex-col items-center px-2 ${
                  selectedCardSize === "15 mL (0.5 oz)"
                    ? "border-2 border-primary"
                    : ""
                }`}
                onClick={() => handleCardSizeClick("15 mL (0.5 oz)")}
              >
                <CardContent className="">
                  <Image src={dropper} alt="dropper" />
                </CardContent>
                <CardFooter className="text-sm">15 mL (0.5 oz)</CardFooter>
              </Card>
              <Card
                className={`mt-4 flex w-fit cursor-pointer flex-col items-center px-4 ${
                  selectedCardSize === "60 mL (2 oz)"
                    ? "border-2 border-primary"
                    : ""
                }`}
                onClick={() => handleCardSizeClick("60 mL (2 oz)")}
              >
                <CardContent className="">
                  <Image src={dropper} alt="60ml" />
                </CardContent>
                <CardFooter className="text-sm">60 mL (2oz)</CardFooter>
              </Card>
            </div>
            <div>
              <h1 className="mt-4 text-base text-gray-600">Materials</h1>
              <div className="mt-2 flex gap-x-2">
                <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedMaterial === "Transparent" ? "border-primary" : ""
                  }`}
                  onClick={() => handleMaterialClick("Transparent")}
                >
                  <AvatarFallback className="bg-white"></AvatarFallback>
                </Avatar>
                <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedMaterial === "Opaque" ? "border-primary" : ""
                  }`}
                  onClick={() => handleMaterialClick("Opaque")}
                >
                  <AvatarFallback className="bg-[#D9D9D9]"></AvatarFallback>
                </Avatar>
                <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedMaterial === "Frosted" ? "border-primary" : ""
                  }`}
                  onClick={() => handleMaterialClick("Frosted")}
                >
                  <AvatarFallback className="bg-[#888]"></AvatarFallback>
                </Avatar>
              </div>
              <h1 className="mt-4 text-base text-gray-600">Colour</h1>
              <div className="mt-2 flex gap-x-2">
                <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedColour === "white" ? "border-primary" : ""
                  }`}
                  onClick={() => handleColourClick("white")}
                >
                  <AvatarFallback className="bg-white"></AvatarFallback>
                </Avatar>
                <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedColour === "teal" ? "border-primary" : ""
                  }`}
                  onClick={() => handleColourClick("teal")}
                >
                  <AvatarFallback className="bg-[#0020C2]"></AvatarFallback>
                </Avatar>
                <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedColour === "yellow" ? "border-primary" : ""
                  }`}
                  onClick={() => handleColourClick("yellow")}
                >
                  <AvatarFallback className="bg-[#C97F0E]"></AvatarFallback>
                </Avatar>
                <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedColour === "green" ? "border-primary" : ""
                  }`}
                  onClick={() => handleColourClick("green")}
                >
                  <AvatarFallback className="bg-[#007254]"></AvatarFallback>
                </Avatar>
                {/* <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedColour === "pink" ? "border-primary" : ""
                  }`}
                  onClick={() => handleColourClick("pink")}
                >
                  <AvatarFallback className="bg-[#FF12D3]"></AvatarFallback>
                </Avatar> */}
              </div>
              <h1 className="mt-4 text-base text-gray-600">Cap/Closure Type</h1>
              <div className="flex gap-x-4">
                <Card
                  className={`mt-4 flex w-fit cursor-pointer flex-col items-center px-2 pt-4 ${
                    selectedCaptype === "screwcap"
                      ? "border-2 border-primary"
                      : ""
                  }`}
                  onClick={() => handleCardCap("screwcap")}
                >
                  <CardContent className="">
                    <Image src={screwcap} alt="screwcap" />
                  </CardContent>
                  <CardFooter className="text-sm">Screw Cap</CardFooter>
                </Card>
                <Card
                  className={`mt-4 flex w-fit cursor-pointer flex-col items-center px-2 ${
                    selectedCaptype === "applicator"
                      ? "border-2 border-primary"
                      : ""
                  }`}
                  onClick={() => handleCardCap("applicator")}
                >
                  <CardContent className="">
                    <Image src={applicator} alt="applicator" />
                  </CardContent>
                  <CardFooter className="text-sm">Applicator</CardFooter>
                </Card>
              </div>
              <h1 className="mt-4 text-base text-gray-600">
                Cap/Closure Colour
              </h1>
              <div className="mt-2 flex gap-x-2">
                <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedCapcolour === "white" ? "border-primary" : ""
                  }`}
                  onClick={() => handleCapColourClick("white")}
                >
                  <AvatarFallback className="bg-white"></AvatarFallback>
                </Avatar>
                <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedCapcolour === "teal" ? "border-primary" : ""
                  }`}
                  onClick={() => handleCapColourClick("teal")}
                >
                  <AvatarFallback className="bg-[#0020C2]"></AvatarFallback>
                </Avatar>
                <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedCapcolour === "yellow" ? "border-primary" : ""
                  }`}
                  onClick={() => handleCapColourClick("yellow")}
                >
                  <AvatarFallback className="bg-[#C97F0E]"></AvatarFallback>
                </Avatar>
                <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedCapcolour === "green" ? "border-primary" : ""
                  }`}
                  onClick={() => handleCapColourClick("green")}
                >
                  <AvatarFallback className="bg-[#007254]"></AvatarFallback>
                </Avatar>
                {/* <Avatar
                  className={`cursor-pointer border-[2px] ${
                    selectedCapcolour === "pink" ? "border-primary" : ""
                  }`}
                  onClick={() => handleCapColourClick("pink")}
                >
                  <AvatarFallback className="bg-[#FF12D3]"></AvatarFallback>
                </Avatar> */}
              </div>
            </div>
            <div className=" mb-4 flex gap-x-4">
              <Button
                type="submit"
                className="mt-4 w-[20%]"
                onClick={handleSaveClick}
              >
                Save
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="model">
            <div className="relative mt-4 w-[55%]">
              <CiSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
            <div className="mb-4 flex gap-x-4">
              <Card
                className={`mt-4 flex w-fit cursor-pointer flex-col items-center ${
                  selectedCard === "Glass Dropper Bottle"
                    ? "border-2 border-primary"
                    : ""
                }`}
                onClick={() => handleCardClick("Glass Dropper Bottle")}
              >
                <CardContent className="">
                  <Image src={dropper} alt="dropper" />
                </CardContent>
                <CardFooter className="text-sm">
                  Glass Dropper Bottle
                </CardFooter>
              </Card>
              <Card
                className={`mt-4 flex w-fit cursor-pointer flex-col items-center px-3 ${
                  selectedCard === "Glass Cream Jar"
                    ? "border-2 border-primary"
                    : ""
                }`}
                onClick={() => handleCardClick("Glass Cream Jar")}
              >
                <CardContent className="">
                  <Image src={jar} alt="jar" />
                </CardContent>
                <CardFooter className="text-sm">Glass Cream Jar</CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="upload">
            <div className="my-4 w-fit rounded-lg bg-white px-4 py-2">
              
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                style={{ display: "none" }}
                id="imageUploadInput"
              />
              <label
                htmlFor="imageUploadInput"
                className="mt-8 cursor-pointer text-[#883DCF]"
              >
                + Add images
              </label>
            </div>
            <div className="flex flex-wrap w-72 gap-4 my-4">
              {images.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Uploaded image ${index}`}
                  className="h-32 w-32 object-cover"
                  onError={() => handleImageError(index)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        {selectedCard !== null && (
          <div className="relative mr-4 h-[500px] w-[60%] rounded-2xl bg-white pt-20 drop-shadow-2xl">
            <Canvas
              style={{
                height: "500px",
              }}
            >
              <ProductViewer
                bottleLocation={bottleLocation}
                bottleMaterial={selectedMaterial}
                bottleColor={selectedColour}
                labelImageLocation={""}
                labelVisible={false}
                capLocation={capLocation}
                capColor={selectedCapcolour}
                capVisible={selectedCaptype !== null ? true : false}
                setSaveClicked={setSave}
                saveClicked={save}
                typeofProduct={formData.type}
                selectedCategory={formData.category}
                productName={formData.productName}
              />
            </Canvas>
          </div>
        )}
      </div>
    </form>
  );
};
