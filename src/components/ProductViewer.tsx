import { useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Stage,
  Environment,
  OrbitControls,
  TransformControls,
  Html,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useRef } from "react";
// import './productviewer.css';
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import SaveProduct from "./save_product";
import React from "react";

interface Props {
  bottleLocation: string;
  bottleMaterial: string;
  bottleColor: string;
  labelImageLocation: any;
  labelVisible: boolean;
  capLocation: string;
  capColor: string;
  capVisible: boolean;
  setSaveClicked: React.Dispatch<React.SetStateAction<number>>;
  saveClicked: number;
  typeofProduct: string;
  selectedCategory: string;
  productName: string;
}

// React.FC<Props>

const ProductViewer: React.FC<Props> = ({
  bottleLocation,
  bottleMaterial,
  bottleColor,
  labelImageLocation,
  labelVisible,
  capLocation,
  capVisible,
  capColor,
  setSaveClicked,
  saveClicked,
  typeofProduct,
  selectedCategory,
  productName,
}) => {
  console.log("capcoloe", capColor);
  console.log(" bottleColor", bottleColor);

  const ModelRef = useRef();
  const { gl } = useThree();

  useFrame((state, delta) => {
    const angle = state.clock.getElapsedTime();
  });

  const [bottleModel, setBottleModel] = useState<any | null>(null);
  const [capModel, setCapModel] = useState<any | null>(null);
  const [labelTexture, setLabelTexture] = useState<any | null>(null);

  useEffect(() => {
    const loadBottleModel = async () => {
      const newBottleModel = await new Promise((resolve) =>
        new GLTFLoader().load(bottleLocation, resolve),
      );

      setBottleModel(newBottleModel);
    };

    loadBottleModel();
  }, [bottleLocation]);

  useEffect(() => {
    const loadCapModel = async () => {
      const newCapModel = await new Promise((resolve) =>
        new GLTFLoader().load(capLocation, resolve),
      );

      setCapModel(newCapModel);
    };

    loadCapModel();
  }, [capLocation]); // Re-run the effect when capLocation changes

  useEffect(() => {
    const loadLabelTexture = async () => {
      const textureLoader = new THREE.TextureLoader();
      const newLabelTexture: THREE.Texture = await new Promise((resolve) =>
        textureLoader.load(labelImageLocation, resolve),
      );
      newLabelTexture.flipY = false;
      newLabelTexture.colorSpace = "srgb";

      setLabelTexture(newLabelTexture);
    };

    loadLabelTexture();
  }, [labelImageLocation]);

  const link = document.createElement("a");
  link.style.display = "none";
  document.body.appendChild(link);

  function dataURItoBlob(dataURI: string) {
    const byteString = atob(dataURI.split(",")[1] || "");
    const mimeString =
      dataURI.split(",")[0]?.split(":")[1]?.split(";")[0] || "";
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }
  function addBottle() {
    // bottleModel = useLoader(GLTFLoader, bottleLocation);
    if (bottleModel) {
      if (bottleMaterial === "Transparent") {
        bottleModel.scene.children.forEach(
          (child: {
            name: string;
            material: THREE.MeshPhysicalMaterial;
            visible: boolean;
          }) => {
            if (child.name === "Bottle") {
              // @ts-ignore
              child.material = new THREE.MeshPhysicalMaterial({
                color: bottleColor,
                roughness: 0.1,
                metalness: 0.1,
                transmission: 1.0,
                ior: 1.3,
                transparent: true,
                opacity: 1.0,
                // side: THREE.DoubleSide,
                envMapIntensity: 1.5,
              });
            }
            if (child.name === "Label") {
              child.material.needsUpdate = true;
              // texture.flipY = false;
              // texture.colorSpace = "srgb";
              // @ts-ignore
              child.material.map = labelTexture;
              child.visible = labelVisible;
            }
          },
        );
      } else if (bottleMaterial === "Opaque") {
        bottleModel.scene.children.forEach(
          (child: {
            name: string;
            material: THREE.MeshPhysicalMaterial;
            visible: boolean;
          }) => {
            if (child.name === "Bottle") {
              child.material = new THREE.MeshPhysicalMaterial({
                color: bottleColor,
                roughness: 0.2,
                metalness: 0.0,
                side: THREE.DoubleSide,
                envMapIntensity: 1.5,
              });
            }
            if (child.name === "Label") {
              child.material.needsUpdate = true;
              // texture.flipY = false;
              // texture.colorSpace = "srgb";
              // @ts-ignore
              child.material.map = labelTexture;
              child.visible = labelVisible;
            }
          },
        );
      } else if (bottleMaterial === "Frosted") {
        bottleModel.scene.children.forEach(
          (child: {
            name: string;
            material: THREE.MeshPhysicalMaterial;
            visible: boolean;
          }) => {
            if (child.name === "Bottle") {
              child.material = new THREE.MeshPhysicalMaterial({
                color: bottleColor,
                roughness: 0.5,
                metalness: 0.0,
                transmission: 1.0,
                ior: 1.5,
                opacity: 0.5,
                transparent: true,
                side: THREE.DoubleSide,
                envMapIntensity: 0.5,
              });
            }
            if (child.name === "Label") {
              child.material.needsUpdate = true;

              // texture.flipY = false;
              // texture.colorSpace = "srgb";
              // @ts-ignore
              child.material.map = labelTexture;
              child.visible = labelVisible;
            }
          },
        );
      }
      const arr = [];
      for (let i = 0; i < bottleModel.scene.children.length; i++) {
        arr.push(bottleModel.scene.children[i].clone());
      }
      return arr;
    }
    return [];
  }

  function addCap() {
    // capModel = useLoader(GLTFLoader, capLocation);
    if (capModel) {
      capModel.scene.children.forEach(
        (child: {
          visible: boolean;
          name: string;
          material: THREE.MeshPhysicalMaterial;
        }) => {
          child.visible = capVisible;
          if (child.name === "Cap") {
            child.material = new THREE.MeshPhysicalMaterial({
              color: capColor,
              roughness: 0.4,
              metalness: 0.4,
              side: THREE.DoubleSide,
              envMapIntensity: 0.5,
            });
          }
          if (child.name === "DropperPipe") {
            child.material = new THREE.MeshPhysicalMaterial({
              color: capColor,
              roughness: 0.3,
              metalness: 0.1,
              transmission: 1.0,
              side: THREE.DoubleSide,
              envMapIntensity: 0.5,
            });
          }
        },
      );
      const arr = [];
      for (let i = 0; i < capModel.scene.children.length; i++) {
        arr.push(capModel.scene.children[i].clone());
      }
      return arr;
    }
    return [];
  }
  function save(blob: Blob, filename: string) {
    link.href = URL.createObjectURL(blob);
    //////link.download = filename;
    ///link.click();
    console.log(link.href);
    console.log("url", URL.createObjectURL(blob));
    // URL.revokeObjectURL( url ); breaks Firefox...
  }

  function saveString(text: string, filename: string) {
    save(new Blob([text], { type: "text/plain" }), filename);

    // save(new Blob([text], { type: "text/plain" }), filename);
  }
  // function saveStringToStorage(text, key) {
  //   //localStorage.setItem("filename2", new Blob([text]));
  //   //const output = localStorage.getItem('filename.gltf');
  //   const blob = new Blob([text], { type: 'model/gltf' });

  //   SaveProduct('filename2.gltf',blob);
  // }
  const exportGLTF = async (bottleObjectss: any[], capObjects: any[]) => {
    // Fix implicit any types

    const exporter = new GLTFExporter();

    const exportScene = new THREE.Scene();
    exportScene.add(...bottleObjectss);
    exportScene.add(...capObjects);
    const gltf = await new Promise((resolve, reject) => {
      exporter.parse(
        exportScene,
        function (gltf) {
          resolve(gltf);
        },
        // called when there is an error in the generation
        function (error) {
          console.log("An error happened", error);
          reject(error);
        },
        { trs: false, binary: false },
      );
    });
    //preview
    const imageDataURL = gl.domElement.toDataURL("image/png");
    const imageblob = dataURItoBlob(imageDataURL);

    //const link = document.createElement('a');
    //link.download = 'react-three-fiber-scene.png';
    //link.href = gl.domElement.toDataURL('image/png');
    console.log(typeof link.href);
    //link.click();

    const output = JSON.stringify(gltf, null, 2);
    console.log("ouput", output);
    const blob = new Blob([output], { type: "application/json" });

    SaveProduct(
      productName,
      blob.toString(), // Convert the Blob object to a string
      typeofProduct,
      selectedCategory,
      productName,
      imageblob,
    );
  };

  let bottleObjectss = addBottle();
  let capObjects = addCap();

  // exportGLTF(bottleObjectss, capObjects);
  if (saveClicked == 1) {
    exportGLTF(bottleObjectss, capObjects);
    setSaveClicked(0);
  }
  console.log(bottleObjectss);
  console.log(capObjects);
  // document.addEventListener("keyup", (event) => {
  //   if (event.key === "s") {
  //     console.log("key pressed ")
  //     exportGLTF(bottleObjectss, capObjects);
  //   }
  // });
  // exportGLTF(bottleObjectss, capObjects);
  return (
    <>
      <Environment files="./royal-esplanade-2k.hdr" />

      {bottleModel && bottleModel.scene && (
        <primitive
          object={bottleModel.scene}
          ref={ModelRef}
          scale={[4, 4, 4]}
          position={[0, -0.8, 0]}
        />
      )}
      {capModel && capModel.scene && (
        <primitive
          object={capModel.scene}
          ref={ModelRef}
          scale={[4, 4, 4]}
          position={[0, -0.8, 0]}
          rotation={[0, 0, 0]}
        />
      )}

      <OrbitControls enableDamping={true} makeDefault />
    </>
  );
};

export default ProductViewer;
