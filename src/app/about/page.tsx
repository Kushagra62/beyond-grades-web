import Image from "next/image";
import { PlayStoreButton } from "@/components/PlayStoreButton/PlayStoreButton";

const PLAY_URL = "https://play.google.com/store/apps/details?id=roy.ij.beyondgrades";

const features = [
  { title: "Peer-Based Feedback", description: "Get authentic insights from teammates who know your work best." },
  { title: "EPA Score", description: "A unique score that reflects your growth beyond academics." },
  { title: "Holistic Portfolio", description: "Build a comprehensive profile that showcases more than just your GPA." },
  { title: "Growth Dashboard", description: "Track progress, achievements, and skill development over time." },
  { title: "Recruiter Visibility", description: "Share a verified life skills report with potential employers." },
  { title: "Gamified Elements", description: "Badges, levels, and leaderboards that make growth fun and engaging." },
];

export default function AboutPage() {
  return (
    <div className="container">
      {/* 1. Hero */}
      <section className="relative left-1/2 right-1/2 mt-[-2rem] mb-16 w-screen -translate-x-1/2 bg-[var(--background-alt)] py-24 text-center">
        <div className="mx-auto max-w-[650px] px-4">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.1] text-[var(--foreground)]">
            Go Beyond Grades.
          </h1>
          <p className="mx-auto mt-4 mb-8 max-w-[550px] text-lg leading-relaxed text-[var(--muted)]">
            Quantify your life skills with peer-based feedback from college events. Build a portfolio that truly represents your capabilities.
          </p>
          <PlayStoreButton href={PLAY_URL} ariaLabel="Download Beyond Grades from the Google Play Store" />
        </div>
      </section>

      {/* 2. Problem → Solution */}
      <section className="py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[var(--border-radius)] border border-[var(--border)] bg-[var(--card)] p-8">
            <h2 className="mb-3 text-2xl font-semibold">The Problem</h2>
            <p className="leading-relaxed text-[var(--muted)]">
              Students often lack structured feedback on their skills beyond academics. While grades measure knowledge, they don’t reflect teamwork, communication, leadership, or other life skills. Without clear feedback, students struggle to identify strengths, improve weaknesses, and become fully prepared for real-world challenges.
            </p>
          </div>

          <div className="rounded-[var(--border-radius)] border border-[var(--border)] bg-[var(--card)] p-8">
            <h2 className="mb-3 text-2xl font-semibold">The Solution</h2>
            <p className="leading-relaxed text-[var(--muted)]">
              Beyond Grades provides a structured platform for peer reviews after every project or event. It transforms subjective feedback into measurable analytics, creating your Extracurricular Performance Analytics (EPA) Score.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">How It Works</h2>

        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {[
            ["1. Join Events", "Participate in college fests, competitions, and activities. Every event becomes a chance to learn and grow."],
            ["2. Give & Get Feedback", "Students and organizers share structured feedback. Skills like teamwork, creativity, and leadership get highlighted."],
            ["3. Build Your EPA Score", "All feedback adds to your EPA Score. It’s a unique measure of your growth beyond academics."],
            ["4. Track Growth", "Your EPA Score feeds into a personal dashboard. See progress, achievements, and areas to improve."],
            ["5. Showcase Portfolio", "Your journey builds a placement-ready portfolio. Show recruiters who you are, beyond grades."],
            ["6. Empower Colleges & Recruiters", "Colleges get insights into student development. Recruiters discover well-rounded, high-potential talent."],
          ].map(([title, desc]) => (
            <div key={title}>
              <h3 className="mb-2 text-xl font-semibold text-[var(--primary)]">{title}</h3>
              <p className="leading-relaxed text-[var(--muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Core Features */}
      <section className="py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Core Features</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[var(--border-radius)] bg-[var(--background-alt)] p-6 text-center"
            >
              <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-[var(--primary)] p-2">
                <Image src="/feature-icon.svg" alt="" width={28} height={28} />
              </div>

              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Trust */}
      <section className="py-16">
        <div className="rounded-[var(--border-radius)] bg-[var(--background-alt)] px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">Trust, Privacy, and Security</h2>
          <p className="mx-auto mt-4 max-w-[700px] leading-relaxed text-[var(--muted)]">
            We believe your data is your own. Feedback can be submitted anonymously to encourage honesty, and all data is encrypted. We are committed to GDPR principles and will never sell your personal information. Your trust is our top priority.
          </p>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-16">
        <div className="rounded-[var(--border-radius)] bg-[var(--primary)] px-6 py-12 text-center text-[var(--primary-foreground)]">
          <h2 className="text-3xl font-bold">Ready to Showcase Your True Potential?</h2>
          <p className="mt-2 opacity-90">
            Download the app and start building a portfolio that reflects your real-world skills.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <PlayStoreButton href={PLAY_URL} ariaLabel="Download Beyond Grades from the Google Play Store" />
            <a
              href="mailto:beyondgrades24@gmail.com"
              className="rounded-[var(--border-radius)] border border-[var(--primary-foreground)] px-6 py-3 font-medium transition hover:bg-[var(--primary-foreground)] hover:text-[var(--primary)]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>

        <div className="mx-auto flex max-w-[750px] flex-col gap-2">
          {[
            ["Is the feedback really anonymous?", "Yes. Your identity is kept anonymous from the recipient to ensure honest feedback. Organizers or mentors may have oversight to ensure fairness."],
            ["Can I use this for my resume?", "Absolutely. You’ll get a shareable verified report you can link on your resume, LinkedIn, or portfolio."],
            ["Who can create events on the platform?", "Initially, verified faculty members, placement cells, and student club heads to maintain event integrity."],
          ].map(([q, a]) => (
            <details
              key={q}
              className="rounded-[var(--border-radius)] border border-[var(--border)] px-6 py-4"
            >
              <summary className="cursor-pointer text-lg font-medium">
                {q}
              </summary>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
