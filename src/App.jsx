import React, { useState } from "react";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import ImgBox from "./components/ImgBox";
import { calculateDistance, createMatrix } from "./logic";
import { GlobalStyle, ImageContainer, Wrapper } from "./styles";

const App = () => {
  const [distance, setDistance] = useState(1);
  const [matrix, setMatrix] = useState(createMatrix(8, 12));

  const easing = (num) => Math.pow(num, 3);

  const handleMove = ({ clientX, clientY }) => {
    setDistance(easing(calculateDistance([clientX, clientY])));
  };

  const handleTouchMove = ({ touches }) => {
    setDistance(
      easing(calculateDistance([touches[0].clientX, touches[0].clientY]))
    );
  };

  const handleClick = () => {
    const x = Math.floor(Math.random() * 11 + 1);
    const y = Math.floor(Math.random() * 17 + 1);
    setMatrix(createMatrix(x, y));
  };

  const matrixDimensions = {
    x: matrix[matrix.length - 1][0] + 1,
    y: matrix[matrix.length - 1][1] + 1,
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        <ImageContainer>
          {matrix.map(([x, y], index) => (
            <ImgBox
              key={index}
              x={x}
              y={y}
              percent={distance}
              matrixDimensions={matrixDimensions}
            />
          ))}

          <ImageContainer />
        </ImageContainer>
      </Wrapper>
    </div>
  );
};

export default App;
