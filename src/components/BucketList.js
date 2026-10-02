import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './Homepage.css';
import './BucketList.css';

/** Places grouped by continent (plus themed lists). Each place links to its Google Maps folder. */
const BUCKET_GROUPS = [
  {
    label: '🌏 asia',
    places: [
      { label: 'cambodia', href: 'https://maps.app.goo.gl/ghnhkAio1jgGXeov6' },
      { label: 'china', href: 'https://maps.app.goo.gl/E1tyUqERnk4G8Map8' },
      { label: 'dubai', href: 'https://maps.app.goo.gl/BDfwMVUjdq3uHpw3A' },
      { label: 'hong kong', href: 'https://maps.app.goo.gl/2Nq6WYx7cZdQZSJZ7' },
      { label: 'india', href: 'https://maps.app.goo.gl/hbk41dBrUzK16dMF7' },
      { label: 'indonesia', href: 'https://maps.app.goo.gl/KzY76vu8MYy9NMTM7' },
      { label: 'japan', href: 'https://maps.app.goo.gl/X5XU17tvBne2CrUH6' },
      { label: 'korea', href: 'https://maps.app.goo.gl/ooVfrtue5sZhwhqW8' },
      { label: 'malaysia', href: 'https://maps.app.goo.gl/MDT3BpchCxR45VJMA' },
      { label: 'philippines', href: 'https://maps.app.goo.gl/BhS9qx33R8RhAizy6' },
      { label: 'singapore', href: 'https://maps.app.goo.gl/rYcgGpqE4ujFqxyh6' },
      { label: 'taiwan', href: 'https://maps.app.goo.gl/2irExE7EwmZ3JYwF6' },
      { label: 'thailand', href: 'https://maps.app.goo.gl/yt1F83igK7yeiKhM6' },
      { label: 'vietnam', href: 'https://maps.app.goo.gl/uFPtXg3dZLniTuSP8' },
    ],
  },
  {
    label: '🌍 europe',
    places: [
      { label: 'amsterdam', href: 'https://maps.app.goo.gl/nyQw6ZPziw4fbFkk8' },
      { label: 'austria', href: 'https://maps.app.goo.gl/XepKp88g3aNzzGMt6' },
      { label: 'denmark', href: 'https://maps.app.goo.gl/i82fBw4pfSH9yULT9' },
      { label: 'dublin', href: 'https://maps.app.goo.gl/fxJGpAooTBeJbNCJ7' },
      { label: 'iceland', href: 'https://maps.app.goo.gl/CGFkc1KFhcDKwgpV9' },
      { label: 'italy', href: 'https://maps.app.goo.gl/MtonyvpQXcw7VGjz5' },
      { label: 'norway', href: 'https://maps.app.goo.gl/eqV4mtF1bhkXHFpQ9' },
      { label: 'paris', href: 'https://maps.app.goo.gl/SAi65bjZL6Cyish88' },
      { label: 'romania', href: 'https://maps.app.goo.gl/acsJZS8wC3hqTDKJ9' },
      { label: 'spain', href: 'https://maps.app.goo.gl/8FjxARfUieoBwLLE8' },
      { label: 'switzerland', href: 'https://maps.app.goo.gl/ypKzsT8xrT5xbiH38' },
      { label: 'united kingdom', href: 'https://maps.app.goo.gl/ZubpGZbKXgFPcEVU8' },
    ],
  },
  {
    label: '🌎 north america',
    places: [
      { label: 'alabama', href: 'https://maps.app.goo.gl/gmDe2irJSti2neE89' },
      { label: 'alaska', href: 'https://maps.app.goo.gl/58PBvcy19mURaMUp8' },
      { label: 'arizona', href: 'https://maps.app.goo.gl/NQXCvXAVALbAy59K8' },
      { label: 'bay area, ca', href: 'https://maps.app.goo.gl/Gw6hM1E8FzAjPax9A' },
      { label: 'boston', href: 'https://maps.app.goo.gl/WUWX4uDPZKe6PcxT6' },
      { label: 'chicago', href: 'https://maps.app.goo.gl/Y8vaR8JqEN3vsmY89' },
      { label: 'colorado', href: 'https://maps.app.goo.gl/5TMgbzSZWjtiRoUn9' },
      { label: 'connecticut', href: 'https://maps.app.goo.gl/fPFTkpQQ38jy9kwn6' },
      { label: 'florida', href: 'https://maps.app.goo.gl/KZ5uuyLcEhMPzLBd9' },
      { label: 'georgia', href: 'https://maps.app.goo.gl/EnTaXcshad3aAUgQ6' },
      { label: 'hawaii', href: 'https://maps.app.goo.gl/zMCrLSRew7642TK79' },
      { label: 'idaho', href: 'https://maps.app.goo.gl/bdLCitn4qnCV4ZUw9' },
      { label: 'indiana', href: 'https://maps.app.goo.gl/gJ4ULmx8cJ467GLn6' },
      { label: 'las vegas', href: 'https://maps.app.goo.gl/iupG9WQJBfDcR2TU6' },
      { label: 'los angeles', href: 'https://maps.app.goo.gl/qC6euZb2MN6GZngj7' },
      { label: 'maine', href: 'https://maps.app.goo.gl/rAtKCD2S4fi6FPdA8' },
      { label: 'maryland', href: 'https://maps.app.goo.gl/Javrz9pNJUxK6Dy47' },
      { label: 'mexico', href: 'https://maps.app.goo.gl/drWJdSjQuvSUCEp47' },
      { label: 'minnesota', href: 'https://maps.app.goo.gl/hsL9bFzGKfbJfMTWA' },
      { label: 'montana', href: 'https://maps.app.goo.gl/RHreegexmktwEoPK6' },
      { label: 'montreal', href: 'https://maps.app.goo.gl/JPbHJk1J21CwWYPa6' },
      { label: 'nebraska', href: 'https://maps.app.goo.gl/fdQ2ktdBH4vZ5Ut98' },
      { label: 'new jersey', href: 'https://maps.app.goo.gl/rbJFv3pF7uowB4N38' },
      { label: 'new york city', href: 'https://maps.app.goo.gl/zmjYHAEQcjFQCexYA' },
      { label: 'north carolina', href: 'https://maps.app.goo.gl/rQBVpSLQvBxwY5gEA' },
      { label: 'ohio', href: 'https://maps.app.goo.gl/7J5xS7y9BTVyRarq8' },
      { label: 'oregon', href: 'https://maps.app.goo.gl/D5V65EVx7F1QP1pF9' },
      { label: 'philly', href: 'https://maps.app.goo.gl/PkWhzBP3dYUGbnTc9' },
      { label: 'pittsburgh', href: 'https://maps.app.goo.gl/MMXqBivZ3NtjEKi56' },
      { label: 'quebec', href: 'https://maps.app.goo.gl/4uRNUx8CuANjan4z8' },
      { label: 'rhode island', href: 'https://maps.app.goo.gl/c5rSqGMRmTegyYmD9' },
      { label: 'seattle', href: 'https://maps.app.goo.gl/esgRE17Ty53PXevK9' },
      { label: 'texas', href: 'https://maps.app.goo.gl/QcWCghZAgdSRmtyd8' },
      { label: 'toronto', href: 'https://maps.app.goo.gl/NcnZW6J8ChjqdeQQ8' },
      { label: 'utah', href: 'https://maps.app.goo.gl/aDpBhXvqSCY2fFJZ6' },
      { label: 'vancouver + richmond', href: 'https://maps.app.goo.gl/rvd9VHMr8wp9j8daA' },
      { label: 'vermont', href: 'https://maps.app.goo.gl/VN8uzy7iZHgc6dhZ6' },
      { label: 'virginia', href: 'https://maps.app.goo.gl/9AyRvZwcuCQAkcb58' },
      { label: 'washington dc', href: 'https://maps.app.goo.gl/isw3KL2gwhMdHYqG7' },
      { label: 'wisconsin', href: 'https://maps.app.goo.gl/NRVLwuw3TSW2x3px9' },
    ],
  },
  {
    label: '🌎 central america',
    places: [
      { label: 'costa rica', href: 'https://maps.app.goo.gl/qRyZt5AdYoWGpGmj7' },
    ],
  },
  {
    label: '🌎 south america',
    places: [
      { label: 'bolivia', href: 'https://maps.app.goo.gl/uaSKNdopcmRB16ME9' },
    ],
  },
  {
    label: '🌏 oceania',
    places: [
      { label: 'australia', href: 'https://maps.app.goo.gl/Ak5pMzKhpcLB4Bx66' },
      { label: 'new zealand', href: 'https://maps.app.goo.gl/BgX3mUyXbmfLeL9L8' },
    ],
  },
  {
    label: '✨ themes',
    places: [
      { label: 'places I want to take my parents', href: 'https://maps.app.goo.gl/F81DMfXun6KacRtK8' },
      { label: '⛰️ outdoors', href: 'https://maps.app.goo.gl/3BcdUAAzc34X6nxy7' },
      { label: '🎂 birthday freebies', href: 'https://maps.app.goo.gl/hoAe8kd1nYMmRCJH9' },
      { label: '👚 thrifting', href: 'https://maps.app.goo.gl/ELxtkHTD4UQe23V48' },
    ],
  },
];

