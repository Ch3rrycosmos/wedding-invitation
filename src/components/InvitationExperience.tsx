"use client";

import { useState } from "react";
import { Envelope } from "@/components/envelope/Envelope";
import { MusicToggle } from "@/components/MusicToggle";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Welcome } from "@/components/sections/Welcome";
import { CoupleNames } from "@/components/sections/CoupleNames";
import { StoryTimeline } from "@/components/sections/StoryTimeline";
import { WeddingDetails } from "@/components/sections/WeddingDetails";
import { Countdown } from "@/components/sections/Countdown";
import { Gallery } from "@/components/sections/Gallery";
import { Venue } from "@/components/sections/Venue";
import { Blessings } from "@/components/sections/Blessings";

export function InvitationExperience() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <MusicToggle />
      <Envelope onEntered={() => setEntered(true)} />
      <SmoothScrollProvider>
        <main
          className={entered ? "opacity-100" : "pointer-events-none opacity-0"}
          style={{ transition: "opacity 0.8s ease" }}
          aria-hidden={!entered}
        >
          <Welcome />
          <CoupleNames />
          <StoryTimeline />
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
