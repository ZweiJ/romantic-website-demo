import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./LoveLetter.css";
import Atmosphere from "../Atmosphere/Atmosphere";

gsap.registerPlugin(ScrollTrigger);

export default function LoveLetter() {
    const letterRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: letterRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
            },
        });

        tl.fromTo(
            ".letter-label",
            {
            opacity: 0,
            y: 25,
            },
            {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            },
        )
            .fromTo(
            ".letter-paper",
            {
                opacity: 0,
                y: 80,
                scale: 0.96,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.4,
                ease: "power3.out",
            },
            "-=0.45",
            )
            .fromTo(
            ".letter-greeting",
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            },
            "-=0.5",
            )
            .fromTo(
            ".letter-line",
            {
                opacity: 0,
                y: 18,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
            },
            "-=0.25",
            )
            .fromTo(
            ".letter-signature",
            {
                opacity: 0,
                y: 25,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            },
            "-=0.3",
            );
        }, letterRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
        ref={letterRef}
        className="love-letter"
        >

        <Atmosphere variant="dust"/>

        <div className="letter-glow letter-glow-primary" />
        <div className="letter-glow letter-glow-secondary" />

        <div className="letter-container">
            <span className="letter-label">
            A LETTER FOR YOU
            </span>

            <article className="letter-paper">
            <div className="letter-paper-inner">
                <p className="letter-greeting">
                hai syg,
                </p>

                <div className="letter-message">
                <p className="letter-line">
                    kita sama-sama terus ya,
                </p>

                <p className="letter-line">
                    walau badai yg kita lalui kemarin
                    sangat berat,
                </p>

                <p className="letter-line">
                    tapi aku yakin, kita bisa melangkah
                    jauh lebih dari ini.
                </p>

                <p className="letter-line">
                    kamu bersabar ya syg,
                </p>

                <p className="letter-line">
                    laki-laki mu ini sedang berusaha.
                </p>
                </div>

                <div className="letter-ornament">
                        ✦
                </div>

                <div className="letter-signature">
                <span>with love,</span>

                <strong>
                    Askar
                </strong>
                </div>
            </div>
            </article>
        </div>
        </section>
    );
}