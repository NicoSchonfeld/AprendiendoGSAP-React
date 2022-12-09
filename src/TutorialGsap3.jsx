import React, { useRef, useEffect } from "react";

import { gsap, Power2, TimelineLite } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const TutorialGsap3 = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".imgContainer:after");

  let title2 = useRef(null);

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeOut })
      .to(image, 1.4, {
        scale: 1.6,
        ease: Power2.easeOut,
        delay: -1.6,
      });

    gsap.to(title2, 0.8, { opacity: 1, y: -30, delay: 0.4 });
  }, []);

  return (
    <>
      <main
        className="main2"
        ref={(el) => {
          container = el;
        }}
      >
        <h1
          className="title1"
          ref={(el) => {
            title2 = el;
          }}
        >
          Photo
        </h1>
        <div className="imgContainer">
          <img
            className="img1"
            ref={(el) => {
              image = el;
            }}
            src="https://images.unsplash.com/photo-1670258880217-00073b17bbfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="image"
          />
        </div>
      </main>
    </>
  );
};

export default TutorialGsap3;
