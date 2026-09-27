# Design Document — Kavya's Personal Homepage

## 1. Project Description

This project is a personal homepage for Kavya Kusuma Reddy Korem, a
Computer Science graduate student at Northeastern University, built for
CS5610 Web Development. The site is a static, front-end-only build using
vanilla HTML5, CSS3, and ES6+ JavaScript (no frameworks, component
libraries, or jQuery).

The purpose of the site is threefold:

1. **Introduce Kavya** to visitors who don't know her yet — recruiters,
   classmates, instructors — with a clear picture of her background,
   skills, and projects.
2. **Show real, working front-end code**, not just a static brochure:
   an original JavaScript feature (the book finder) demonstrates DOM
   manipulation, event handling, and data lookup without any libraries.
3. **Reflect her personality**, not just her resume — the Bookshelf page
   exists specifically so the site isn't only "professional," and doubles
   as a small showcase of working with AI tools responsibly (the AI
   Corner, described below).

The site has three pages, sharing one consistent visual design (a warm,
editorial, sage-and-cream color palette; serif display type paired with a
plain sans body; a shared header/footer):

- **Home (`index.html`)** — hero introduction, technical skills, and
  three selected projects.
- **About (`about.html`)** — academic background, technical focus areas,
  and what she's currently learning in CS5610.
- **Bookshelf (`ai-page.html`)** — a personal, non-technical page: three
  books she's enjoyed, an "AI Corner" with AI-generated one-line mood
  tags for each book, and an interactive book finder that recommends
  three books for a chosen genre and mood.

## 2. User Personas

### Persona 1 — Priya, the Hiring Manager

- **Age / Role:** 34, engineering manager at a mid-size software company.
- **Goal:** Screening candidates quickly before a first interview. She
  has ~90 seconds per homepage.
- **Behavior:** Scans the hero section and skills list first; only reads
  project descriptions if the skills look relevant; checks for a way to
  reach the candidate directly (email/LinkedIn) without hunting.
- **Frustration this site addresses:** Many student homepages bury the
  "what do you actually know and what have you built" information under
  decorative content. Priya needs the skills and projects visible on the
  very first screen, which is why they are on the Home page instead of
  further in.

### Persona 2 — Sam, the Classmate Doing a Code Review

- **Age / Role:** 24, fellow CS5610 student assigned to review Kavya's
  project.
- **Goal:** Verify the site follows the assignment rubric: multiple
  pages, ES6 modules, an original JS feature, clean CSS, accessible
  markup.
- **Behavior:** Views page source and the browser dev tools; clicks
  through every nav link; tests the interactive feature with different
  inputs, including edge cases; checks that images have `alt` text and
  that headings are structured sensibly.
- **Frustration this site addresses:** Reviewers get frustrated by dead
  links, broken interactive features, or pages that exist only for the
  sake of hitting a page count. Every linked page here is complete and
  functional, and the Bookshelf page's finder is exercised in three
  distinct states (idle placeholder, populated results, repeated use).

### Persona 3 — Alex, a Fellow Book Lover Who Found the Site by Chance

- **Age / Role:** 27, works in an unrelated field, found the site through
  a shared link, not looking for a developer.
- **Goal:** Just wants something interesting to read next.
- **Behavior:** Skips the technical pages entirely and goes straight to
  the Bookshelf; uses the genre/mood finder rather than reading Kavya's
  three listed books, since they may not match their taste.
- **Frustration this site addresses:** A portfolio that is 100%
  professional gives a casual visitor no reason to engage. The Bookshelf
  page and its finder give Alex a reason to spend time on the site and
  come away with something useful (a book suggestion), even with zero
  interest in Kavya's technical work.

## 3. User Stories

1. **As Priya (hiring manager),** I want to see Kavya's technical skills
   and a few real projects on the very first screen, so that I can decide
   in under two minutes whether to read further.
2. **As Priya,** I want a working email/GitHub/LinkedIn link in the
   footer of every page, so that I can reach out without having to search
   for contact information.
3. **As Sam (code reviewer),** I want every nav link to lead to a
   complete, distinct page (not a stub), so that I can verify the site
   actually has multiple meaningful pages as the rubric requires.
4. **As Sam,** I want the interactive book finder to behave correctly for
   every combination of genre and mood, so that I can confirm the
   original JavaScript feature is real and not decorative.
5. **As Sam,** I want images to have descriptive `alt` text and controls
   to use real `<label>`/`<select>`/`<button>` elements instead of
   `<div>`s pretending to be interactive, so that the site is accessible
   and uses standard HTML correctly.
6. **As Alex (casual visitor),** I want to pick a genre and a mood and
   immediately get three book suggestions, so that I can find something
   to read without needing to know or care about the rest of the site.
7. **As Alex,** I want to understand which parts of the Bookshelf page
   were written by a person and which were generated by AI, so that I
   know what I'm actually reading (this is why the AI Corner is clearly
   labeled rather than blended in silently).
8. **As any visitor on a phone,** I want the layout to reflow into a
   single column with readable text and tappable controls, so that the
   site works as well on mobile as it does on a laptop.

## 4. Design Mockups

Low-fidelity wireframes for each page, sketched before implementation.
Boxes represent layout regions, not final visual styling (see the
deployed site / screenshot in the README for the final look).

