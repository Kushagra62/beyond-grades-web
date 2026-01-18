"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  ariaLabel: string;
  variant?: "primary" | "secondary";
};

export function PlayStoreButton({ href, ariaLabel, variant = "secondary" }: Props) {
  const [hasImageError, setHasImageError] = useState(false);
  const imageUrl = "/playstore-badge.png";

  useEffect(() => {
    if (hasImageError) {
      console.warn(
        `[Beyond Grades] Failed to load image: ${imageUrl}. Ensure 'playstore-badge.png' exists in /public. Displaying text fallback.`
      );
    }
  }, [hasImageError]);

  const baseText =
    "inline-block rounded-[var(--border-radius)] px-6 py-3 text-base font-medium no-underline transition hover:-translate-y-0.5 border";

  const primary =
    "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)] hover:bg-[var(--primary-hover)]";

  const secondary =
    "bg-[var(--card)] text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--background-alt)]";

  const textClass = `${baseText} ${variant === "primary" ? primary : secondary}`;

  if (hasImageError) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        className={textClass}
      >
        Get on Google Play
      </Link>
    );
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition hover:scale-[1.03] hover:shadow-[0_4px_15px_rgba(0,0,0,0.10)]"
    >
      <Image
        src={imageUrl}
        alt="Get it on Google Play"
        width={180}
        height={72}
        priority
        onError={() => setHasImageError(true)}
      />
    </Link>
  );
}
