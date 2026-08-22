import { useLayoutEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import gsap from "gsap";

import "./Envelope.css";

import Paper from "../../assets/svg/envelope/Paper";
import Back from "../../assets/svg/envelope/Back";
import Front from "../../assets/svg/envelope/Front";
import Flap from "../../assets/svg/envelope/Flap";
import Seal from "../../assets/svg/envelope/Seal";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {

  const [isOpening, setIsOpening] = useState(false);

  // Main envelope container
  const envelopeRef = useRef<HTMLDivElement>(null);

  // Individual envelope layers
  const paperRef = useRef<SVGSVGElement>(null);
  const backRef = useRef<SVGSVGElement>(null);
  const frontRef = useRef<SVGSVGElement>(null);
  const flapRef = useRef<SVGSVGElement>(null);
  const sealRef = useRef<SVGSVGElement>(null);

  // Wax seal button
  const sealButtonRef = useRef<HTMLButtonElement>(null);

  const handleSealClick = () => {
    if (isOpening) return;
      setIsOpening(true);

      const envelope = envelopeRef.current;
      const seal = sealRef.current;
      const flap = flapRef.current;
      const paper = paperRef.current;

      if(!envelope || !seal || !flap || !paper){
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease : "power2.inOut",
        },

        onComplete: () =>{
          onOpen();
        },
      });

      timeline
      //1. seal press down
        .to(seal, {
          scale: 0.92,
          duration: 0.18,
          ease: "power1.out",
          })

      //2. seal release and disappears
        .to(seal, {
          scale: 0.72,
          opacity: 0,
          duration: 0.4,
          ease: "power1.in",
          })
        
      //3. Flap open
        .to(flap, {
          rotateX: 145,
          duration: 1.15,
          ease: "power3.inOut"
          }, "-=0.08"
        )
      
      //4. paper rises
      .to(paper,{
        y: -190,
        scale: 1.025,
        rotateZ: -1.2,
        duration: 1.4,
        ease: "power3.out",
          }, "-=0.15"
        )

      //5. hold the letter briefly
      .to({},{
        duration:0.7,
      })

      //6. fade envelope
      .to(envelope, {
        opacity:0,
        scale: 1.025,
        duration: 0.9,
        ease: "power2.inOut"
      })
  }

  return (
    <section className="scene">
      <div
        ref={envelopeRef}
        className="envelope"
      >
        {/* Ambient lighting */}
        <div className="ambient-light" />

        {/* Letter */}
        <div className="paper-layer">
          <Paper ref={paperRef} />
        </div>

        {/* Envelope back */}
        <div className="back-layer">
          <Back ref={backRef} />
        </div>

        {/* Envelope front */}
        <div className="front-layer">
          <Front ref={frontRef} />
        </div>

        {/* Envelope flap */}
        <div className="flap-layer">
          <Flap ref={flapRef} />
        </div>

        {/* Wax seal */}
        <button
          ref={sealButtonRef}
          type="button"
          className="seal-layer"
          onClick={handleSealClick}
          aria-label="Open love letter"
        >
          <Seal ref={sealRef} />
        </button>
      </div>

      <span className="click-text">
        Click To Open
      </span>
    </section>
  );
}