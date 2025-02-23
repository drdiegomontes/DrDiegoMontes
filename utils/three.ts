import * as THREE from "three";

// Export types only once
export type {
  Scene,
  Camera,
  WebGLRenderer,
  Material,
  Texture,
  Object3D,
  Mesh,
  Group,
  BufferGeometry,
} from "three";

// Export the THREE namespace
export { THREE };

// Export specific constants and classes without redeclaring
export const {
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
  DirectionalLight,
  AmbientLight,
  Vector3,
  Quaternion,
  Euler,
  Matrix4,
  Color,
  TextureLoader,
  Clock,
  Raycaster,
  BufferAttribute,
  ShaderMaterial,
  DoubleSide,
  FrontSide,
  BackSide,
  LinearFilter,
  NearestFilter,
  RepeatWrapping,
  ClampToEdgeWrapping,
  MirroredRepeatWrapping,
} = THREE;

// Singleton instances
export const textureLoader = new THREE.TextureLoader();
export const clock = new THREE.Clock();

// Helper types
export type ThreeEvent<T> = { target: T } & THREE.Event;
export type MeshProps = JSX.IntrinsicElements["mesh"];
export type GroupProps = JSX.IntrinsicElements["group"];

// Utility functions
export const createDefaultCamera = (fov = 75): THREE.PerspectiveCamera => {
  const camera = new THREE.PerspectiveCamera(
    fov,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  return camera;
};

export const createDefaultRenderer = (): THREE.WebGLRenderer => {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  return renderer;
};
