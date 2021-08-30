export function calculateDistance([x, y]) {
  const center = [window.innerWidth / 2, window.innerHeight / 2];
  const maxHypot = Math.hypot(center[0], center[1]);
  const hypot = Math.hypot(center[0] - x, center[1] - y);

  return hypot / maxHypot;
}
