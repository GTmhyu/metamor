import * as THREE from 'three';



const HeroLights = () => {
  return (
    <>  
    <spotLight 
     position={[2, 5, 6]}
     angle={0.15}
     penumbra={0.2}
     intensity={100}
     color="white"
    />
    <spotLight 
     position={[4, 5, 4]}
     angle={0.3}
     penumbra={0.5}
     intensity={40}
     color="4cc9f0"
    />
    <spotLight 
     position={[-3, 5, 5]}
     angle={0.4}
     penumbra={1}
     intensity={50}
     color="9d4edd"
    />

    <primitive 
    object={new THREE.RectAreaLight('#A259FF', 10, 10, 10)}
    position={[0, 1, 0]}
    intensity={1}
    rotation={[-Math.PI / 4, Math.PI / 4, 0]}
    />
    <pointLight
    position={[0,1,0]}
    intensity={1}
    color="#7209b7"
    />
    </>
  )
}

export default HeroLights