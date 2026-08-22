import "./Background.css"
import { motion } from "framer-motion"

const particles = Array.from({ length: 18 },(_, i) =>({
    id: i,
    left: `${(i * 13 ) % 100}%`,
    top: `${(i * 17 ) % 100}%`,
    duration: 12 + (i % 6),
    delay: i * 0.4,
}))

export default function Background() {
    return (
        <div className="background">

            <div className="gradient-one"/>

            <div className="gradient-two"/>

            <div className="gradient-vignette"/>

            {particles.map((particle) =>(
                <motion.span

                    key={particle.id}

                    className="dust"

                    style={{
                        left:particle.left,
                        top:particle.top
                    }}

                    animate={{
                        y:[0, -50, 0],

                        opacity:[0, .5, 0],

                        scale:[1, 1.4, 1]
                    }}

                    transition={{

                        repeat:Infinity,

                        duration: particle.duration,

                        delay: particle.delay,

                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    )
}