"use client";

import { useRef, useState } from "react";
import { Envelope } from "@/components/envelope/Envelope";
import { MusicToggle } from "@/components/MusicToggle";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Welcome } from "@/components/sections/Welcome";
import { CoupleNames } from "@/components/sections/CoupleNames";
import { WeddingDetails } from "@/components/sections/WeddingDetails";
import { Countdown } from "@/components/sections/Countdown";
import { Gallery } from "@/components/sections/Gallery";
import { Venue } from "@/components/sections/Venue";
import { Blessings } from "@/components/sections/Blessings";
import { weddingConfig } from "@/lib/weddingConfig";

export function InvitationExperience() {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function startMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = weddingConfig.musicVolume;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch((err) => {
        // Some browsers reject the very first play() call even from a
        // click handler (stricter autoplay heuristics, per-site sound
        // settings, etc.). Retry on the next interaction anywhere on the
        // page instead of requiring the user to find the toggle button.
        console.warn("Autoplay blocked, will retry on next interaction:", err);
        const retry = () => {
          audio
            .play()
            .then(() => setPlaying(true))
            .catch(() => {});
        };
        document.addEventListener("pointerdown", retry, { once: true });
        document.addEventListener("keydown", retry, { once: true });
      });
  }

  return (
    <>
      <audio ref={audioRef} src={weddingConfig.musicFile} loop preload="none" />
      <MusicToggle audioRef={audioRef} playing={playing} setPlaying={setPlaying} />
      <Envelope onEntered={() => setEntered(true)} onOpen={startMusic} />
      <SmoothScrollProvider>
        <main
          className={entered ? "opacity-100" : "pointer-events-none opacity-0 invisible"}
          style={{ transition: "opacity 0.8s ease" }}
          aria-hidden={!entered}
        >
          <Welcome />
          <CoupleNames />
          <WeddingDetails />
          <Countdown />
          <Gallery />
          <Venue />
          <Blessings />
        </main>
      </SmoothScrollProvider>
    </>
  );
}
