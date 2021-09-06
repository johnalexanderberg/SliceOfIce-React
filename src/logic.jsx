// outputs distance from center, range 0-1
export function calculateDistance([x, y]) {
  const center = [window.innerWidth / 2, window.innerHeight / 2];
  const maxHypot = Math.hypot(center[0], center[1]);
  const hypot = Math.hypot(center[0] - x, center[1] - y);

  return hypot / maxHypot;
}

export function createMatrix(x, y) {
  if (x <= 0 || isNaN(x) || y <= 0 || isNaN(y)) {
    console.log("invalid parameters");
    return;
  }

  const matrix = [];
  matrix.length = x * y;

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = [Math.floor(i % x), Math.floor(i / x)];
  }

  return matrix;
}

export function createRandomMatrix(minSlices, maxX, maxY) {
  if (maxX < 1 || maxY < 1 || isNaN(maxX) || isNaN(maxY)) {
    console.log("invalid parameters");
    return;
  }
  let slices = 0;
  let x = 0;
  let y = 0;
  while (slices < minSlices) {
    x = Math.floor(Math.random() * (maxX - 1) + 1);
    y = Math.floor(Math.random() * (maxX - 1) + 1);
    slices = x * y;
  }

  return createMatrix(x, y);
}

export const easing = (num) => Math.pow(num, 3);
