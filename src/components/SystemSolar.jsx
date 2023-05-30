import React from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import 'aframe-extras/dist/aframe-extras.controls';
const SystemSolar = ()=>{
    return (
    <Scene vr-mode-ui={{enabled:true}}>
        <a-sky src={"https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} />
      <Entity
        geometry={{ primitive: 'sphere', radius: 1.5 }}
        material={{ color: 'yellow' }}
        position={{ x: 0, y: 0, z: -5 }}
        
      />
      <Entity
        geometry={{ primitive: 'sphere', radius: 0.5 }}
        material={{ color: 'blue' }}
        position={{ x: 2, y: 0, z: -5 }}
      />
      <Entity
        geometry={{ primitive: 'sphere', radius: 0.5 }}
        material={{ color: 'green' }}
        position={{ x: 5, y: 0, z: -5 }}
      />
      <Entity
        geometry={{ primitive: 'sphere', radius: 0.5 }}
        material={{ color: 'orange' }}
        position={{ x: 7, y: 0, z: -5 }}
      />
      <Entity
        geometry={{ primitive: 'sphere', radius: 0.8 }}
        material={{ color: 'black' }}
        position={{ x: 9, y: 0, z: -5 }}
      />
      {/* Agrega más planetas y objetos aquí */}
      <Entity
        camera={{ position: { x: 0, y: 1.6, z: 0 } }}
        look-controls="movement-controls: universal"
      />
    </Scene>
  );
}

export default SystemSolar;