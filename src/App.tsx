// import { createRoot } from 'react-dom/client'
import React from 'react';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'

function RotatingBox() {
  const myMesh = React.useRef<MeshProps>()
  useFrame(({ clock }: any) => {
      myMesh.current!.rotation.x = clock.getElapsedTime()
  })
  return (
    <mesh ref={myMesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  )
}

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <RotatingBox />
      </Canvas>
    </div>
  )
}

// createRoot(document.getElementById('root')).render(<App />)

export default App;
