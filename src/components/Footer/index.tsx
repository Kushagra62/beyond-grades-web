export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Beyond Grades. All rights reserved.</p>
      </div>
    </footer>
  );
}
