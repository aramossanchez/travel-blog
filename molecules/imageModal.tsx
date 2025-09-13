"use client";
import CrossIcon from "@/atoms/icons/cross";
import Image from "next/image";
import { useState } from "react";

interface ImageModalProps {
  data: { src: string; alt: string; label: string };
  maxSize?: string;
}
export default function ImageModal({ data, maxSize = "" }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="space-y-1" onClick={() => setIsOpen(true)}>
        <Image
          id={data.src}
          src={data.src}
          alt={data.alt}
          width={1900}
          height={1900}
          className={`image-card ${maxSize}`}
        />
        <label className="italic" htmlFor={data.src}>
          · {data.label}
        </label>
      </div>
      {isOpen && (
        <div
          className="min-w-dvw min-h-dvh max-w-dvw max-h-dvh bg-black/80 z-50 fixed top-0 left-0 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="bg-black text-white z-40 absolute top-4 right-8 p-2 rounded-full border-2 border-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <CrossIcon />
          </button>
          <Image
            id={data.src}
            src={data.src}
            alt={data.alt}
            width={1900}
            height={1900}
            className="z-30 max-w-[90dvw] max-h-[90dvh] object-contain"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
}
