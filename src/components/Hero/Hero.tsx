import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const ambientPrimaryRef = useRef<HTMLDivElement>(null);
    const ambientSecondaryRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
            const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                delay:0.4,
                defaults: { ease: "power3.out" },
            });

            tl.fromTo(
                ".hero-line",
                {
                opacity: 0,
                y: 35,
                },
                {
                opacity: 1,
                y: 0,
                duration: 1.8,
                stagger: 0.65,
                ease: "power3.out",
                },
            ).fromTo(
                ".hero-credit",
                {
                opacity: 0,
                y: 20,
                },
                {
                opacity: 1,
                y: 0,
                duration: 1.4,
                },
                "-=0.3",
            );

            tl.eventCallback("onComplete", () => {
                gsap.to(".hero-content",{
                    y: -4,
                    duration: 4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });

            gsap.to(ambientPrimaryRef.current, {
                x: 24,
                y: -16,
                scale: 1.08,
                opacity: 0.85,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(ambientSecondaryRef.current, {
                x: -30,
                y: 20,
                scale: 1.1,
                opacity: 0.55,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            }, heroRef);

            return () => ctx.revert();
        }, []);

    return (
        <section ref={heroRef} className="hero">
            <div ref={ambientPrimaryRef} className="hero-ambient hero-ambient-primary"/>
            <div ref={ambientSecondaryRef} className="hero-ambient hero-ambient-secondary"/>

            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="hero-line">hai syg</span>

                    <span className="hero-line">
                        kita sama-sama
                    </span>

                    <span className="hero-line">Terus ya</span>

                </h1>

                <p className="hero-credit">
                    by Askar
                </p>
            </div>
        </section>
    );
}