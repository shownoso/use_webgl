export function initStats(id = 'Stats-output', mode = 0) {
  let stats = new Stats();
  stats.setMode(mode);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.getElementById(id).append(stats.domElement);
  return stats;
}