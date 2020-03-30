import * as THREE from 'three';
import { initStats } from './utils/stats';

// 创建统计辅助
const stats = initStats();

// 创建场景
let scene = new THREE.Scene();

// 创建透视投影相机
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

function render() {
  stats.update();
  renderer.render(scene, camera);
  let id = requestAnimationFrame(render);
}

document.body.appendChild(renderer.domElement);
render();
