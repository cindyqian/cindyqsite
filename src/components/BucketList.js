import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Homepage.css';
import BucketMap from './BucketMap';
/** Each bucket entry has a display label, optional URL (`href`; `null` until the destination exists), and optional
 *  map pin `coords` as [lat, lng]. Themed lists that aren't a single place have no coords. */
const BUCKET_OPTIONS_RAW = [
  { label: 'vietnam', href: 'https://maps.app.goo.gl/uFPtXg3dZLniTuSP8', coords: [16.0, 107.8] },
  { label: 'bay area, ca', href: 'https://maps.app.goo.gl/Gw6hM1E8FzAjPax9A', coords: [37.7749, -122.4194] },
  { label: 'new york city', href: 'https://maps.app.goo.gl/zmjYHAEQcjFQCexYA', coords: [40.7128, -74.006] },
  { label: 'los angeles', href: 'https://maps.app.goo.gl/qC6euZb2MN6GZngj7', coords: [34.0522, -118.2437] },
  { label: 'seattle', href: 'https://maps.app.goo.gl/esgRE17Ty53PXevK9', coords: [47.6062, -122.3321] },
  { label: 'places I want to take my parents', href: 'https://maps.app.goo.gl/F81DMfXun6KacRtK8' },
  { label: '⛰️ outdoors', href: 'https://maps.app.goo.gl/3BcdUAAzc34X6nxy7' },
  { label: 'vancouver + richmond', href: 'https://maps.app.goo.gl/rvd9VHMr8wp9j8daA', coords: [49.2, -123.12] },
  { label: 'hong kong', href: 'https://maps.app.goo.gl/2Nq6WYx7cZdQZSJZ7', coords: [22.3193, 114.1694] },
  { label: 'texas', href: 'https://maps.app.goo.gl/QcWCghZAgdSRmtyd8', coords: [31.0, -99.0] },
  { label: 'korea', href: 'https://maps.app.goo.gl/ooVfrtue5sZhwhqW8', coords: [37.5665, 126.978] },
  { label: 'toronto', href: 'https://maps.app.goo.gl/NcnZW6J8ChjqdeQQ8', coords: [43.6532, -79.3832] },
  { label: 'florida', href: 'https://maps.app.goo.gl/KZ5uuyLcEhMPzLBd9', coords: [28.0, -81.7] },
  { label: 'rhode island', href: 'https://maps.app.goo.gl/c5rSqGMRmTegyYmD9', coords: [41.58, -71.48] },
  { label: 'boston', href: 'https://maps.app.goo.gl/WUWX4uDPZKe6PcxT6', coords: [42.3601, -71.0589] },
  { label: 'vermont', href: 'https://maps.app.goo.gl/VN8uzy7iZHgc6dhZ6', coords: [44.0, -72.7] },
  { label: 'malaysia', href: 'https://maps.app.goo.gl/MDT3BpchCxR45VJMA', coords: [3.139, 101.6869] },
  { label: 'singapore', href: 'https://maps.app.goo.gl/rYcgGpqE4ujFqxyh6', coords: [1.3521, 103.8198] },
  { label: 'united kingdom', href: 'https://maps.app.goo.gl/ZubpGZbKXgFPcEVU8', coords: [51.5074, -0.1278] },
  { label: 'thailand', href: 'https://maps.app.goo.gl/yt1F83igK7yeiKhM6', coords: [13.7563, 100.5018] },
  { label: 'alabama', href: 'https://maps.app.goo.gl/gmDe2irJSti2neE89', coords: [32.8, -86.8] },
  { label: 'hawaii', href: 'https://maps.app.goo.gl/zMCrLSRew7642TK79', coords: [20.8, -156.3] },
  { label: 'australia', href: 'https://maps.app.goo.gl/Ak5pMzKhpcLB4Bx66', coords: [-25.3, 133.8] },
  { label: 'japan', href: 'https://maps.app.goo.gl/X5XU17tvBne2CrUH6', coords: [35.6762, 139.6503] },
  { label: 'paris', href: 'https://maps.app.goo.gl/SAi65bjZL6Cyish88', coords: [48.8566, 2.3522] },
  { label: 'taiwan', href: 'https://maps.app.goo.gl/xtmqnTS7uhBEyz2P7', coords: [25.033, 121.5654] },
  { label: 'chicago', href: 'https://maps.app.goo.gl/Y8vaR8JqEN3vsmY89', coords: [41.8781, -87.6298] },
  { label: '🎂 birthday freebies', href: 'https://maps.app.goo.gl/hoAe8kd1nYMmRCJH9' },
  { label: 'ohio', href: 'https://maps.app.goo.gl/7J5xS7y9BTVyRarq8', coords: [40.4, -82.8] },
  { label: 'new jersey', href: 'https://maps.app.goo.gl/rbJFv3pF7uowB4N38', coords: [40.1, -74.5] },
  { label: '👚 thrifting', href: 'https://maps.app.goo.gl/ELxtkHTD4UQe23V48' },
  { label: 'las vegas', href: 'https://maps.app.goo.gl/iupG9WQJBfDcR2TU6', coords: [36.1699, -115.1398] },
  { label: 'mexico', href: 'https://maps.app.goo.gl/drWJdSjQuvSUCEp47', coords: [23.6, -102.5] },
  { label: 'china', href: 'https://maps.app.goo.gl/E1tyUqERnk4G8Map8', coords: [35.0, 104.0] },
  { label: 'denmark', href: 'https://maps.app.goo.gl/i82fBw4pfSH9yULT9', coords: [55.6761, 12.5683] },
  { label: 'connecticut', href: 'https://maps.app.goo.gl/fPFTkpQQ38jy9kwn6', coords: [41.6, -72.7] },
  { label: 'italy', href: 'https://maps.app.goo.gl/MtonyvpQXcw7VGjz5', coords: [41.9028, 12.4964] },
  { label: 'iceland', href: 'https://maps.app.goo.gl/CGFkc1KFhcDKwgpV9', coords: [64.9631, -19.0208] },
  { label: 'new zealand', href: 'https://maps.app.goo.gl/BgX3mUyXbmfLeL9L8', coords: [-41.0, 174.0] },
  { label: 'india', href: 'https://maps.app.goo.gl/hbk41dBrUzK16dMF7', coords: [22.0, 79.0] },
  { label: 'taiwan', href: 'https://maps.app.goo.gl/DHZTGR7jD4w3nR2JA', coords: [25.033, 121.5654] },
  { label: 'quebec', href: 'https://maps.app.goo.gl/4uRNUx8CuANjan4z8', coords: [46.8139, -71.208] },
  { label: 'utah', href: 'https://maps.app.goo.gl/aDpBhXvqSCY2fFJZ6', coords: [39.3, -111.7] },
  { label: 'costa rica', href: 'https://maps.app.goo.gl/qRyZt5AdYoWGpGmj7', coords: [9.75, -83.75] },
  { label: 'philippines', href: 'https://maps.app.goo.gl/BhS9qx33R8RhAizy6', coords: [12.88, 121.77] },
  { label: 'philly', href: 'https://maps.app.goo.gl/PkWhzBP3dYUGbnTc9', coords: [39.9526, -75.1652] },
  { label: 'spain', href: 'https://maps.app.goo.gl/8FjxARfUieoBwLLE8', coords: [40.4168, -3.7038] },
  { label: 'georgia', href: 'https://maps.app.goo.gl/EnTaXcshad3aAUgQ6', coords: [32.7, -83.4] },
  { label: 'norway', href: 'https://maps.app.goo.gl/eqV4mtF1bhkXHFpQ9', coords: [59.9139, 10.7522] },
  { label: 'cambodia', href: 'https://maps.app.goo.gl/ghnhkAio1jgGXeov6', coords: [12.57, 104.99] },
  { label: 'montreal', href: 'https://maps.app.goo.gl/JPbHJk1J21CwWYPa6', coords: [45.5017, -73.5673] },
  { label: 'pittsburgh', href: 'https://maps.app.goo.gl/MMXqBivZ3NtjEKi56', coords: [40.4406, -79.9959] },
  { label: 'dubai', href: 'https://maps.app.goo.gl/BDfwMVUjdq3uHpw3A', coords: [25.2048, 55.2708] },
  { label: 'north carolina', href: 'https://maps.app.goo.gl/rQBVpSLQvBxwY5gEA', coords: [35.6, -79.4] },
  { label: 'maryland', href: 'https://maps.app.goo.gl/Javrz9pNJUxK6Dy47', coords: [39.05, -76.8] },
  { label: 'switzerland', href: 'https://maps.app.goo.gl/ypKzsT8xrT5xbiH38', coords: [46.8, 8.2] },
  { label: 'dublin', href: 'https://maps.app.goo.gl/fxJGpAooTBeJbNCJ7', coords: [53.3498, -6.2603] },
  { label: 'amsterdam', href: 'https://maps.app.goo.gl/nyQw6ZPziw4fbFkk8', coords: [52.3676, 4.9041] },
  { label: 'arizona', href: 'https://maps.app.goo.gl/NQXCvXAVALbAy59K8', coords: [34.2, -111.7] },
  { label: 'oregon', href: 'https://maps.app.goo.gl/D5V65EVx7F1QP1pF9', coords: [44.0, -120.5] },
  { label: 'alaska', href: 'https://maps.app.goo.gl/58PBvcy19mURaMUp8', coords: [63.6, -152.5] },
  { label: 'colorado', href: 'https://maps.app.goo.gl/5TMgbzSZWjtiRoUn9', coords: [39.0, -105.5] },
  { label: 'montana', href: 'https://maps.app.goo.gl/RHreegexmktwEoPK6', coords: [47.0, -109.6] },
  { label: 'maine', href: 'https://maps.app.goo.gl/rAtKCD2S4fi6FPdA8', coords: [45.3, -69.2] },
  { label: 'idaho', href: 'https://maps.app.goo.gl/bdLCitn4qnCV4ZUw9', coords: [44.1, -114.7] },
  { label: 'virginia', href: 'https://maps.app.goo.gl/9AyRvZwcuCQAkcb58', coords: [37.5, -78.8] },
  { label: 'wisconsin', href: 'https://maps.app.goo.gl/NRVLwuw3TSW2x3px9', coords: [44.6, -89.8] },
  { label: 'indiana', href: 'https://maps.app.goo.gl/gJ4ULmx8cJ467GLn6', coords: [40.0, -86.1] },
  { label: 'bolivia', href: 'https://maps.app.goo.gl/uaSKNdopcmRB16ME9', coords: [-16.3, -63.6] },
  { label: 'washington dc', href: 'https://maps.app.goo.gl/isw3KL2gwhMdHYqG7', coords: [38.9072, -77.0369] },
  { label: 'indonesia', href: 'https://maps.app.goo.gl/KzY76vu8MYy9NMTM7', coords: [-2.5, 118.0] },
  { label: 'minnesota', href: 'https://maps.app.goo.gl/hsL9bFzGKfbJfMTWA', coords: [46.3, -94.3] },
  { label: 'romania', href: 'https://maps.app.goo.gl/acsJZS8wC3hqTDKJ9', coords: [45.9, 24.97] },
  { label: 'nebraska', href: 'https://maps.app.goo.gl/fdQ2ktdBH4vZ5Ut98', coords: [41.5, -99.8] },
  { label: 'austria', href: 'https://maps.app.goo.gl/XepKp88g3aNzzGMt6', coords: [47.5, 14.55] },
];

