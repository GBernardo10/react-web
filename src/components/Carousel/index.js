import React, { useState } from "react";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import ItemsCarousel from "react-items-carousel";

export const Carousel = ({ children }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={2}
              gutter={20}
              leftChevron={<NavigateBefore />}
              rightChevron={<NavigateNext />}
              outsideChevron
              chevronWidth={chevronWidth}
            >
                {children.map((Child, index) => (
                    <span key={index} style={{ height: "auto" }}>{Child}</span>
                ))}
            </ItemsCarousel>
  );
};
