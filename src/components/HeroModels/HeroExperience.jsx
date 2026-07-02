import { OrbitControls } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import { Room2 } from "./Room2";
import { Globe } from "./Planet_earth";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' }); 
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>

        <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={5}
        maxDistance={20}
        minPolarAngle={Math.PI /5}
        maxPolarAngle={Math.PI /2}
        />
        <HeroLights />

        <Particles count={80} />

        <group
        scale={isMobile? 0.7 : 1}
        position={[0, -2, 0]}
        rotation={[0, -Math.PI /4, 0]}>
         <Room2 />   
        </group>
        
    </Canvas>
  )
}

export default HeroExperience