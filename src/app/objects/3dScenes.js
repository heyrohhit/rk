"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ThreeDObject = (props) => {
  const mountRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [positions, setPositions] = useState([]); // To track positions of objects

  const Object3D = async () => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);  // Make sure the background is transparent
    mountRef.current.appendChild(renderer.domElement);

    // Set scene background to transparent (avoid black)
    scene.background = null; // This makes the scene's background transparent

    // Create the geometry and material for the object
    const geometry = new THREE[props.geometry]();
    const material = new THREE[props.material]({ color: props.color, wireframe: props.wireframe });
    const object = new THREE.Mesh(geometry, material);
    object.scale.set(1.5, 1.5, 1.5); // Adjust scale if needed
    scene.add(object);

    // Add light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);  // Increased light intensity
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Function to generate random position and avoid overlap
    const getRandomPosition = () => {
      const randomX = Math.random() * 2 - 1;  // Random X between -1 and 1
      const randomY = Math.random() * 2 - 1;  // Random Y between -1 and 1

      // Ensure no overlap: Check if the random position is too close to any already placed object
      for (let pos of positions) {
        if (
          Math.abs(randomX - pos.x) < 0.2 && // Ensure objects are not too close
          Math.abs(randomY - pos.y) < 0.2
        ) {
          return getRandomPosition(); // Recursively try again if overlap happens
        }
      }

      // If no overlap, store the position
      setPositions((prevPositions) => [...prevPositions, { x: randomX, y: randomY }]);

      return { x: randomX * (props.maxPosition || 10), y: randomY * (props.maxPosition || 10) };
    };

    // Set the object's random position
    const { x, y } = getRandomPosition();
    object.position.set(x, y, Math.floor(Math.random() * 10)); // Random Z position

    // Set the camera position
    camera.position.z = props.size || 10;

    // Mouse move event listener
    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x: mouseX, y: mouseY });

      // Update the camera position based on mouse movement
      camera.position.x = mouseX * 5;
      camera.position.y = -mouseY * 5;
      camera.lookAt(scene.position);  // Make the camera always look at the center
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      if(props.animation){
      requestAnimationFrame(animate);
      object.rotation.x += 0.01;
      object.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };

    // Start the animation loop immediately
    animate();

    // Resize function to adjust on window resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  };

  useEffect(() => {
    Object3D();
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        backgroundColor: "transparent",  // Ensure the parent container has a transparent background
        position: "absolute",  // Ensure correct positioning
        top: `${props.top}`,
        left: `${props.left}`,
        width: "100vw",  // Full width of the container
        height: "100vh",  // Full height of the container
      }}
    />
  );
};

export default ThreeDObject;
