
import React from "react";
import Typewriter from "typewriter-effect";

// document.getElementById("typing-animation").addEventListener("load", Type);

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aspiring Software Engineer",
          "Engineering Science Student @ UofT",
          "Passionate about big data & Machine learning",
          "Ski & snowboarding instructor",
          "Music enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;


function loadImage() {
  alert("Image is ready");
}

// import Typewriter from 'typewriter-effect/dist/core';

// new Typewriter('#typewriter', {
//   strings: ['Hello', 'World'],
//   autoStart: true,
// })
