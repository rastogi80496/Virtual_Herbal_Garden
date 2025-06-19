import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x87CEFA);  // Light blue background to simulate sky
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;  // Enable shadows
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 3, 6);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 3;
controls.maxDistance = 15;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.target.set(0, 1, 0);
controls.update();

// Add ambient light for soft global illumination
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);  // Soft white light
scene.add(ambientLight);

// Add a directional light to cast shadows
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;  // High-resolution shadow
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 50;
scene.add(directionalLight);

// Ground plane with shadow receiving enabled
const groundGeometry = new THREE.PlaneGeometry(20, 20);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x228B22,  // Dark green for grass-like ground
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.receiveShadow = true;  // Ground can receive shadows
scene.add(groundMesh);

// Load the 3D plant model
const loader = new GLTFLoader().setPath('3D Model/');
loader.load('scene.gltf', (gltf) => {
  const mesh = gltf.scene;

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;  // Ensure plant casts shadows
      child.receiveShadow = true;  // Enable receiving shadows
    }
  });

  mesh.scale.set(1.5, 1.5, 1.5);  // Adjust plant size
  mesh.position.set(0, 0, 0);  // Center the plant on the ground
  scene.add(mesh);

  document.getElementById('progress-container').style.display = 'none';  // Hide progress bar
}, (xhr) => {
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
  console.error(error);
});

// Adjust window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
