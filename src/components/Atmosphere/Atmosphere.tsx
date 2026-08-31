import "./Atmosphere.css"

type AtmosphereVariant = 
    | "dust"
    | "rain"
    | "final";

interface AtmosphereProps {
    variant?: AtmosphereVariant;
}

const particles = [
    { left: "8%", top: "78%", delay: "0s", duration: "13s"},
    { left: "17%", top: "62%", delay: "2.4s", duration: "16s"},
    { left: "29%", top: "86%", delay: "5s", duration: "14s"},
    { left: "41%", top: "72%", delay: "1.2s", duration: "18s"},
    { left: "59%", top: "88%", delay: "7s", duration: "15s"},
    { left: "63%", top: "67%", delay: "3.5s", duration: "17s"},
    { left: "74%", top: "82%", delay: "6s", duration: "14s"},
    { left: "84%", top: "69%", delay: "1.8s", duration: "19s"},
    { left: "92%", top: "85%", delay: "4.3s", duration: "16s"},
]

const rainDrops = [
    { left: "5%", delay: "0s", duration: "2.8s"},
    { left: "13%", delay: "1.4s", duration: "3.2s"},
    { left: "21%", delay: "0.7s", duration: "3.6s"},
    { left: "31%", delay: "2.2s", duration: "3s"},
    { left: "42%", delay: "1s", duration: "3.8s"},
    { left: "54%", delay: "2.7s", duration: "3.3s"},
    { left: "65%", delay: "0.3s", duration: "3.5s"},
    { left: "74%", delay: "1.8s", duration: "3.1s"},
    { left: "84%", delay: "0.9s", duration: "3.7s"},
    { left: "94%", delay: "2.4s", duration: "3.4s"},
]

export default function Atmosphere({
        variant = "dust",
}: AtmosphereProps) {
    const showRain =
        variant === "rain" ||
        variant === "final";

    const showParticles =
        variant === "dust" ||
        variant === "final";

    return (
        <div
            className={`atmosphere atmosphere-${variant}`}
            aria-hidden="true"
        >

            {showParticles && (
                <div className="atmosphere-particles">
                    {particles.map ((particle, index) => (
                        <span
                            key={index}
                            className="atmosphere-particle"
                            style={{
                                left: particle.left,
                                top: particle.top,
                                animationDelay: particle.delay,
                                animationDuration: particle.duration,
                            }}
                        />
                    ))}  
                </div>
            )}

            {showRain && (
                <div className="atmosphere-rain">
                    {rainDrops.map((drop, index) => (
                        <span
                            key={index}
                            className="atmosphere-rain-drop"
                            style={{
                                left: drop.left,
                                animationDelay: drop.delay,
                                animationDuration: drop.duration,
                            }}
                        />
                    ))}
                </div>
            )}

            {variant === "final" && (
                <div className="atmosphere-light-drift"/>
            )}
        </div>
    );
}