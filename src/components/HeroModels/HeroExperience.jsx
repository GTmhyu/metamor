import { OrbitControls } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' }); 
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <Canvas camera={{ position: [0, 5, -20], fov: 15 }}>
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[5, 5, 10]}  intensity={2} />
        <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={5}
        maxDistance={20}
        minPolarAngle={Math.PI /5}
        maxPolarAngle={Math.PI /2}
        />

        <Room />
    </Canvas>
  )
}

export default HeroExperience