function dedupePreserveOrder(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.label.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function isAbsoluteUrl(href) {
  return /^https?:\/\//i.test(href);
}

export default function BucketList() {
  const options = useMemo(() => {
    const deduped = dedupePreserveOrder(BUCKET_OPTIONS_RAW);
    return deduped.sort((a, b) => a.label.localeCompare(b.label));
  }, []);
  const [query, setQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const comboRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((item) => item.label.toLowerCase().includes(q));
  }, [options, query]);

  useEffect(() => {
    if (!dropdownOpen) return undefined;

    function closeIfOutside(event) {
      if (comboRef.current && !comboRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    function onEscape(event) {
      if (event.key === 'Escape') setDropdownOpen(false);
    }

    document.addEventListener('mousedown', closeIfOutside);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', closeIfOutside);
      document.removeEventListener('keydown', onEscape);
    };
  }, [dropdownOpen]);


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
            Search bucket list regions
          </label>
          <input
            id="bucket-search"
            type="search"
            placeholder="where are you going?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setDropdownOpen(true)}
            onClick={() => setDropdownOpen(true)}
            role="combobox"
            aria-expanded={dropdownOpen}
            aria-controls="bucket-list-dropdown"
            aria-autocomplete="list"
            autoComplete="off"
            inputMode="none"
            className="w-full px-4 py-2.5 text-sm text-left border border-pink-300 rounded-full bg-white transition-[box-shadow,border-color,transform] duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-pink-200/70 focus:border-transparent motion-safe:focus:scale-[1.01] placeholder:text-pink-400"
          />

          <div
              id="bucket-list-dropdown"
              role="listbox"
              aria-hidden={!dropdownOpen}
              className={`absolute left-0 right-0 top-full z-50 mt-1 max-h-[65vh] overflow-y-auto rounded-lg border border-pink-200 bg-white py-1 origin-top transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${
                dropdownOpen
                  ? 'visible opacity-100 translate-y-0'
                  : 'invisible pointer-events-none opacity-0 -translate-y-1'
              }`}
            >
              {filtered.length === 0 ? (
                <div className="px-3 py-2.5 text-sm text-pink-500">No matches — try another search.</div>
              ) : (
                <ul className="m-0 list-none p-0">
                  {filtered.map((item) => {
                    const row =
                      'block w-full px-3 py-2 text-left text-sm transition-colors no-underline';
                    const { label, href } = item;

                    if (href) {
                      const external = isAbsoluteUrl(href);
                      return (
                        <li key={label} role="option">
                          <a
                            href={href}
                            {...(external
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : {})}
                            className={`${row} text-pink-900 hover:bg-pink-50`}
                            onClick={() => setDropdownOpen(false)}
                          >
                            {label}
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li key={label} role="option">
                        <span className={`${row} cursor-default text-pink-800`}>{label}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
        </div>

        <p
          className="text-sm text-gray-600 text-justify max-w-md motion-safe:animate-fade-up"
          style={{ animationDelay: '160ms' }}
        >
          compiling all my bucket list spots in google maps folders with the exact recommendations of what to do or get there! I haven&apos;t visited 99% of these places yet, but I do visit and it&apos;s good I note it down and if it&apos;s bad...I&apos;ll end up removing it...
        </p>

        {/* z-0 keeps Leaflet's internal z-indexes from rising above the search dropdown */}
        <div
          className="relative z-0 w-full flex justify-center motion-safe:animate-fade-up"
          style={{ animationDelay: '240ms' }}
        >
          <BucketMap places={options} />
        </div>

        <div
          className="table-cell px-10 motion-safe:animate-fade-up"
          style={{ animationDelay: '320ms' }}
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
