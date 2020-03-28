
function translate(Tx, Ty, Tz) {
  let dataMatrix = new Float32Array([
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    Tx, Ty, Tz, 1.0
  ]);
  return dataMatrix;
}

function rotate(angle) {
  let sinB = Math.sin(angle * Math.PI / 180.0);
  let cosB = Math.cos(angle * Math.PI / 180.0);
  let dataMatrix = new Float32Array([
    cosB, sinB, 0.0, 0.0,
    -sinB, cosB, 0.0, 0.0,
    0.0, 0.0, 1, 0.0,
    0.0, 0.0, 0.0, 1.0
  ]);
  return dataMatrix;

}

function scale(Tx, Ty, Tz) {

  let dataMatrix = new Float32Array([
    Tx, 0.0, 0.0, 0.0,
    0.0, Ty, 0.0, 0.0,
    0.0, 0.0, Tz, 0.0,
    0.0, 0.0, 0.0, 1.0
  ]);
  return dataMatrix;
}
