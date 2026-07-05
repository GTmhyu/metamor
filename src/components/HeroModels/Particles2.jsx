import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Particles2 = ({ 
  count = 400,
  rocketCount = 5,
  colors = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff6fb7", "#a66cff", "#ff9f43"]
}) => {
  const mesh = useRef();
  const [particles, setParticles] = useState([]);
  const [phase, setPhase] = useState('ready'); // 'ready', 'rising', 'exploding', 'falling'

  // Inisialisasi partikel
  const initParticles = useMemo(() => {
    const temp = [];
    const totalParticles = count + rocketCount * 20;

    // Buat roket (partikel yang naik)
    for (let r = 0; r < rocketCount; r++) {
      const startX = (Math.random() - 0.5) * 15;
      const startZ = (Math.random() - 0.5) * 15;
      const targetY = 5 + Math.random() * 6; // Ketinggian ledakan
      const color = colors[Math.floor(Math.random() * colors.length)];

      // Partikel roket (jejak)
      for (let i = 0; i < 20; i++) {
        temp.push({
          type: 'rocket',
          x: startX + (Math.random() - 0.5) * 0.3,
          y: -2 + (Math.random() - 0.5) * 0.5,
          z: startZ + (Math.random() - 0.5) * 0.3,
          startX: startX,
          startZ: startZ,
          targetY: targetY,
          vx: (Math.random() - 0.5) * 0.01,
          vy: 0.03 + Math.random() * 0.02,
          vz: (Math.random() - 0.5) * 0.01,
          color: color,
          size: 0.04 + Math.random() * 0.03,
          life: 1.0,
          maxLife: 2 + Math.random() * 1,
          phase: Math.random() * Math.PI * 2,
          exploded: false,
          // Untuk partikel ledakan
          vx2: 0,
          vy2: 0,
          vz2: 0,
          gravity: 0.002,
          drag: 0.99,
        });
      }

      // Partikel ledakan (akan aktif saat roket mencapai target)
      const burstParticles = Math.floor(count / rocketCount);
      for (let i = 0; i < burstParticles; i++) {
        const speed = 0.03 + Math.random() * 0.05;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        temp.push({
          type: 'burst',
          x: startX,
          y: targetY,
          z: startZ,
          startX: startX,
          startZ: startZ,
          targetY: targetY,
          vx: 0,
          vy: 0,
          vz: 0,
          color: color,
          size: 0.03 + Math.random() * 0.06,
          life: 0, // Mulai mati
          maxLife: 1.5 + Math.random() * 1.5,
          phase: Math.random() * Math.PI * 2,
          exploded: false,
          // Kecepatan ledakan
          vx2: Math.sin(phi) * Math.cos(theta) * speed * (0.5 + Math.random()),
          vy2: Math.sin(phi) * Math.sin(theta) * speed * (0.5 + Math.random()) + 0.01,
          vz2: Math.cos(phi) * speed * (0.5 + Math.random()),
          gravity: 0.001 + Math.random() * 0.002,
          drag: 0.98 + Math.random() * 0.01,
          sparkle: 0.5 + Math.random() * 0.5,
        });
      }
    }

    return temp;
  }, [count, rocketCount, colors]);

  const [particleData, setParticleData] = useState(initParticles);
  const [rocketStates, setRocketStates] = useState(
    Array(rocketCount).fill().map(() => ({
      active: true,
      exploded: false,
      y: -2,
      targetY: 5 + Math.random() * 6,
    }))
  );

  useFrame((state, delta) => {
    if (!mesh.current) return;

    const positions = mesh.current.geometry.attributes.position.array;
    const colorsAttr = mesh.current.geometry.attributes.color;
    const sizesAttr = mesh.current.geometry.attributes.size;
    const time = state.clock.getElapsedTime();

    let anyActive = false;

    particleData.forEach((p, i) => {
      if (p.type === 'rocket') {
        // Gerakan roket naik
        if (!p.exploded) {
          p.x += p.vx + Math.sin(time * 3 + p.phase) * 0.002;
          p.y += p.vy;
          p.z += p.vz + Math.cos(time * 3 + p.phase) * 0.002;

          // Cek apakah mencapai target
          if (p.y >= p.targetY) {
            p.exploded = true;
            // Aktifkan partikel ledakan yang terkait
            particleData.forEach((bp) => {
              if (bp.type === 'burst' && 
                  bp.startX === p.startX && 
                  bp.startZ === p.startZ && 
                  bp.targetY === p.targetY) {
                bp.life = 1.0;
                bp.x = p.x;
                bp.y = p.y;
                bp.z = p.z;
                // Beri variasi kecepatan
                bp.vx2 = (Math.random() - 0.5) * 0.08;
                bp.vy2 = (Math.random() - 0.5) * 0.08 + 0.02;
                bp.vz2 = (Math.random() - 0.5) * 0.08;
              }
            });
          }

          // Efek berkilau untuk roket
          p.size = 0.04 + 0.02 * Math.sin(time * 15 + p.phase);

          // Reset roket jika terlalu tinggi
          if (p.y > 15) {
            p.y = -2;
            p.x = (Math.random() - 0.5) * 15;
            p.z = (Math.random() - 0.5) * 15;
            p.targetY = 5 + Math.random() * 6;
            p.exploded = false;
            p.vy = 0.03 + Math.random() * 0.02;
          }
        } else {
          // Roket setelah meledak - turun perlahan
          p.y -= 0.005;
          p.size *= 0.995;
          if (p.y < -3) {
            // Reset roket
            p.y = -2;
            p.x = (Math.random() - 0.5) * 15;
            p.z = (Math.random() - 0.5) * 15;
            p.targetY = 5 + Math.random() * 6;
            p.exploded = false;
            p.vy = 0.03 + Math.random() * 0.02;
            p.size = 0.04 + Math.random() * 0.03;
          }
        }
      } else if (p.type === 'burst') {
        // Partikel ledakan
        if (p.life > 0) {
          // Fisika ledakan
          p.vx2 *= p.drag;
          p.vy2 *= p.drag;
          p.vz2 *= p.drag;
          p.vy2 -= p.gravity;

          p.x += p.vx2;
          p.y += p.vy2;
          p.z += p.vz2;

          // Kurangi umur
          p.life -= delta / p.maxLife;

          // Efek berkilau
          p.sparkle = 0.5 + 0.5 * Math.sin(time * 20 + p.phase);
          
          anyActive = true;
        }
      }

      // Update posisi
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;

      // Update warna
      const hexColor = parseInt(p.color.slice(1), 16);
      let lifeRatio = p.type === 'rocket' ? 1 : Math.max(0, p.life);
      
      // Warna lebih terang untuk roket
      if (p.type === 'rocket') {
        const brightness = 0.8 + 0.2 * Math.sin(time * 10 + p.phase);
        colorsAttr.array[i * 3] = ((hexColor >> 16) & 255) / 255 * brightness;
        colorsAttr.array[i * 3 + 1] = ((hexColor >> 8) & 255) / 255 * brightness * 0.6;
        colorsAttr.array[i * 3 + 2] = (hexColor & 255) / 255 * brightness * 0.3;
      } else {
        // Ledakan dengan efek fading
        const brightness = Math.max(0, lifeRatio);
        colorsAttr.array[i * 3] = ((hexColor >> 16) & 255) / 255 * brightness * p.sparkle;
        colorsAttr.array[i * 3 + 1] = ((hexColor >> 8) & 255) / 255 * brightness * p.sparkle;
        colorsAttr.array[i * 3 + 2] = (hexColor & 255) / 255 * brightness * p.sparkle;
      }

      // Update ukuran
      if (p.type === 'rocket') {
        sizesAttr.array[i] = p.size * (0.8 + 0.2 * Math.sin(time * 20 + p.phase));
      } else {
        const sizeRatio = Math.max(0, p.life);
        sizesAttr.array[i] = p.size * (0.3 + sizeRatio * 0.7) * (0.8 + 0.2 * p.sparkle);
      }
    });

    // Jika semua ledakan selesai, reset beberapa partikel untuk efek berkelanjutan
    if (!anyActive) {
      // Reset beberapa roket untuk ledakan baru
      particleData.forEach((p, i) => {
        if (p.type === 'burst' && p.life <= 0) {
          // Reset partikel ledakan untuk ledakan berikutnya
          p.life = 0;
        }
      });
    }

    // Tandai atribut perlu diupdate
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.geometry.attributes.color.needsUpdate = true;
    mesh.current.geometry.attributes.size.needsUpdate = true;
  });

  // Siapkan data buffer awal
  const positions = new Float32Array(particleData.length * 3);
  const colorData = new Float32Array(particleData.length * 3);
  const sizeData = new Float32Array(particleData.length);

  particleData.forEach((p, i) => {
    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.y;
    positions[i * 3 + 2] = p.z;
    
    const hexColor = parseInt(p.color.slice(1), 16);
    colorData[i * 3] = ((hexColor >> 16) & 255) / 255;
    colorData[i * 3 + 1] = ((hexColor >> 8) & 255) / 255;
    colorData[i * 3 + 2] = (hexColor & 255) / 255;
    
    sizeData[i] = p.size;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleData.length}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleData.length}
          array={colorData}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleData.length}
          array={sizeData}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.9}
        blending={2}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

export default Particles2;