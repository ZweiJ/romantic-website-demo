import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Story.css";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
    const storyRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: storyRef.current,
            start: "top 72%",
            toggleActions: "play none none reverse",
            },
        });

        tl.fromTo(
            ".story-label",
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
            ".story-title-line",
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.4,
                stagger: 0.3,
                ease: "power3.out",
            },
            "-=0.35",
            )
            .fromTo(
            ".story-description",
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
            },
            "-=0.45",
            )
            .fromTo(
            ".story-divider",
            {
                scaleX: 0,
                opacity: 0,
            },
            {
                scaleX: 1,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            },
            "-=0.55",
            );
        }, storyRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={storyRef} className="story">
        {/* Ambient cinematic lighting */}
            <div className="story-glow story-glow-primary" />
            <div className="story-glow story-glow-secondary" />

            <div className="story-content">
                <span className="story-label">
                OUR STORY
                </span>

                <div className="story-title">
                <span className="story-title-line">
                    Dari awal,
                </span>

                <span className="story-title-line">
                    sampai sekarang.
                </span>
                </div>

                <div className="story-divider" />

                <p className="story-description">
                    kita telah melalui banyak hal yang sulit,
                    kita berhasil melalui hal-hal sulit tersebut bersama,
                    cerita kita memang unik,
                    dan aku masih ingin menuliskan cerita itu sampai akhir hayat kita,
                    mari kita tulis cerita itu bersama
                </p>
        </div>
        </section>
    );
}