import Image from 'next/image';
import { PlayStoreButton } from '../components/PlayStoreButton/PlayStoreButton';
import styles from './About.module.css';

// TODO: Replace with the final Play Store URL once the app is published.
const PLAY_URL = "https://play.google.com/store/apps/details?id=roy.ij.beyondgrades";

const features = [
  { title: "Peer-Based Feedback", description: "Get authentic insights from teammates who know your work best." },
  { title: "Skill Analytics", description: "Track your growth in key areas like Leadership and Communication over time." },
  { title: "Holistic Portfolio", description: "Build a comprehensive profile that showcases more than just your GPA." },
  { title: "Structured Evaluation", description: "Organizers can use predefined rubrics for fair and consistent feedback." },
  { title: "Recruiter Visibility", description: "Share a verified soft skills report with potential employers." },
  { title: "Privacy Focused", description: "Your data is yours. We are committed to transparency and security." },
];

export default function AboutPage() {
  return (
    <div className="container">
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.headline}>Go Beyond Grades.</h1>
          <p className={styles.subtext}>
            Quantify your soft skills with peer-based feedback from college events. Build a portfolio that truly represents your capabilities.
          </p>
          <PlayStoreButton 
            href={PLAY_URL} 
            ariaLabel="Download Beyond Grades from the Google Play Store" 
          />
        </div>
      </section>

      {/* 2. Problem → Solution */}
      <section className={styles.section}>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>The Problem</h2>
            <p>Students often lack structured feedback on their skills beyond academics. While grades measure knowledge, they don’t reflect teamwork, communication, leadership, or other life skills. Without clear feedback, students struggle to identify strengths, improve weaknesses, and become fully prepared for real-world challenges.</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>The Solution</h2>
            <p>Beyond Grades provides a structured platform for peer reviews after every project or event. It transforms subjective feedback into measurable analytics, creating your Extracurricular Performance Analytics (EPA) Score.</p>
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.step}>
            <h3>1. Participate</h3>
            <p>Engage in college fests, projects, or workshops as you normally would.</p>
          </div>
          <div className={styles.step}>
            <h3>2. Give & Get Feedback</h3>
            <p>After the event, use the app to give and receive anonymous, structured feedback from your peers on key soft skills.</p>
          </div>
          <div className={styles.step}>
            <h3>3. Track & Share</h3>
            <p>See your skills grow over time. Share your verified EPA profile with recruiters to stand out.</p>
          </div>
        </div>
      </section>

      {/* 4. Features Grid */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Core Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <Image src="/feature-icon.svg" alt="" width={40} height={40} className={styles.featureIcon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* 5. Trust & Privacy */}
      <section className={`${styles.section} ${styles.trustSection}`}>
        <h2 className={styles.sectionTitle}>Trust, Privacy, and Security</h2>
        <p className={styles.trustText}>
          We believe your data is your own. Feedback can be submitted anonymously to encourage honesty, and all data is encrypted. We are committed to GDPR principles and will never sell your personal information. Your trust is our top priority.
        </p>
      </section>
      
      {/* 6. CTA Banner */}
      <section className={`${styles.section} ${styles.ctaBanner}`}>
        <h2>Ready to Showcase Your True Potential?</h2>
        <p>Download the app and start building a portfolio that reflects your real-world skills.</p>
        <div className={styles.ctaActions}>
          <PlayStoreButton 
            href={PLAY_URL} 
            ariaLabel="Download Beyond Grades from the Google Play Store" 
          />
          <a href="mailto:beyondgrades24@gmail.com" className={styles.contactLink}>Contact Us</a>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          <details className={styles.faqItem}>
            <summary>Is the feedback really anonymous?</summary>
            <p>Yes. When giving feedback, your identity is kept anonymous from the recipient to ensure honest and constructive criticism. However, event organizers or mentors may have oversight capabilities to ensure fairness.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Can I use this for my resume?</summary>
            <p>Absolutely! The goal is to generate a shareable, verified report of your soft skills that you can link to on your resume, LinkedIn profile, or portfolio, giving you a competitive edge.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Who can create events on the platform?</summary>
            <p>Initially, event creation will be managed by verified faculty members, placement cells, and student club heads to maintain the integrity of the events and feedback process.</p>
          </details>
        </div>
      </section>
    </div>
  );
}