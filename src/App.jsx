import React, { useState } from "react";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import ImgBox from "./components/ImgBox";
import { calculateDistance } from "./logic";
import { GlobalStyle, ImageContainer, Wrapper } from "./styles";

// prettier-ignore
const matrix = [
    [0,0], [1,0], [2,0], [3,0],
    [0,1], [1,1], [2,1], [3,1],
    [0,2], [1,2], [2,2], [3,2],
    [0,3], [1,3], [2,3], [3,3],
    [0,4], [1,4], [2,4], [3,4],
    [0,5], [1,5], [2,5], [3,5]

];

const App = () => {
  const [distance, setDistance] = useState(1);

  const easing = (num) => Math.pow(num, 3);

  const handleMove = ({ clientX, clientY }) => {
    setDistance(easing(calculateDistance([clientX, clientY])));
  };

  const handleTouchMove = ({ touches }) => {
    calculateDistance([touches[0].clientX], [touches[0].clientY]);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper onMouseMove={handleMove} onTouchMove={handleTouchMove}>
        <ImageContainer>
          {matrix.map(([x, y], index) => (
            <ImgBox key={index} x={x} y={y} percent={distance} />
          ))}

          <ImageContainer />
        </ImageContainer>
      </Wrapper>
    </div>
  );
};

export default App;
