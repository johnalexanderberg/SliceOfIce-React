import React, { useEffect, useState } from "react";
import { Image } from "./styles";

const ImgBox = ({ x, y, percent, matrixDimensions }) => {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    setPosition([Math.random() * 400 - 200, Math.random() * 600 - 300]);
  }, [x, y]);

  return (
    <Image
      $initialX={x}
      $initialY={y}
      $matrixX={matrixDimensions.x}
      $matrixY={matrixDimensions.y}
      $movedX={position[0] * percent}
      $movedY={position[1] * percent}
    />
  );
};

export default ImgBox;
