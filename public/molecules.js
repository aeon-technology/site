import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let camera, scene, renderer, controls, stats;

let mesh;
const amount = 10;
const count = 1000;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(1, 1);

const color = new THREE.Color();
const white = new THREE.Color().setHex(0xffffff);

init();

function init() {
  camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.set(amount, amount, amount);
  camera.lookAt(0, 0, 0);

  scene = new THREE.Scene();

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 3);
  light.position.set(0, 1, 0);
  scene.add(light);

  const geometry = new THREE.IcosahedronGeometry(0.5, 3);
  const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

  mesh = new THREE.InstancedMesh(geometry, material, count);

  let i = 0;
  const offset = (amount - 1) / 2;

  const matrix = new THREE.Matrix4();

  for (let x = 0; x < amount; x++) {
    for (let y = 0; y < amount; y++) {
      for (let z = 0; z < amount; z++) {
        matrix.setPosition(offset - x, offset - y, offset - z);
        mesh.setMatrixAt(i, matrix);
        mesh.setColorAt(i, color);
        i++;
      }
    }
  }

  scene.add(mesh);

  //

  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById("molecules") });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(240, 240);
  renderer.setAnimationLoop(animate);
  renderer.setClearColor(0xffffff, 0);

  controls = new OrbitControls(camera);
  controls.autoRotate = true;
  controls.enableZoom = false;
  controls.enablePan = false;
}

function animate() {
  controls.update();
  raycaster.setFromCamera(mouse, camera);

  const intersection = raycaster.intersectObject(mesh);

  if (intersection.length > 0) {
    const instanceId = intersection[0].instanceId;
    mesh.getColorAt(instanceId, color);
    if (color.equals(white)) {
      mesh.setColorAt(instanceId, color.setHex(Math.random() * 0xffffff));
      mesh.instanceColor.needsUpdate = true;
    }
  }

  renderer.render(scene, camera);
}
