"use client";

import FilledArrowIcon from "@/atoms/icons/filledArrowRight";
import { CarouselItem } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import "./sliderImages.css";

interface SliderImagesProps {
  images: CarouselItem[];
}
// LAS FLECHAS SUMARÁN O RESTARÁN 1. SE MOSTRARÁ LA IMAGEN SEGÚN EL ÍNDICE ACTUAL. AL IRSE LA IMAGEN PULSANDO LA FLECHA MOSTRARÁ UNA ANIMACIÓN EN FUNCIÓN DE LA DIRECCIÓN PULSADA.
export default function SliderImages({ images }: SliderImagesProps) {
  const [imageActive, setImageActive] = useState<number>(0);
  const [prevImageActive, setPrevImageActive] = useState<number>(0);
  const [animationInImage, setAnimationInImage] = useState<
    "animated-image" | "animated-image-reverse"
  >("animated-image");

  const goNextImage = () => {
    if (imageActive === images.length - 1) {
      setImageActive(0);
      setPrevImageActive(images.length - 1);
    } else {
      setImageActive(imageActive + 1);
      setPrevImageActive(imageActive);
    }
    setAnimationInImage("animated-image");
  };

  const goPrevImage = () => {
    if (imageActive === 0) {
      setImageActive(images.length - 1);
      setPrevImageActive(0);
    } else {
      setImageActive(imageActive - 1);
      setPrevImageActive(imageActive);
    }
    setAnimationInImage("animated-image-reverse");
  };

  const styleSelectorImage = (index: number) => {
    if (index === imageActive) {
      return "scale-150";
    } else {
      return "";
    }
  };

  return (
    <div className="w-full h-[60dvw] max-w-full max-h-[60dvw] relative">
      <button
        className="absolute left-1 top-1/2 z-20 cursor-pointer rotate-180 -translate-y-1/2 bg-foreground rounded-full p-2"
        onClick={() => goPrevImage()}
      >
        <FilledArrowIcon size={40} color="var(--primaryColor)" />
      </button>
      <button
        className="absolute right-1 top-1/2 z-20 cursor-pointer -translate-y-1/2 bg-foreground rounded-full p-2"
        onClick={() => goNextImage()}
      >
        <FilledArrowIcon size={40} color="var(--primaryColor)" />
      </button>
      <div className="w-full h-[60dvw] max-w-full max-h-[60dvw] flex items-center overflow-hidden">
        <div className="flex flex-row items-center gap-x-8 w-full relative">
          <Image
            id={`image-slider`}
            className={`${animationInImage} h-[60dvw] w-full min-w-full object-cover rounded-xl z-10`}
            key={`image-slider-${imageActive}`}
            src={images[imageActive].src}
            alt={`Slide slider - ${images[imageActive].alt}`}
            width={1900}
            height={1900}
          />
          <Image
            id={`image-slider`}
            className={`h-[60dvw] w-full min-w-full object-cover rounded-xl absolute top-0 left-0 z-0`}
            key={`image-slider-covered`}
            src={images[prevImageActive].src}
            alt={`Slide slider - ${images[prevImageActive].alt}`}
            width={1900}
            height={1900}
          />
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-foreground z-10 flex flex-row gap-x-4 p-4 rounded-full">
          {Array.from({ length: images.length }).map((_, index) => (
            <button
              className={`${styleSelectorImage(
                index
              )} h-3 w-3 bg-primaryColor rounded-full hover:scale-150 transition-transform duration-200 cursor-pointer `}
              key={index}
              onClick={() => {
                setImageActive(index);
                setPrevImageActive(imageActive);
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
