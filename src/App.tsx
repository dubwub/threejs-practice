// import { createRoot } from 'react-dom/client'
import React from 'react';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

function RotatingBox() {
  const myMesh = React.useRef<MeshProps>()
  useFrame(({ clock }: any) => {
      myMesh.current!.rotation.x = clock.getElapsedTime()
  })
  const [ largeness, setLargeness ] = React.useState(2);
  const accumulateAdditionalMass = () => {
    // alert('whee!!');
    setLargeness(largeness + 1);
  }
  return (
    <mesh ref={myMesh} onClick={accumulateAdditionalMass}>
      <boxGeometry args={[largeness, largeness, largeness]} />
      <meshStandardMaterial />
    </mesh>
  )
}

function App() {
  return (
    <div id="canvas-container">
      <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100] }}>
        <OrbitControls />
        <axesHelper />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <RotatingBox />
      </Canvas>
    </div>
  )
}

// createRoot(document.getElementById('root')).render(<App />)

export default App;
