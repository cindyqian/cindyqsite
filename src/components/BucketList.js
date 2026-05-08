import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Homepage.css';
/** Each bucket entry has a display label and optional URL (`href`). Use `null` until the destination exists. */
const BUCKET_OPTIONS_RAW = [
  { label: 'vietnam', href: 'https://maps.app.goo.gl/uFPtXg3dZLniTuSP8' },
  { label: 'bay area, ca', href: 'https://maps.app.goo.gl/Gw6hM1E8FzAjPax9A' },
  { label: 'new york city', href: 'https://maps.app.goo.gl/zmjYHAEQcjFQCexYA' },
  { label: 'los angeles', href: 'https://maps.app.goo.gl/qC6euZb2MN6GZngj7' },
  { label: 'seattle', href: 'https://maps.app.goo.gl/esgRE17Ty53PXevK9' },
  { label: 'places I want to take my parents', href: 'https://maps.app.goo.gl/F81DMfXun6KacRtK8' },
  { label: '⛰️ outdoors', href: 'https://maps.app.goo.gl/3BcdUAAzc34X6nxy7' },
  { label: 'vancouver + richmond', href: 'https://maps.app.goo.gl/rvd9VHMr8wp9j8daA' },
  { label: 'hong kong', href: 'https://maps.app.goo.gl/2Nq6WYx7cZdQZSJZ7' },
  { label: 'texas', href: 'https://maps.app.goo.gl/QcWCghZAgdSRmtyd8' },
  { label: 'korea', href: 'https://maps.app.goo.gl/ooVfrtue5sZhwhqW8' },
  { label: 'toronto', href: 'https://maps.app.goo.gl/NcnZW6J8ChjqdeQQ8' },
  { label: 'florida', href: 'https://maps.app.goo.gl/KZ5uuyLcEhMPzLBd9' },
  { label: 'rhode island', href: 'https://maps.app.goo.gl/c5rSqGMRmTegyYmD9' },
  { label: 'boston', href: 'https://maps.app.goo.gl/WUWX4uDPZKe6PcxT6' },
  { label: 'vermont', href: 'https://maps.app.goo.gl/VN8uzy7iZHgc6dhZ6' },
  { label: 'malaysia', href: 'https://maps.app.goo.gl/MDT3BpchCxR45VJMA' },
  { label: 'singapore', href: 'https://maps.app.goo.gl/rYcgGpqE4ujFqxyh6' },
  { label: 'united kingdom', href: 'https://maps.app.goo.gl/ZubpGZbKXgFPcEVU8' },
  { label: 'thailand', href: 'https://maps.app.goo.gl/yt1F83igK7yeiKhM6' },
  { label: 'alabama', href: 'https://maps.app.goo.gl/gmDe2irJSti2neE89' },
  { label: 'hawaii', href: 'https://maps.app.goo.gl/zMCrLSRew7642TK79' },
  { label: 'australia', href: 'https://maps.app.goo.gl/Ak5pMzKhpcLB4Bx66' },
  { label: 'japan', href: 'https://maps.app.goo.gl/X5XU17tvBne2CrUH6' },
  { label: 'paris', href: 'https://maps.app.goo.gl/SAi65bjZL6Cyish88' },
  { label: 'taiwan', href: 'https://maps.app.goo.gl/xtmqnTS7uhBEyz2P7' },
  { label: 'chicago', href: 'https://maps.app.goo.gl/Y8vaR8JqEN3vsmY89' },
  { label: '🎂 birthday freebies', href: 'https://maps.app.goo.gl/hoAe8kd1nYMmRCJH9' },
  { label: 'ohio', href: 'https://maps.app.goo.gl/7J5xS7y9BTVyRarq8' },
  { label: 'new jersey', href: 'https://maps.app.goo.gl/8jNgTGv31tqnFU5L6' },
  { label: '👚 thrifting', href: 'https://maps.app.goo.gl/ELxtkHTD4UQe23V48' },
  { label: 'las vegas', href: 'https://maps.app.goo.gl/iupG9WQJBfDcR2TU6' },
  { label: 'mexico', href: 'https://maps.app.goo.gl/drWJdSjQuvSUCEp47' },
  { label: 'china', href: 'https://maps.app.goo.gl/E1tyUqERnk4G8Map8' },
  { label: 'denmark', href: 'https://maps.app.goo.gl/i82fBw4pfSH9yULT9' },
  { label: 'connecticut', href: 'https://maps.app.goo.gl/fPFTkpQQ38jy9kwn6' },
  { label: 'italy', href: 'https://maps.app.goo.gl/MtonyvpQXcw7VGjz5' },
  { label: 'iceland', href: 'https://maps.app.goo.gl/CGFkc1KFhcDKwgpV9' },
  { label: 'new zealand', href: 'https://maps.app.goo.gl/BgX3mUyXbmfLeL9L8' },
  { label: 'india', href: 'https://maps.app.goo.gl/hbk41dBrUzK16dMF7' },
  { label: 'taiwan', href: 'https://maps.app.goo.gl/DHZTGR7jD4w3nR2JA' },
  { label: 'quebec', href: 'https://maps.app.goo.gl/4uRNUx8CuANjan4z8' },
  { label: 'utah', href: 'https://maps.app.goo.gl/aDpBhXvqSCY2fFJZ6' },
  { label: 'costa rica', href: 'https://maps.app.goo.gl/qRyZt5AdYoWGpGmj7' },
  { label: 'philippines', href: 'https://maps.app.goo.gl/BhS9qx33R8RhAizy6' },
  { label: 'philly', href: 'https://maps.app.goo.gl/PkWhzBP3dYUGbnTc9' },
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
    <div ref={topRef} className="flex flex-col items-center min-h-screen geist-mono py-16 px-12">
      <main className="flex flex-col gap-8 max-w-2xl w-full mx-auto items-center">
        <h1 className="text-2xl text-center">Cindy&apos;s 🌎 Bucket List 🪣 </h1>

        <div
          ref={comboRef}
          className="relative w-full max-w-md mx-auto flex flex-col items-stretch gap-0"
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
            className="w-full px-4 py-2.5 text-sm text-left border border-pink-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-transparent placeholder:text-pink-400"
          />

          {dropdownOpen ? (
            <div
              id="bucket-list-dropdown"
              role="listbox"
              className="absolute left-0 right-0 top-full z-50 mt-1 max-h-[65vh] overflow-y-auto rounded-lg border border-pink-200 bg-white py-1"
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
          ) : null}
        </div>

        <p className="text-sm text-gray-600 text-justify max-w-md">
          every once in a while, I&apos;ll go through all the places I&apos;ve saved on instagram and tiktok
          and compile them in google maps folders with the specific recommendations from those posts!
          I haven&apos;t visited 99% of these places yet,
          but I&apos;m pretty excited to go to all of them + proud of compiling these hehe
          <br />
          <br />
          lmk if you ever go to any of these, I'm super curious whether these online recs are worth the hype :)
        </p>

        <div className="table-cell px-10" id="instagram">
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
