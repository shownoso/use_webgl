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

/**
 * 初始化 buffer
 * @param {*} gl 
 * @param {*} dataVertices 顶点坐标信息
 * @param {*} program 
 * @param {*} attr 
 * 1. 创建 buffer 对象
 * 2. 将 buffer 绑定到 gl
 * 3. 设置 buffer 数据
 * 4. 指定缓冲区用于顶点数据的读取
 * 5. 启用
 */
function initBuffer(gl, dataVertices, program, attr) {
  let buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, dataVertices, gl.STATIC_DRAW);
  let a_pos = gl.getAttribLocation(program, attr);
  // https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
  // 从当前绑定的缓冲区（bindBuffer()指定的缓冲区）中读取顶点数据
  gl.vertexAttribPointer(a_pos, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(a_pos);
}