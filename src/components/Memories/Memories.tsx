import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Memories.css";
import Atmosphere from "../Atmosphere/Atmosphere";

gsap.registerPlugin(ScrollTrigger);

const memories = [
    {
        image: "/memories/memory-1.jpg",
        caption: "A little moment that became part of us.",
        position: "left",
    },
    {
        image: "/memories/memory-2.jpg",
        caption: "Somewhere between the conversations and the laughter.",
        position: "right",
    },
    {
        image: "/memories/memory-3.jpg",
        caption: "The moments I wish I could keep forever.",
        position: "left",
    },
    {
        image: "/memories/memory-4.jpg",
        caption: "And somehow, we're still writing this story.",
        position: "right",
    },
];

export default function Memories() {
    const memoriesRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(
            ".memory-item",
        );

        items.forEach((item) => {
            const image = item.querySelector(".memory-image");
            const caption = item.querySelector(".memory-caption");

            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            });

            tl.fromTo(
            image,
            {
                opacity: 0,
                y: 70,
                scale: 0.94,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.4,
                ease: "power3.out",
            },
            ).fromTo(
            caption,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
            },
            "-=0.6",
            );
        });
        }, memoriesRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
        ref={memoriesRef}
        className="memories"
        >
        <Atmosphere variant="dust"/>
        
        <div className="memories-header">
            <span className="memories-label">
            MEMORIES
            </span>

            <h2>
            Little pieces
            <br />
            of us.
            </h2>

            <p>
            Beberapa momen kecil yang mungkin sederhana,
            tapi selalu punya tempat sendiri di hati.
            </p>
        </div>

        <div className="memories-gallery">
            {memories.map((memory, index) => (
            <article
                className={`memory-item memory-item-${memory.position}`}
                key={memory.image}
            >
                <div className="memory-image-wrapper">
                <img
                    className="memory-image"
                    src={memory.image}
                    alt={memory.caption}
                />
                </div>

                <p className="memory-caption">
                <span>
                    {String(index + 1).padStart(2, "0")}
                </span>

                {memory.caption}
                </p>
            </article>
            ))}
        </div>
        </section>
    );
}