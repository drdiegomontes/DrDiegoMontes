import * as THREE from "three"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      bentPlaneGeometry: any
      meshSineMaterial: any
    }
  }
}

declare module "three" {
  export class BentPlaneGeometry extends THREE.PlaneGeometry {
    constructor(radius: number, ...args: ConstructorParameters<typeof THREE.PlaneGeometry>)
  }

  export class MeshSineMaterial extends THREE.MeshBasicMaterial {
    time: { value: number }
    constructor(parameters?: THREE.MeshBasicMaterialParameters)
  }
}

