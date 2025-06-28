"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDObject({
  geometry = "BoxGeometry",
  material = "MeshBasicMaterial",
  color = "white",
  wireframe = false,
  size = 0.5,
  maxPosition = 1,
  animation = true,
  mouseControl = false,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
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

    // Geometry Creation
    let objectGeometry;
    try {
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
      }
    } catch (error) {
      console.error("Geometry creation failed:", error);
      mount.style.backgroundColor = "black"; // Fallback background
      return;
    }

    // Material
    let objectMaterial;
    try {
      objectMaterial = new THREE[material]({
        color,
        wireframe,
      });
    } catch (error) {
      console.error("Material creation failed:", error);
      mount.style.backgroundColor = "black"; // Fallback background
      return;
    }

    const mesh = new THREE.Mesh(objectGeometry, objectMaterial);

    // Scaling
    const minDimension = Math.min(width, height);
    const scaleFactor = (minDimension / 100) * (size / 3);
    mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
    mesh.position.set(0, 0, 0);

    scene.add(mesh);

    // Mouse Control
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
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (animation) {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      const newWidth = mount.clientWidth || window.innerWidth;
      const newHeight = mount.clientHeight || window.innerHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mouseControl) mount.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
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
        position: "absolute",
      }}
    />
  );
}