"use client";

import {
  CarouselItem,
  ContentBlock,
  ContentBlockType,
  RouteDataType,
  SectionKey,
} from "@/utils/types";
import { createContext, useContext, useState } from "react";

type FinalJson = RouteDataType;
type FinalJsonCtx = {
  finalJson: FinalJson;
  setFinalJson: React.Dispatch<React.SetStateAction<FinalJson>>;
  addImageInCarrousel: ({
    section,
    id,
  }: {
    section: SectionKey;
    id: string;
  }) => void;
  addRouteRepeatedSection: (
    section: SectionKey,
    content: ContentBlockType
  ) => void;
  getRouteFieldToChange: (
    sectionToChange: SectionKey,
    contentToChange: string,
    fieldKeyToChange: string,
    idField?: string,
    idItemIntoArray?: string
  ) => string;
  setRouteField: (
    sectionToChange: SectionKey,
    contentToChange: string,
    fieldKeyToChange: string,
    inputValue: string,
    array?: boolean,
    idField?: string,
    idItemIntoArray?: string
  ) => void;
};

const FinalJsonContext = createContext<FinalJsonCtx | null>(null);

export function FinalJsonProvider({ children }: { children: React.ReactNode }) {
  const [finalJson, setFinalJson] = useState<FinalJson>(() => ({
    id: Math.random().toString(36).slice(2, 9),
  }));

  // AÑADE A UNA SECTION UN CONTENT REPETIBLE
  const addRouteRepeatedSection = (
    section: SectionKey,
    content: ContentBlockType
  ) => {
    setFinalJson((prev) =>
      prev[section]
        ? {
            ...prev,
            [section]: {
              content: [
                ...prev[section].content,
                content === "introduction"
                  ? {
                      type: content,
                      text: "",
                      id: `${content}-${Date.now()}`,
                    }
                  : content === "paragraph"
                  ? {
                      type: content,
                      text: "",
                      id: `${content}-${Date.now()}`,
                    }
                  : content === "video"
                  ? {
                      type: content,
                      src: "",
                      alt: "",
                      label: "",
                      id: `${content}-${Date.now()}`,
                    }
                  : content === "carrousel"
                  ? {
                      type: content,
                      carrousel: [],
                      id: `${content}-${Date.now()}`,
                    }
                  : content === "image"
                  ? {
                      type: content,
                      src: "",
                      alt: "",
                      label: "",
                      id: `${content}-${Date.now()}`,
                    }
                  : {
                      type: content,
                      text: "",
                      id: `${content}-${Date.now()}`,
                    },
              ],
            },
          }
        : prev
    );
  };

  const addImageInCarrousel = ({
    section,
    id,
  }: {
    section: SectionKey;
    id: string;
  }) => {
    setFinalJson((prev) => {
      const newImage = {
        src: "",
        alt: "",
        label: "",
        id: `image-${Date.now()}`,
      };
      const selectedCarrousel = prev[section]?.content.find(
        (content) => content.type === "carrousel" && content.id === id
      ) as {
        type: "carrousel";
        carrousel: CarouselItem[];
        id: string;
      };

      if (!selectedCarrousel || !Array.isArray(selectedCarrousel.carrousel)) {
        return prev;
      }
      return {
        ...prev,
        [section]: {
          content: prev[section].content.map((content) =>
            content.type === "carrousel" && content.id === id
              ? {
                  ...content,
                  carrousel: [...content.carrousel, newImage],
                }
              : content
          ),
        },
      };
    });
  };

  // OBTIENE DESDE LA SECTION EL VALOR DEL CONTENT QUE MOSTRARÁ EL INPUT, DESDE finalJson
  const getRouteFieldToChange = (
    sectionToChange: SectionKey,
    contentToChange: string,
    fieldKeyToChange: string,
    idField?: string,
    idItemIntoArray?: string
  ) => {
    const contentSelected = finalJson[sectionToChange]?.content.find(
      (section) =>
        idField && idItemIntoArray
          ? section.type === contentToChange &&
            section?.id === idField &&
            Array.isArray(section[contentToChange]) &&
            section[contentToChange].find((item) => item.id === idItemIntoArray)
          : idField
          ? section.type === contentToChange && section?.id === idField
          : section.type === contentToChange
    );
    if (!contentSelected) return "";

    if (
      contentSelected.type === "primaryTitle" &&
      fieldKeyToChange === "text"
    ) {
      return contentSelected[fieldKeyToChange];
    }
    if (contentSelected.type === "published") {
      if (fieldKeyToChange === "date") return contentSelected[fieldKeyToChange];
      if (fieldKeyToChange === "authors")
        return contentSelected[fieldKeyToChange].join(", ");
    }
    if (contentSelected.type === "image-presentation") {
      if (fieldKeyToChange === "src") return contentSelected[fieldKeyToChange];
      if (fieldKeyToChange === "alt") return contentSelected[fieldKeyToChange];
    }
    if (
      contentSelected.type === "introduction" &&
      fieldKeyToChange === "text"
    ) {
      return contentSelected[fieldKeyToChange];
    }
    if (contentSelected.type === "title" && fieldKeyToChange === "text") {
      return contentSelected[fieldKeyToChange];
    }
    if (contentSelected.type === "paragraph" && fieldKeyToChange === "text") {
      return contentSelected[fieldKeyToChange];
    }
    if (
      (contentSelected.type === "video" || contentSelected.type === "image") &&
      (fieldKeyToChange === "src" ||
        fieldKeyToChange === "alt" ||
        fieldKeyToChange === "label")
    ) {
      return contentSelected[fieldKeyToChange];
    }
    if (contentSelected.type === "carrousel") {
      const itemInCarrousel = contentSelected.carrousel.find(
        (item) => item.id === idItemIntoArray
      );
      if (
        itemInCarrousel &&
        (fieldKeyToChange === "src" ||
          fieldKeyToChange === "alt" ||
          fieldKeyToChange === "label")
      ) {
        return itemInCarrousel[fieldKeyToChange];
      }
    }
    return "";
  };
  // EDITA EL VALOR DEL CAMPO EN finalJson DESDE EL INPUT. SE CONTEMPLA array PARA SECCIONES CON ARRAYS DENTRO DE ELLAS. SE CONTEMPLA EL idField PARA PODER EDITAR CAMPOS DE SECCIONES QUE SE PUEDEN REPETIR
  const setRouteField = (
    sectionToChange: SectionKey,
    contentToChange: string,
    fieldKeyToChange: string,
    inputValue: string,
    array?: boolean,
    idField?: string,
    idItemIntoArray?: string
  ) => {
    setFinalJson((prev: RouteDataType): RouteDataType => {
      if (!prev[sectionToChange]) return prev;

      const updatedContent: ContentBlock[] = prev[sectionToChange].content.map(
        (block): ContentBlock =>
          idField && idItemIntoArray
            ? contentToChange === "carrousel" &&
              block.type === contentToChange &&
              block?.id === idField &&
              Array.isArray(block[contentToChange])
              ? {
                  ...block,
                  [contentToChange]: block[contentToChange].map((item) =>
                    item.id === idItemIntoArray
                      ? {
                          ...item,
                          [fieldKeyToChange]: inputValue,
                        }
                      : { ...item }
                  ),
                }
              : block
            : idField
            ? block.type === contentToChange && block?.id === idField
              ? array
                ? {
                    ...block,
                    [fieldKeyToChange]: inputValue
                      .split(",")
                      .map((string) => string.trim().replace(/^"|"$/g, "")),
                  }
                : { ...block, [fieldKeyToChange]: inputValue }
              : block
            : block.type === contentToChange
            ? array
              ? {
                  ...block,
                  [fieldKeyToChange]: inputValue
                    .split(",")
                    .map((string) => string.trim().replace(/^"|"$/g, "")),
                }
              : { ...block, [fieldKeyToChange]: inputValue }
            : block
      );

      return {
        ...prev,
        [sectionToChange]: { content: updatedContent },
      };
    });
  };

  return (
    <FinalJsonContext.Provider
      value={{
        finalJson,
        setFinalJson,
        addRouteRepeatedSection,
        getRouteFieldToChange,
        setRouteField,
        addImageInCarrousel,
      }}
    >
      {children}
    </FinalJsonContext.Provider>
  );
}

export function useFinalJson() {
  const ctx = useContext(FinalJsonContext);
  if (!ctx) {
    throw new Error("useFinalJson debe usarse dentro de <FinalJsonProvider>.");
  }
  return ctx;
}
