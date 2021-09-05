import styled from "styled-components";

export const Image = styled.div.attrs(({ $movedX, $movedY }) => ({
  style: {
    transform: `translate(${$movedX}px, ${$movedY}px)`,
  },
}))`
  background-image: url("/image.jpeg");
  background-size: 400px 600px;
  width: ${({ $matrixX }) => `${400 / $matrixX}px`};
  height: ${({ $matrixY }) => `${600 / $matrixY}px`};
  position: relative;
  background-position: ${({ $initialX, $initialY, $matrixX, $matrixY }) =>
    `-${$initialX * (400 / $matrixX)}px -${$initialY * (600 / $matrixY)}px`};

  @media (max-width: 410px) {
    font-size: 18px;
  } ;
`;
