import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import "./AudioPlayer.css";

interface AudioPlayerProps {
  play: boolean;
}

/* ==========================================================
   AUDIO SETTINGS
========================================================== */

const TARGET_VOLUME = 0.35;

/* ==========================================================
   AUDIO PLAYER
========================================================== */

export default function AudioPlayer({
  play,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [muted, setMuted] = useState(false);

  /* ========================================================
     PLAY / PAUSE + CINEMATIC FADE
  ======================================================== */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    let volumeTween: gsap.core.Tween | undefined;

    if (play) {
      /* Start completely silent */
      audio.volume = 0;

      audio
        .play()
        .then(() => {
          /* Slowly fade the music in */
          volumeTween = gsap.to(audio, {
            volume: TARGET_VOLUME,
            duration: 3,
            ease: "power2.out",
          });
        })
        .catch(() => {
          /*
           * Some browsers may block autoplay.
           * The AJ seal interaction should normally
           * allow playback.
           */
        });
    } else {
      /* Fade out before pausing */
      volumeTween = gsap.to(audio, {
        volume: 0,
        duration: 1.5,
        ease: "power2.inOut",

        onComplete: () => {
          audio.pause();
        },
      });
    }

    return () => {
      volumeTween?.kill();
    };
  }, [play]);

  /* ========================================================
     MUTE / UNMUTE
  ======================================================== */

  const toggleMute = () => {
    const audio = audioRef.current;

    if (!audio) return;

    /*
     * MUSIC IS CURRENTLY ON
     * Fade to zero, then mute.
     */
    if (!muted) {
      gsap.to(audio, {
        volume: 0,
        duration: 0.8,
        ease: "power2.inOut",

        onComplete: () => {
            audio.muted = true;

            setMuted(true);
        },
        });

        return;
    }

    /*
     * MUSIC IS CURRENTLY MUTED
     * Unmute first, then slowly restore volume.
     */

    audio.muted = false;

    audio.volume = 0;

    setMuted(false);

    gsap.to(audio, {
      volume: TARGET_VOLUME,
      duration: 1,
      ease: "power2.out",
    });
  };

  /* ========================================================
     COMPONENT
  ======================================================== */

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/romantic-theme.mp3"
        loop
        preload="auto"
      />

      {play && (
        <button
          type="button"
          className="audio-control"
          onClick={toggleMute}
          aria-label={
            muted
              ? "Turn music on"
              : "Mute music"
          }
        >
          <span className="audio-icon">
            {muted ? "♪" : "♫"}
          </span>

          <span className="audio-label">
            {muted ? "Music off" : "Music on"}
          </span>
        </button>
      )}
    </>
  );
}