/** Max stagger (ms) for the ripple-in animation, plus random jitter so it feels organic. */
const RIPPLE_SPREAD = 480;
const RIPPLE_JITTER = 80;

/** Staggers each pill's entrance by its distance from `origin`, so pills ripple outward. */
function ripple(pills, origin) {
  const dists = pills.map((el) => {
    const r = el.getBoundingClientRect();
    return Math.hypot(r.left + r.width / 2 - origin.x, (r.top + r.height / 2 - origin.y) * 2.2);
  });
  const max = Math.max(1, ...dists);
  pills.forEach((el, i) => {
    el.style.setProperty('--d', `${Math.round((dists[i] / max) * RIPPLE_SPREAD + Math.random() * RIPPLE_JITTER)}ms`);
    el.style.setProperty('--dy', `${(6 + Math.random() * 10).toFixed(1)}px`);
  });
}

function PlacePill({ place }) {
  return (
    <a className="bucket-pill bucket-pill--place" href={place.href} target="_blank" rel="noopener noreferrer">
      {place.label}
    </a>
  );
}

export default function BucketList() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  // Bumped on every open so the pills remount and replay their entrance animation.
  const [openCount, setOpenCount] = useState(0);
  const [activeGroup, setActiveGroup] = useState(null);
  // Index of the last group pill on the active group's row; its places render right after it.
  const [insertAfter, setInsertAfter] = useState(-1);

  const comboRef = useRef(null);
  const pillsRef = useRef(null);
  const groupRefs = useRef([]);
  const subRef = useRef(null);

  const trimmed = query.trim().toLowerCase();
  const hits = useMemo(() => {
    if (!trimmed) return [];
    return BUCKET_GROUPS.flatMap((g) => g.places)
      .filter((p) => p.label.toLowerCase().includes(trimmed))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [trimmed]);

  function openPills() {
    if (open) return;
    setOpen(true);
    setOpenCount((n) => n + 1);
  }

  function closePills() {
    setOpen(false);
    setActiveGroup(null);
  }

  function lastIndexOnRow(index) {
    const top = groupRefs.current[index]?.offsetTop;
    let last = index;
    groupRefs.current.forEach((el, i) => {
      if (el && el.offsetTop === top) last = Math.max(last, i);
    });
    return last;
  }

  function toggleGroup(index) {
    if (activeGroup === index) {
      setActiveGroup(null);
      return;
    }
    setInsertAfter(lastIndexOnRow(index));
    setActiveGroup(index);
  }

  // Ripple the group pills in from the top-center each time the pills open.
  useLayoutEffect(() => {
    if (!open || trimmed || !pillsRef.current) return;
    const r = pillsRef.current.getBoundingClientRect();
    ripple(groupRefs.current.filter(Boolean), { x: r.left + r.width / 2, y: r.top });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openCount, trimmed === '']);

  // Ripple a group's places outward from the group pill that was clicked.
  useLayoutEffect(() => {
    if (activeGroup === null || !subRef.current) return;
    const r = groupRefs.current[activeGroup].getBoundingClientRect();
    ripple([...subRef.current.querySelectorAll('.bucket-pill')], {
      x: r.left + r.width / 2,
      y: r.top + r.height / 2,
    });
  }, [activeGroup]);

  // Keep the open group's places under the right row if the layout reflows.
  useEffect(() => {
    if (activeGroup === null) return undefined;
    function onResize() {
      setInsertAfter(lastIndexOnRow(activeGroup));
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeGroup]);

  useEffect(() => {
    if (!open) return undefined;

    function closeIfOutside(event) {
      if (comboRef.current && !comboRef.current.contains(event.target)) closePills();
    }

    function onEscape(event) {
      if (event.key === 'Escape') closePills();
    }

    document.addEventListener('mousedown', closeIfOutside);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', closeIfOutside);
      document.removeEventListener('keydown', onEscape);
    };
  }, [open]);

  function renderGroups() {
    const out = [];
    BUCKET_GROUPS.forEach((group, i) => {
      const expanded = activeGroup === i;
      out.push(
        <button
          key={group.label}
          ref={(el) => { groupRefs.current[i] = el; }}
          type="button"
          className="bucket-pill bucket-pill--group"
          aria-expanded={expanded}
          onClick={() => toggleGroup(i)}
        >
          <span>{group.label}</span>
          <span className="bucket-pill__count">{group.places.length}</span>
        </button>
      );
      if (activeGroup !== null && i === insertAfter) {
        out.push(
          <div key={`places-${BUCKET_GROUPS[activeGroup].label}`} ref={subRef} className="bucket-sub">
            {BUCKET_GROUPS[activeGroup].places.map((place) => (
              <PlacePill key={place.label} place={place} />
            ))}
          </div>
        );
      }
    });
    return out;
  }

  const topRef = useRef(null);

  return (
    <div ref={topRef} className="flex flex-col items-center min-h-screen inter-medium py-16 px-12">
      <main className="flex flex-col gap-8 max-w-2xl w-full mx-auto items-center">
        <h1 className="text-2xl text-center motion-safe:animate-fade-up">Cindy&apos;s 🪣 List</h1>

        <div
          ref={comboRef}
          className="relative z-20 w-full max-w-md mx-auto flex flex-col items-stretch gap-0 motion-safe:animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          <label htmlFor="bucket-search" className="sr-only">
            Search bucket list places
          </label>
          <input
            id="bucket-search"
            type="search"
            placeholder="where are you going?"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              openPills();
            }}
            onFocus={openPills}
            onClick={openPills}
            autoComplete="off"
            className="w-full px-4 py-2.5 text-sm text-left border border-transparent rounded-full bg-gray-50 transition-[border-color] duration-200 ease-out focus:outline-none focus:border-gray-200 placeholder:text-gray-400"
          />

          <div className={`bucket-pills-wrap ${open ? 'is-open' : ''}`} aria-hidden={!open}>
            <div id="bucket-pills" ref={pillsRef} className="bucket-pills" key={openCount}>
              {trimmed ? (
                hits.length === 0 ? (
                  <div className="bucket-empty">No matches — try another search.</div>
                ) : (
                  hits.map((place) => <PlacePill key={place.label} place={place} />)
                )
              ) : (
                renderGroups()
              )}
            </div>
          </div>
        </div>

        <p
          className="text-sm text-gray-600 text-justify max-w-md motion-safe:animate-fade-up"
          style={{ animationDelay: '160ms' }}
        >
          compiling all my bucket list spots in google maps folders with the exact recommendations of what to do or get there! I haven&apos;t visited 99% of these places yet, but if I do visit and it&apos;s good, I note it down and if it&apos;s bad...I&apos;ll end up removing it...
        </p>

        <div
          className="table-cell px-10 motion-safe:animate-fade-up"
          style={{ animationDelay: '240ms' }}
          id="instagram"
        >
            <a href="https://www.instagram.com/cindyqiann/" target="_blank">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <defs>
                    <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="50%" stopColor="#e1306c" />
                      <stop offset="100%" stopColor="#833ab4" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#instaGradient)"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>
          </div>
      </main>
    </div>
  );
}
