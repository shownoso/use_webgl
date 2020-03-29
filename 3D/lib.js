/**
 * 初始化着色器
 * @param {*} gl 
 * @param {*} VERTEX_SHADER 
 * @param {*} FRAGMENT_SHADER
 * 1. 创建顶点着色器和片元着色器
 * 2. 指定着色器对象
 * 3. 编译着色器
 * 4. 创建程序对象并分配着色器
 * 5. 链接程序对象到gl
 * 6. 告知gl使用的程序对象 
 */
function initShader(gl, VERTEX_SHADER, FRAGMENT_SHADER) {

  let vertex = gl.createShader(gl.VERTEX_SHADER);
  let frag = gl.createShader(gl.FRAGMENT_SHADER);

  gl.shaderSource(vertex, VERTEX_SHADER);
  gl.shaderSource(frag, FRAGMENT_SHADER);

  gl.compileShader(vertex);
  gl.compileShader(frag);

  let program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, frag);

  gl.linkProgram(program);
  gl.useProgram(program);
  return program;
}


