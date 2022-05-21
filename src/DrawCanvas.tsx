import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Box from "./Box";
// import './js/three'

const DrawCanvas: FC = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas>
        <ambientLight>
          <PerspectiveCamera makeDefault />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          <Box position={[0, 0, -2.0]} />

        </ambientLight>
      </Canvas>
    </Suspense>
  );
};

export default DrawCanvas;