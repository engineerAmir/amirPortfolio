"use client";

import Image from "next/image";
import { useState } from "react";

import { personal } from "@/config/personal";

/**
 * Drop a real photo at public/assets/profile.(jpg|jpeg|png|webp) and it's
 * picked up automatically — no code change needed. Extensions are tried in
 * order; if none resolve, this falls back to the initials placeholder.
 */
const AVATAR_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

export function AvatarPhoto() {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasPhoto, setHasPhoto] = useState(true);

  const src = `/assets/profile.${AVATAR_EXTENSIONS[candidateIndex]}`;

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-accent-blue/15 via-transparent to-accent-purple/15">
      {hasPhoto ? (
        <Image
          key={src}
          src={src}
          alt={personal.name}
          fill
          priority
          sizes="(min-width: 640px) 20rem, 17rem"
          className="object-cover"
          onError={() => {
            if (candidateIndex < AVATAR_EXTENSIONS.length - 1) {
              setCandidateIndex((i) => i + 1);
            } else {
              setHasPhoto(false);
            }
          }}
        />
      ) : (
        <span className="font-display text-7xl font-bold tracking-tight text-foreground/90 sm:text-8xl">
          {personal.initials}
        </span>
      )}
    </div>
  );
}
