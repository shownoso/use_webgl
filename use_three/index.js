import * as THREE from 'three';
import { Sphere } from 'three';

function initStats() {
  let stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.getElementById('Stats-output').append(stats.domElement);
  return stats;
}

const stats = initStats();
// 创建场景
let scene = new THREE.Scene();

// 创建透视投影相机
// 视角（120） 宽高比 近距 远距
let camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

// 创建渲染器
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(window.innerWidth, window.innerHeight);
// 开启阴影 高消耗
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// 添加辅助工具
let axes = new THREE.AxesHelper(200);
scene.add(axes);


// 创建一个平面
let planeGeometry = new THREE.PlaneGeometry(70, 50, 1, 1);
let planeMaterial = new THREE.MeshLambertMaterial({
  color: 0xfff566,
  side: THREE.DoubleSide
});
let plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
// 平面接受投射过来的阴影
plane.receiveShadow = true;
scene.add(plane);

// 创建一个立方体

let cubeGeometry = new THREE.CubeGeometry(5, 5, 5);
let cubeMaterial = new THREE.MeshLambertMaterial({
  color: 0x1890ff,
  // wireframe: true
});
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -4;
cube.position.y = 3;
cube.position.z = 0;
// 投射阴影
cube.castShadow = true;
scene.add(cube);

// 创建一个球
let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
let sphereMaterial = new THREE.MeshLambertMaterial({
  color: 0xf5222d,
  // wireframe: true
});
let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 20;
sphere.position.y = 4;
sphere.position.z = -2;
// 投射阴影
sphere.castShadow = true;
scene.add(sphere);

// 创建点光源
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40, 60, -10);
// 投射阴影
spotLight.castShadow = true;
scene.add(spotLight);

let bounceStep = 0;

function render() {
  stats.update();
  renderer.render(scene, camera);
  cubeRotate();
  sphereBounce();
  let id = requestAnimationFrame(render);  
}

function cubeRotate() {
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  cube.rotation.z += 0.02;
}

function sphereBounce() {
  bounceStep += 0.05;
  sphere.position.x = 20 + (10 * Math.cos(bounceStep));
  sphere.position.y = 2 + (10 * Math.abs(Math.sin(bounceStep)));
}


document.body.appendChild(renderer.domElement);
render();
