import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeScene: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const sceneElement = sceneRef.current;

    if (!sceneElement) return;
    let model: THREE.Object3D | undefined;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(15, 512 / 512, 0.1, 1000);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);
    camera.position.set(0, 6, 10);
    camera.rotation.set(-Math.PI / 6, 0, 0);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(256, 256);
    sceneElement.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(
      "gamecube.glb",
      (gltf) => {
        model = gltf.scene;
        if (model) {
          model.traverse((object) => {
            if (object instanceof THREE.Mesh) {
              object.material.transparent = true;
              object.material.opacity = 1;
            }
          });
        }
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading GLB file:", error);
      }
    );

    const animate = (): void => {
      if (model) {
        model.rotation.y += 0.002;
      }
      rendererRef.current?.render(scene, camera);
      requestAnimationFrame(animate);
    };

    rendererRef.current = renderer;
    animate();

    return () => {
      if (sceneElement && rendererRef.current) {
        sceneElement.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return <div className="flex justify-center" ref={sceneRef} />;
};

export default ThreeScene;
