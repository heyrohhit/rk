'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDObject({
  geometry = "BoxGeometry",
  material = "MeshBasicMaterial",
  color = "white",
  wireframe = false,
  size = 1,
  maxPosition = 1,
  animation = true,
  mouseControl = false,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance", // For mobile WebGL compatibility
      preserveDrawingBuffer: false // Avoid buffer issues
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mount.appendChild(renderer.domElement);

    // Scene and Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    camera.position.z = 3;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // ✅ Geometry Creation
    let objectGeometry;
    switch (geometry) {
      case "BoxGeometry":
        objectGeometry = new THREE.BoxGeometry(1, 1, 1);
        break;
      case "TetrahedronGeometry":
        objectGeometry = new THREE.TetrahedronGeometry(1);
        break;
      case "SphereGeometry":
        objectGeometry = new THREE.SphereGeometry(0.7, 32, 32);
        break;
      case "DodecahedronGeometry":
        objectGeometry = new THREE.DodecahedronGeometry(1);
        break;
      case "TorusGeometry":
        objectGeometry = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
        break;
      case "TorusKnotGeometry":
        objectGeometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16);
        break;
      default:
        objectGeometry = new THREE.BoxGeometry(1, 1, 1);
        break;
    }

    // ✅ Material
    const objectMaterial = new THREE[material]({
      color,
      wireframe,
    });

    // ✅ Mesh Creation (Fixed: Use objectMaterial instead of material)
    const mesh = new THREE.Mesh(objectGeometry, objectMaterial);

    // ✅ Scaling based on container size
    const minDimension = Math.min(width, height);
    const scaleFactor = (minDimension / 100) * (size / 3); // Fine-tuned
    mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);

    // ✅ Position (Centered)
    mesh.position.set(0, 0, 0);

    scene.add(mesh);

    // Optional mouse control
    const onMouseMove = (event) => {
      if (!mouseControl) return;
      const rect = mount.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      camera.position.x = mouseX * 2;
      camera.position.y = mouseY * 2;
      camera.lookAt(scene.position);
    };

    if (mouseControl) {
      mount.addEventListener("mousemove", onMouseMove);
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (animation) {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mouseControl) {
        mount.removeEventListener("mousemove", onMouseMove);
      }
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [geometry, material, color, wireframe, size, maxPosition, animation, mouseControl]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "transparent",
        position: "relative", // Ensure canvas fits container
      }}
    />
  );
}
