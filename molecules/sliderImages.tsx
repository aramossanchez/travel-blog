"use client";

import ArrowRightIcon from "@/atoms/icons/arrowRight";
import ChevronRightIcon from "@/atoms/icons/chevronRight";
import { CarouselItem } from "@/utils/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SliderImagesProps {
  images: CarouselItem[];
}
// HE PENSADO QUE HAY QUE GENERAR 3 CUADROS (PASADO, PRESENTE Y FUTURO) Y ASIGNAR QUE IMAGEN TOCA VER EN CADA CUADRO (PENDIENTE DE INVESTIGAR COMO HACER OPTIMO EL SLIDER DE IMAGENES)
export default function SliderImages({ images }: SliderImagesProps) {
  const [actualScroll, setActualScroll] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      console.log("scrollLeft:", scrollLeft);
      setActualScroll(scrollLeft);

      // ejemplo: detectar si llegó al final
      if (scrollLeft + clientWidth >= scrollWidth) {
        console.log("Llegaste al final del slider 🚀");
      }
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-[60dvw] max-w-full max-h-[60dvw] relative">
      <button className="absolute left-1 top-1/2 z-10 cursor-pointer rotate-180 -translate-y-1/2 bg-foreground rounded-full p-2">
        <ChevronRightIcon size={40} color="var(--primaryColor)" />
      </button>
      <button className="absolute right-1 top-1/2 z-10 cursor-pointer -translate-y-1/2 bg-foreground rounded-full p-2">
        <ChevronRightIcon size={40} color="var(--primaryColor)" />
      </button>
      <div
        className="w-full h-[60dvw] max-w-full max-h-[60dvw] flex items-center overflow-scroll"
        ref={sliderRef}
      >
        <div
          className="flex flex-row items-center gap-x-8 w-full relative"
          style={{ transform: `translate3d(-${actualScroll}px, 0, 0)` }}
        >
          {images.map((image, index) => (
            <Image
              id={`image-${index}`}
              className={`h-[60dvw] w-full min-w-full object-cover rounded-xl`}
              key={`image-${index}`}
              src={image.src}
              alt={`Slide ${index} - ${image.alt}`}
              width={1900}
              height={1900}
            />
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-foreground z-10 flex flex-row gap-x-4 p-4 rounded-full">
          {Array.from({ length: images.length }).map((_, index) => (
            <div
              className="h-3 w-3 bg-primaryColor rounded-full hover:scale-150 transition-transform duration-200 cursor-pointer"
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
