"use client";

import Image from "next/image";
import { useState } from "react";

import { personal } from "@/config/personal";

/**
 * Drop a real photo at public/assets/profile.(jpg|jpeg|png|webp) and it's
 * picked up automatically — no code change needed. Extensions are tried in
 * order; if none resolve, this falls back to the initials placeholder.
 *
 * Expects a true alpha-channel cutout (transparent background) — rendered
 * as a freestanding silhouette with just a drop-shadow for depth, no
 * card/frame around it.
 */
const AVATAR_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

export function AvatarPhoto() {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasPhoto, setHasPhoto] = useState(true);

  const src = `/assets/profile.${AVATAR_EXTENSIONS[candidateIndex]}`;

  if (!hasPhoto) {
    return (
      <div className="relative flex h-[18rem] w-[18rem] items-center justify-center sm:h-[22rem] sm:w-[22rem]">
        <div className="absolute inset-8 rounded-full bg-primary/15 blur-3xl" />
        <span className="font-display text-8xl font-bold tracking-tight text-primary/70 sm:text-9xl">
          {personal.initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      key={src}
      src={src}
      alt={personal.name}
      width={408}
      height={612}
      priority
      sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 250px"
      className="h-auto w-[15.5rem] object-contain drop-shadow-[0_30px_45px_-18px_rgba(0,0,0,0.35)] sm:w-[19rem] lg:w-[21rem]"
      onError={() => {
        if (candidateIndex < AVATAR_EXTENSIONS.length - 1) {
          setCandidateIndex((i) => i + 1);
        } else {
          setHasPhoto(false);
        }
      }}
    />
  );
}
