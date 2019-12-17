import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
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
          leftChevron={(
                <Icon
                  style={{
                    fontSize: "3em",
                    display: "flex",
                    alignItens: "center",
                    color: "#5829bb"
                  }}
                  name="angle left"
                />
              )}
          rightChevron={(
                <Icon
                  style={{
                    fontSize: "3em",
                    display: "flex",
                    alignItens: "center",
                    justifyContent: "flex-end",
                    color: "#5829bb"
                  }}
                  name="angle right"
                />
              )}
          outsideChevron
          chevronWidth={chevronWidth}
        >
            {children.map((Child, index) => (
                <span key={index} style={{ height: "auto" }}>
                    {Child}
                </span>
            ))}
        </ItemsCarousel>
  );
};
