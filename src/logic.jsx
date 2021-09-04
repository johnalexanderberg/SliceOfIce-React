//takes mouse X,Y as input, outputs distance from center from 0 (center) to 1 (max distance).
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
