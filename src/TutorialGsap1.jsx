import React, { useState, useRef, useEffect } from "react";

import { TweenMax, gsap, Power3 } from "gsap";

const TutorialGsap1 = () => {
  let title = useRef(null);
  let p = useRef(null);

  useEffect(() => {
    gsap.to(title, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });

    gsap.to(p, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  }, []);

  return (
    <main className="main">
      <h1
        className="title1"
        ref={(el) => {
          title = el;
        }}
      >
        Hola Mundo!
      </h1>
      <p
        className="p1"
        ref={(el) => {
          p = el;
        }}
      >
        Lorem ipsum dolor sit.
      </p>
    </main>
  );
};

export default TutorialGsap1;
