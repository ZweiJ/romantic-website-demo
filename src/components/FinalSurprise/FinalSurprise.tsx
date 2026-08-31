import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./FinalSurprise.css";
import Atmosphere from "../Atmosphere/Atmosphere";

gsap.registerPlugin(ScrollTrigger);

export default function FinalSurprise() {
  const sectionRef = useRef<HTMLElement>(null);

  const [revealed, setRevealed] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".final-label",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
      )
        .fromTo(
          ".final-title",
          {
            opacity: 0,
            y: 35,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .fromTo(
          ".final-description",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7",
        )
        .fromTo(
          ".final-button",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleReveal = () => {
    setRevealed(true);
  };

  return (
    <section
      ref={sectionRef}
      className={`final-surprise ${
        revealed ? "final-surprise-revealed" : ""
      }`}
    >

      <Atmosphere variant="final"/>

      <div className="final-orb final-orb-primary" />
      <div className="final-orb final-orb-secondary" />

      <div className="final-content">
        <span className="final-label">
          ONE LAST THING
        </span>

        {!revealed ? (
          <>
            <h2 className="final-title">
              Before you go...
            </h2>

            <p className="final-description">
              there is something I still want
              you to know.
            </p>

            <button
              type="button"
              className="final-button"
              onClick={handleReveal}
            >
              <span>Open my heart</span>
              <span className="final-arrow">→</span>
            </button>
          </>
        ) : (
          <div className="final-message">
            <span className="final-symbol">
              ✦
            </span>

            <h2>
              I choose you.
            </h2>

            <p>
              Bukan karena semuanya selalu mudah.
              <br />
              Tapi karena setelah semuanya,
              <br />
              aku masih ingin berjalan
              bersamamu.
            </p>

            <div className="final-signature">
              <span>always,</span>

              <strong>
                Askar
              </strong>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}