import React, { useRef, useEffect, useState } from "react";

import { gsap, Power3 } from "gsap";

const TutorialGsap2 = () => {
  let main2 = useRef(null);
  let circleRed = useRef(null);
  let circleYellow = useRef(null);
  let circleBlue = useRef(null);

  const [circleExpand, setCircleExpand] = useState(false);

  const handleExpand = () => {
    gsap.to(circleYellow, 0.8, {
      width: 100,
      height: 100,
      borderRadius: 0,
      ease: Power3.easeOut,
    });

    setCircleExpand(true);
  };

  const handleShrinck = () => {
    gsap.to(circleYellow, 0.8, {
      width: 50,
      height: 50,
      borderRadius: "100%",
      ease: Power3.easeOut,
    });

    setCircleExpand(false);
  };

  useEffect(() => {
    gsap.to(main2, 0, { css: { visibility: "visible" } });
    gsap.to(circleRed, 0.8, {
      opacity: 1,
      x: 40,
      ease: Power3.easeOut,
    });
    gsap.to(circleYellow, 0.8, {
      opacity: 1,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    gsap.to(circleBlue, 0.8, {
      opacity: 1,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.4,
    });
  }, []);

  return (
    <main
      ref={(el) => {
        main2 = el;
      }}
      className="main2"
    >
      <div className="containerCircle">
        <div
          ref={(el) => {
            circleRed = el;
          }}
          className="circle1"
        ></div>
        <div
          ref={(el) => {
            circleYellow = el;
          }}
          className="circle2"
          onClick={circleExpand !== true ? handleExpand : handleShrinck}
        ></div>
        <div
          ref={(el) => {
            circleBlue = el;
          }}
          className="circle3"
        ></div>
      </div>
    </main>
  );
};

export default TutorialGsap2;
