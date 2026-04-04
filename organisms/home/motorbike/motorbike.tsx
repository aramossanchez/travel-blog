import HrAtom from "@/atoms/hr";
import CardImageTitleTextMolecule from "@/molecules/cards/cardImageTitleText";
import React from "react";

export default function MotorbikeOrganism() {
  const motorbikeData = [
    {
      image: "/images/home/moto.png",
      title: "Voge 625 DSX",
      text: "Un tour por la moto que uso para viajar, con detalles sobre su rendimiento, comodidad, capacidad de carga y más.",
      href: "/motorbike/motorbike-001",
    },
  ];
  return (
    <article className="organism space-y-8">
      <h1>La moto</h1>
      <HrAtom />
      <main className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-16">
        {motorbikeData.map(({ image, title, text, href }) => (
          <CardImageTitleTextMolecule
            key={title}
            image={image}
            title={title}
            text={text}
            href={href}
          />
        ))}
      </main>
    </article>
  );
}
