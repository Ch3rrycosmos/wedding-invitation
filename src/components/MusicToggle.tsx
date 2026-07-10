"use client";

import type { RefObject } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { weddingConfig } from "@/lib/weddingConfig";

export function MusicToggle({
  audioRef,
  playing,
  setPlaying,
}: {
  audioRef: RefObject<HTMLAudioElement | null>;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
}) {
  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = weddingConfig.musicVolume;
      audio.play().catch(() => {});
      setPlaying(true);
    }
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 top-4 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-ivory/80 text-emerald shadow-lg backdrop-blur-sm transition-colors hover:bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:right-6 sm:top-6"
      aria-label={playing ? "Mute background music" : "Play background music"}
      aria-pressed={playing}
    >
      {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </motion.button>
  );
}
