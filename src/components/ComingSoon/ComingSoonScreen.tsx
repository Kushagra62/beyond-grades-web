"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const WAITLIST_FORM_URL = "https://forms.gle/gvCRJEEPqjvkDZFs9";
const WHATSAPP_CHANNEL_URL =
  "https://whatsapp.com/channel/0029Vb7ILKL3bbUzq6U00z1E";
const INSTAGRAM_URL =
  "https://www.instagram.com/beyond._.grades?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const LINKEDIN_URL = "https://www.linkedin.com/company/go-beyond-grades/";
const YOUTUBE_URL =
  "https://youtube.com/@beyond._.grades_yt?si=yXpn4-pfBMulQe7Z";

// Your Google Apps Script endpoint used in Android
const WAITLIST_COUNT_API =
  "https://script.google.com/macros/s/AKfycbyqPPek3rcoxygwDp1XtoAahIIiUD9UgehVlfcLSVRXhYUGeu0AEI6m8ZVmvFI1J_8M/exec";

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 3c2.5 2.46 4 5.64 4 9s-1.5 6.54-4 9c-2.5-2.46-4-5.64-4-9s1.5-6.54 4-9Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M22 20v-1a3 3 0 0 0-2-2.83"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17.5 6.5h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a4 4 0 0 1 2-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M2 9h4v12H2V9Z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 12s0-4-1-6c-1-1-3-1-8-1S5 5 4 6c-1 2-1 6-1 6s0 4 1 6c1 1 3 1 8 1s7 0 8-1c1-2 1-6 1-6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M10 15V9l6 3-6 3Z" fill="currentColor" />
    </svg>
  );
}

async function fetchWaitlistCount(): Promise<number> {
  const res = await fetch(WAITLIST_COUNT_API, { cache: "no-store" });
  if (!res.ok) return 0;
  const data = (await res.json()) as { waitlistCount?: number };
  return Number(data?.waitlistCount ?? 0);
}

export default function ComingSoonScreen() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const fallback = 128;

      let real = 0;
      try {
        real = await fetchWaitlistCount();
      } catch {
        real = 0;
      }

      const target = real > 0 ? real : fallback;

      // ✅ You control this
      const DURATION_MS = 4500; // 3.5 seconds (make 5000 for slower)
      const FPS = 60; // smoothness
      const totalFrames = Math.round((DURATION_MS / 1000) * FPS);

      let frame = 0;
      const start = 0;

      const tick = () => {
        if (!mounted) return;

        frame += 1;
        const progress = Math.min(1, frame / totalFrames);

        // ✅ Easing (like Android "FastOutSlowIn" feel)
        const eased =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const value = Math.round(start + (target - start) * eased);
        setCount(value);

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const bgStyle = useMemo(
    () => ({
      background:
        "linear-gradient(180deg, #041316 0%, #061B24 45%, #040B12 100%)",
    }),
    [],
  );

  return (
    <div style={bgStyle} className="min-h-screen">
      <div className="relative min-h-screen overflow-hidden">
        {/* Radial glows */}
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-[340px] w-[340px] rounded-full opacity-40 blur-0"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,164,0.35) 0%, rgba(14,165,164,0) 60%)",
            animation: "pulseGlow1 2.8s ease-in-out infinite alternate",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-[380px] w-[380px] rounded-full opacity-35 blur-0"
          style={{
            background:
              "radial-gradient(circle, rgba(250,204,21,0.30) 0%, rgba(250,204,21,0) 60%)",
            animation: "pulseGlow2 3.4s ease-in-out infinite alternate",
          }}
        />

        {/* Content */}
        <div className="container flex min-h-screen flex-col px-4">
          {/* Center block */}
          <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
            <div
              className={[
                "transition-all duration-700",
                show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              ].join(" ")}
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Beyond Grades
              </h1>
              <p className="mt-3 text-base font-medium text-white/75 sm:text-lg">
                Tracking Growth Beyond Grades
              </p>
            </div>

            <div
              className={[
                "mt-5 transition-all duration-700 delay-100",
                show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              ].join(" ")}
            >
              <Link
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold text-white"
                style={{
                  borderImage:
                    "linear-gradient(90deg, rgba(14,165,164,0.9), rgba(250,204,21,0.9)) 1",
                  backgroundColor: "rgba(255,255,255,0.07)",
                }}
              >
                Coming Soon
              </Link>
            </div>

            <div
              className={[
                "mt-8 w-full max-w-xl transition-all duration-700 delay-150",
                show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              ].join(" ")}
            >
              <p className="text-base font-semibold text-white/85">
                Join the waitlist
              </p>

              <div className="mt-3 rounded-3xl border border-white/15 bg-white/10 px-6 py-6">
                <div className="text-5xl font-extrabold text-white">
                  {count}+
                </div>
                <div className="mt-2 text-sm text-white/70">Already joined</div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[54px] items-center justify-between rounded-xl bg-[#0EA5A4] px-4 font-bold text-[#061217] transition hover:opacity-95"
                >
                  <span className="flex items-center gap-2">
                    <GlobeIcon className="h-5 w-5" />
                    Waitlist
                  </span>
                  <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href={WHATSAPP_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[54px] items-center justify-between rounded-xl border border-white/25 bg-white/5 px-4 font-semibold text-white transition hover:bg-white/10"
                  style={{
                    borderImage:
                      "linear-gradient(90deg, rgba(250,204,21,0.95), rgba(14,165,164,0.95)) 1",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <UsersIcon className="h-5 w-5" />
                    WhatsApp
                  </span>
                  <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom social */}
          <div
            className={[
              "pb-10 transition-all duration-700 delay-200",
              show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            ].join(" ")}
          >
            <p className="text-center text-base font-bold text-white">
              Our Social Media Handles
            </p>

            <div className="mt-4 flex items-center justify-center gap-4">
              <SocialIconButton href={INSTAGRAM_URL} label="Instagram">
                <InstagramIcon className="h-6 w-6" />
              </SocialIconButton>

              <SocialIconButton href={LINKEDIN_URL} label="LinkedIn">
                <LinkedInIcon className="h-6 w-6" />
              </SocialIconButton>

              <SocialIconButton href={YOUTUBE_URL} label="YouTube">
                <YouTubeIcon className="h-6 w-6" />
              </SocialIconButton>
            </div>

            <p className="mt-4 text-center text-sm text-white/65">
              We’ll email you when we will launch the MVP🚀
            </p>
          </div>
        </div>

        {/* keyframes without a CSS file */}
        <style jsx global>{`
          @keyframes pulseGlow1 {
            from {
              transform: scale(0.85);
            }
            to {
              transform: scale(1.12);
            }
          }
          @keyframes pulseGlow2 {
            from {
              transform: scale(1.05);
            }
            to {
              transform: scale(0.9);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

function SocialIconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-[62px] w-[62px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:scale-[1.05] hover:bg-white/15"
    >
      {children}
    </Link>
  );
}
