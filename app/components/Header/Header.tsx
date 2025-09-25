import Link from 'next/link';
import { PlayStoreButton } from '../PlayStoreButton/PlayStoreButton';
import styles from './Header.module.css';

// TODO: Replace with the final Play Store URL once the app is published.
const PLAY_URL = "https://play.google.com/store/apps/details?id=roy.ij.beyondgrades";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <Link href="/about" className={styles.logo}>
          Beyond Grades
        </Link>
        <nav className={styles.nav}>
          <PlayStoreButton
            href={PLAY_URL}
            ariaLabel="Download Beyond Grades from the Google Play Store"
            variant="primary"
          />
        </nav>
      </div>
    </header>
  );
}