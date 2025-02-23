import * as THREE from "three";

// Export the THREE namespace itself
export { THREE };

// Re-export specific commonly used items
export const {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Mesh,
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
  Group,
  Object3D,
  Raycaster,
  BufferGeometry,
  BufferAttribute,
  Material,
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

// Create a singleton instance of commonly used utilities
export const textureLoader = new THREE.TextureLoader();
export const clock = new THREE.Clock();
