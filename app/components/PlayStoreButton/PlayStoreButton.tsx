'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PlayStoreButton.module.css';

interface PlayStoreButtonProps {
  href: string;
  ariaLabel: string;
  variant?: 'primary' | 'secondary';
}

export function PlayStoreButton({ href, ariaLabel, variant = 'secondary' }: PlayStoreButtonProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const imageUrl = '/playstore-badge.png';

  useEffect(() => {
    if (hasImageError) {
      console.warn(
        `[Beyond Grades] Failed to load image: ${imageUrl}. ` +
        `Ensure 'playstore-badge.png' exists in the /public directory. ` +
        `Displaying text fallback.`
      );
    }
  }, [hasImageError]);

  const buttonClass = variant === 'primary' ? styles.primaryButton : styles.secondaryButton;

  if (hasImageError) {
    return (
      <Link href={href} className={`${styles.textFallback} ${buttonClass}`} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        Get on Google Play
      </Link>
    );
  }

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={styles.imageLink}>
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