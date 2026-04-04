"use client";

import Button from "@/atoms/button/button";
import MotorcycleIcon from "@/atoms/icons/motorcycle";
import { Separator } from "@/svgs/Separator";
import { BLOG_NAME } from "@/utils/constants";

export default function TitleOrganism() {
  return (
    <article
      className="full-size-organism space-y-4 relative h-[80vh] flex flex-col justify-center"
      style={{
        backgroundImage: "url(/images/home/motorbike.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 top-0 h-full w-full bg-white/50 z-10" />
      <h1 className="w-full z-20 relative">{BLOG_NAME}</h1>
      <h3 className="lg:w-8/12 w-full z-20 relative">
        Viajo en moto por España, y en las ciudades/pueblos a los que llego
        intento hacer estas cositas:
      </h3>
      <ul className="text-foreground z-20 relative">
        <li>
          <h3>Escalar en rocódromo</h3>
        </li>
        <li>
          <h3>Freetour por la ciudad</h3>
        </li>
        <li>
          <h3>Ruta de senderismo</h3>
        </li>
        <li>
          <h3>Ruta con patines en línea</h3>
        </li>
      </ul>
      <h3 className="lg:w-8/12 w-full z-20 relative">
        Si algo de esto te interesa, échale un ojo ;)
      </h3>
      <Button
        onClick={() => console.log("Estoy en la home")}
        className="z-20 relative"
      >
        <Button.Icon>
          <MotorcycleIcon size={20} />
        </Button.Icon>
        <Button.Text>Ver últimas rutas</Button.Text>
      </Button>
      <Separator
        fill="var(--background)"
        className="absolute bottom-0 left-0 z-10"
      />
    </article>
  );
}
