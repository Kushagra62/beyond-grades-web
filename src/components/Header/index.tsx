import Link from "next/link";
import { PlayStoreButton } from "../PlayStoreButton/PlayStoreButton";

const PLAY_URL = "https://play.google.com/store/apps/details?id=roy.ij.beyondgrades";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link
          href="/about"
          className="text-xl font-semibold text-[var(--foreground)] hover:text-[var(--primary)]"
        >
          Beyond Grades
        </Link>

        <nav className="flex items-center gap-4">
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
