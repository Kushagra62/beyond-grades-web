import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Beyond Grades. All rights reserved.</p>
      </div>
    </footer>
  );
}