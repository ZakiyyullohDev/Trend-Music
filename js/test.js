// Initialization
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometry and Material
const geometry = new THREE.BoxGeometry(); // Cube geometry
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color

// Mesh (Combining geometry and material)
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Camera Position
camera.position.z = 5;

// Render Loop (Animation)
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene with the camera
  renderer.render(scene, camera);
}

// Start the render loop
animate();
