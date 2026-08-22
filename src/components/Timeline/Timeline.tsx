import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Timeline.css";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
    {
        title: "THE BEGINNING",
        text: "Semuanya bermula dari sebuah balasan sederhana di story TikTok tentang Fish It di Roblox.",
    },
    {
        title: "GETTING CLOSER",
        text: "Menghabiskan banyak waktu, saling menemani dan membagi cerita di dunia virtual yang sama.",
    },
    {
        title: "BECOMING US",
        text: 'Momen jadian yang tak biasa, berawal dari kalimat kecil: "You are my favorite secret."',
    },
    {
        title: "THE HARD DAYS",
        text: "Kami sempat memilih arah yang berbeda untuk mencari jawaban. Namun, jeda itu membuktikan satu hal: kami tak pernah benar-benar bisa saling melepaskan.",
    },
    {
        title: "TODAY",
        text: "Setelah melewati ruang dan jarak, kami kembali. Kali ini dengan rasa yang jauh lebih dalam dan dewasa.",
    },
];

export default function Timeline() {
    const timelineRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(
            ".timeline-item",
        );

        items.forEach((item) => {
            const marker = item.querySelector(".timeline-marker");
            const content = item.querySelector(".timeline-item-content");

            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
            });

            tl.fromTo(
            marker,
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(1.7)",
            },
            ).fromTo(
            content,
            {
                opacity: 0,
                y: 45,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
            },
            "-=0.3",
            );
        });
    }, timelineRef);

    return () => ctx.revert();
    }, []);

    return (
        <section
        ref={timelineRef}
        className="timeline"
        >
        <div className="timeline-header">
            <span className="timeline-label">
            OUR JOURNEY
            </span>

            <h2>
            Lima bab,
            <br />
            satu perjalanan.
            </h2>
        </div>

        <div className="timeline-track">
            <div className="timeline-line" />

            {milestones.map((milestone, index) => (
            <article
                className="timeline-item"
                key={milestone.title}
            >
                <div className="timeline-marker">
                <span />
                </div>

                <div className="timeline-item-content">
                <span className="timeline-number">
                    {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                    {milestone.title}
                </h3>

                <p>
                    {milestone.text}
                </p>
                </div>
            </article>
            ))}
        </div>
        </section>
    );
}