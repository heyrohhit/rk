"use client";
import React, { useEffect, useState } from 'react';
import ThreeDObject from './3dScenes';

const Background = (props) => {
  // State to store random animation values for each object
 // Empty dependency array ensures this runs only once after the component mounts

  // Function to generate a random color in hex format
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getRandomTrueFalse = () => {
    return Math.random() < 0.5;
  }
  const getRandomSize = () => {
    return Math.random() * 3;
  };

  const getMAxPosition = () => {
    return Math.random() * 2;
  }

  return (
    <div style={{ width: "100vw", height: "100vh", position: "absolute", backgroundColor: "transparent" }}>
      {/* First Object */}
      <ThreeDObject 
        geometry={props.geometry} 
        material="MeshPhongMaterial"
        color={getRandomColor()}  
        size={getRandomSize()} 
        wireframe={getRandomTrueFalse()}
        animation={getRandomTrueFalse}  // Random animation for object 1
      />

      {/* Second Object
      <ThreeDObject 
        geometry={props.geometry} 
        color={getRandomColor()}  
        size={getRandomSize()} 
        wireframe={getRandomTrueFalse()}
        maxPosition={getMAxPosition()}
        animation={getRandomTrueFalse()}  // Random animation for object 2
        material={"MeshPhongMaterial"}
      /> */}

      {/* Third Object */}
      {/* <ThreeDObject 
        geometry={props.geometry} 
        color={getRandomColor()}  
        size={getRandomSize()} 
        wireframe={getRandomTrueFalse()}
        animation={getRandomTrueFalse()}  // Random animation for object 3
        maxPosition={getMAxPosition()}
        material={"MeshPhongMaterial"}
      /> */}
    </div>
  );
};

export default Background;
