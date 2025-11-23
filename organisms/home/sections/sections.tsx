import HrAtom from "@/atoms/hr";
import CardImageTitleTextMolecule from "@/molecules/cards/cardImageTitleText";

export default function SectionsOrganism() {
  const sectionsData = [
    {
      image: "/images/home/motorbike.webp",
      title: "Explorando en moto",
      text: "Una guía completa sobre los mejores destinos para viajar en moto, con vídeo completo de la ruta, ruta de google maps, posibles paradas o desvíos, y más.",
      href: "/route/section/travel",
    },
    {
      image: "/images/home/town.avif",
      title: "Descubriendo...",
      text: "Visitas guiadas por los pueblos y ciudades que visito. Fotos, vídeos, historia, cultura, gastronomía y más.",
      href: "/route/section/freetour",
    },
    {
      image: "/images/home/rocodromo.jpeg",
      title: "Rocódromos que no te puedes perder",
      text: "Listado de todos los rocódromos que he probado en mis viajes. Toda la información sobre tamaño, cafetería, cantidad de rutas, nivel de dificultad, existencia de vías con autoaseguradores, y más.",
      href: "/route/section/climb",
    },
    {
      image: "/images/home/senderismo.jpg",
      title: "Senderismo en los mejores parajes",
      text: "Una recopilación de las rutas de senderismo más impresionantes que he recorrido, con detalles sobre la dificultad, duración y paisajes.",
      href: "/route/section/hiking",
    },
    {
      image: "/images/home/patinar.jpg",
      title: "Rutas de patinaje",
      text: "Una guía sobre los mejores lugares para patinar, con información sobre lo viable que es el suelo en cada tramo de la ruta, el entorno y consejos para disfrutar al máximo.",
      href: "/route/section/roller",
    },
    {
      image: "/images/home/comida.jpg",
      title: "¿Paro a comer aquí o no?",
      text: "Mi experiencia y opinión sobre los lugares donde he parado a comer en cada uno de mis viajes y destinos.",
      href: "/route/section/eat",
    },
    {
      image: "/images/home/casa.webp",
      title: "Donde paro a dormir",
      text: "Los sitios en los que me alojo (siempre sostenibles y nada invasivos contra el pueblo o barrio) y mi experiencia en cada uno de ellos, con todos los detalles.",
      href: "/route/section/sleep",
    },
  ];

  return (
    <article className="organism space-y-8">
      <h2>Secciones</h2>
      <HrAtom />
      <main className="grid grid-cols-2 gap-8">
        {sectionsData.map(({ image, title, text, href }) => (
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