### Home (`index.html`)

```
┌──────────────────────────────────────────────────────────┐
│ KAVYA.                          Home  About  Bookshelf    │  <- shared header/nav
├──────────────────────────────────────────────────────────┤
│  HELLO, I'M KAVYA                     ┌──────────────┐    │
│  Welcome to my website.               │ CURRENTLY     │    │
│  <intro paragraph>                    │ Program ...   │    │  <- hero (2-col grid)
│  [About me]  Visit my bookshelf →     │ University .. │    │
│                                        │ Course ...    │    │
│                                        │ Focus ...     │    │
│                                        └──────────────┘    │
├──────────────────────────────────────────────────────────┤
│  TECHNICAL SKILLS                                          │
│  Programming        Java · Python · C/C++ · SQL            │  <- skills rows
│  Web Development     HTML · CSS · JS · Responsive Design    │
│  Software & Tools   Git · GitHub · IntelliJ · VS Code       │
│  Other Technologies AWS · IoT · ML                          │
├──────────────────────────────────────────────────────────┤
│  SELECTED PROJECTS                                          │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐  │  <- project cards
│  │ Smart Bus       │ │ Secure Bank    │ │ Diabetes       │  │
│  │ Ticketing       │ │ Login System   │ │ Prediction     │  │
│  └────────────────┘ └────────────────┘ └────────────────┘  │
├──────────────────────────────────────────────────────────┤
│  OUTSIDE OF CLASS — I usually have a book nearby.           │
│  See what I'm reading →                                     │
├──────────────────────────────────────────────────────────┤
│ KAVYA.   MS CS · Northeastern   Email · GitHub · LinkedIn   │  <- shared footer
└──────────────────────────────────────────────────────────┘
```

### About (`about.html`)

```
┌──────────────────────────────────────────────────────────┐
│ KAVYA.                          Home  About  Bookshelf    │
├──────────────────────────────────────────────────────────┤
│  ABOUT                                                     │
│  A little about me.  <intro paragraph>                     │
├──────────────────────────────────────────────────────────┤
│  BACKGROUND                                                │
│  My background in CS      <two paragraphs of background>   │  <- 2-col grid
├──────────────────────────────────────────────────────────┤
│  TECHNICAL AREAS                                            │
│  ┌───────────────┐┌───────────────┐                        │
│  │ Software Dev  ││ Web Tech      │                        │  <- 2x2 card grid
│  ├───────────────┤├───────────────┤                        │
│  │ Data & ML     ││ Cloud & IoT   │                        │
│  └───────────────┘└───────────────┘                        │
├──────────────────────────────────────────────────────────┤
│  WHAT I'M LEARNING NOW      <CS5610-specific paragraph>     │
├──────────────────────────────────────────────────────────┤
│  ONE MORE THING — Technology isn't my only interest.        │
│  Visit my bookshelf →                                       │
├──────────────────────────────────────────────────────────┤
│ KAVYA.   MS CS · Northeastern   Email · GitHub · LinkedIn   │
└──────────────────────────────────────────────────────────┘
```

### Bookshelf (`ai-page.html`)

```
┌──────────────────────────────────────────────────────────┐
│ KAVYA.                          Home  About  Bookshelf    │
├──────────────────────────────────────────────────────────┤
│  BOOKSHELF — Books I've enjoyed.  <intro paragraph>         │
├──────────────────────────────────────────────────────────┤
│  MY BOOKSHELF                                               │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐                │
│  │ cover img │  │ cover img │  │ cover img │                │  <- 3-col book grid
│  │ Title/    │  │ Title/    │  │ Title/    │                │
│  │ Author    │  │ Author    │  │ Author    │                │
│  └───────────┘  └───────────┘  └───────────┘                │
├──────────────────────────────────────────────────────────┤
│  AI CORNER — Mood tags, written by AI.                       │
│  <disclosure paragraph: what AI did / didn't write>          │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐                │
│  │ Book A    │  │ Book B    │  │ Book C    │                │  <- AI tagline cards
│  │ "AI tag"  │  │ "AI tag"  │  │ "AI tag"  │                │
│  └───────────┘  └───────────┘  └───────────┘                │
├──────────────────────────────────────────────────────────┤
│  BOOK FINDER — Looking for something to read?                │
│  ┌────────────┐   ┌───────────────────────────────────┐    │
│  │ Genre [v]  │   │  result 1  │  result 2  │ result 3 │    │  <- controls + results
│  │ Mood  [v]  │   │  (populated on click, aria-live)   │    │
│  │ [Find      │   └───────────────────────────────────┘    │
│  │  books]    │                                             │
│  └────────────┘                                             │
├──────────────────────────────────────────────────────────┤
│ KAVYA.   MS CS · Northeastern   Email · GitHub · LinkedIn   │
└──────────────────────────────────────────────────────────┘
```

### Responsive behavior (all pages)

At tablet and mobile widths, every multi-column grid above (hero,
skills, projects, about grid, technical-area cards, book grid, AI
tagline cards, and the finder) collapses to a single column, and the
footer stacks vertically. This is implemented with plain CSS Grid /
Flexbox and two media query breakpoints (`800px`, `500px`) in
`css/style.css` — no CSS framework.
