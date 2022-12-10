import React, { useRef, useEffect } from "react";
import styles from "./page.module.css";

import { gsap, Power3, Power2, TimelineLite } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const TutorialGsap4 = () => {
  let title1 = useRef(null);
  let title2 = useRef(null);
  let title3 = useRef(null);

  let p = useRef(null);
  let btn = useRef(null);

  let sectionPage = useRef(null);
  let containerImg = CSSRulePlugin.getRule(".containerImg:after");
  let containerImg2 = useRef(null);
  let imagePage = useRef(null);

  const ttl = new TimelineLite();

  useEffect(() => {
    ttl
      .to(sectionPage, 0.5, { css: { visibility: "visible" } })
      .to(containerImg, 1.4, { height: "0%", ease: Power2.easeOut })
      .to(imagePage, 1.4, {
        scale: 1,
        ease: Power2.easeOut,
        delay: -1.6,
      });

    gsap.to(title1, 0.8, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
    });

    gsap.to(title2, 0.8, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 0.2,
    });

    gsap.to(title3, 0.8, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 0.4,
    });

    gsap.to(p, 0.8, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut,
      delay: 0.6,
    });

    gsap.to(btn, 0.8, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut,
      delay: 0.8,
    });
  }, []);

  return (
    <>
      <section
        ref={(el) => {
          sectionPage = el;
        }}
        className={styles.sectionPage}
      >
        <div className={styles.containerPage}>
          <div className={styles.containerTitlesPage}>
            <h1 className={styles.titlePage}>
              <div className={styles.containerTitle1}>
                <div
                  ref={(el) => {
                    title1 = el;
                  }}
                  className={styles.title1}
                >
                  Reliving the burden
                </div>
              </div>
              <div className={styles.containerTitle2}>
                <div
                  ref={(el) => {
                    title2 = el;
                  }}
                  className={styles.title2}
                >
                  of disease caused
                </div>
              </div>
              <div className={styles.containerTitle3}>
                <div
                  ref={(el) => {
                    title3 = el;
                  }}
                  className={styles.title3}
                >
                  by behavios.
                </div>
              </div>
            </h1>
            <p
              ref={(el) => {
                p = el;
              }}
              className={styles.pPage}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo,
              <br /> doloribus sit. Rerum ut provident deleniti quo id
              consequuntur maiores maxime <br /> laudantium dignissimos adipisci
              et pariatur odit cum!
            </p>
            <button
              ref={(el) => {
                btn = el;
              }}
              className={styles.btnPage}
            >
              explore
            </button>
          </div>

          <div
            className="containerImg"
            ref={(el) => {
              containerImg2 = el;
            }}
          >
            <img
              ref={(el) => {
                imagePage = el;
              }}
              className={styles.imagePage}
              src="https://images.unsplash.com/photo-1670258880233-ad36f08cf1a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              alt="image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TutorialGsap4;
