# Design Document — Kavya's Personal Homepage

## 1. Project Description

This is my personal homepage for CS5610 (Web Development) at Northeastern.
It's a small static site using HTML5, CSS3, and vanilla ES6+ JavaScript.
No frameworks, no component libraries, no jQuery. The only tooling I added
on top is ESLint and Prettier, purely for code quality while I was writing
it.

I wanted the site to do three things for me:

1. Give someone who doesn't know me yet, a recruiter, a classmate, my
   professor, a fast, honest read on who I am, what I actually know, and
   what I've built.
2. Show real, working front-end code instead of just talking about it.
   The book finder on the Bookshelf page is the piece that does this —
   it's genuine DOM manipulation and event handling, nothing pulled in
   from a library.
3. Show a bit of my personality and not just a resume in HTML form.
   That's really the whole reason the Bookshelf page exists, it's the
   one page on the site that isn't strictly "professional."

There are three pages, and they all share one look so the site feels like
one thing instead of three separate pages stitched together: a warm
sage-and-cream color palette, a serif heading font over a plain sans body,
and the same header/footer everywhere.

- **Home (`index.html`)** — who I am, my skills, and three projects I'm
  proud of.
- **About (`about.html`)** — more on my CS background and what I'm
  currently working through in CS5610.
- **Bookshelf (`ai-page.html`)** — books I've actually read, plus an
  interactive finder that recommends books by genre and mood.

## 2. User Personas

I thought through three different people who could actually land on this
site, because each of them would use it completely differently.

### Priya — hiring manager

She's 34, manages engineers at a mid-size company, and looks through a lot
of candidate homepages. Realistically she gives each one under two
minutes. She skims the top for skills and projects and only keeps reading
if something catches her attention. If she can't find a way to reach out
in a few seconds, she just moves on.

What that means for the site: skills and projects can't be buried a few
scrolls down, they're both right on the home page — and my
email/GitHub/LinkedIn are in the footer of every page so she never has to
go looking.

### Sam — classmate doing my code review

Sam is a fellow CS5610 student who's been assigned to review this project
against the rubric. He's going to open dev tools, click through every nav
link, and try to break the book finder with odd input combinations. He'll
also check that images have real alt text and that I didn't fake a button
out of a div.

What that means for the site: every nav link has to go somewhere real,
the finder has to actually work for every genre/mood combination, and I
need to use real semantic HTML instead of cutting corners.

### Alex — a random book lover

Alex found the site through a shared link and has zero interest in my
resume — he just wants something to read next. He skips Home and About
entirely and goes straight to the Bookshelf, and he'll use the finder
instead of my three listed books, since those might not match what he's
in the mood for.

What that means for the site: the Bookshelf page needs to stand on its
own as something worth visiting even for someone who doesn't care that
I'm a CS student at all.

## 3. User Stories

1. As Priya, I want to see Kavya's skills and a couple of real projects
   the moment the page loads, so I can decide in under two minutes
   whether she's worth a closer look.
2. As Priya, I want a working email/GitHub/LinkedIn link on every page,
   so I don't have to go searching for a way to reach out.
3. As Sam, I want every nav link to lead to a complete, real page, not a
   stub, so I can confirm the site actually has the pages the rubric
   asks for.
4. As Sam, I want the book finder to return something sensible no matter
   which genre and mood I pick, so I know the "original JS feature" isn't
   just decoration.
5. As Sam, I want images to have real alt text and controls to be actual
   `<button>`/`<select>`/`<label>` elements — not divs pretending to be
   interactive — so the markup holds up under review.
6. As Alex, I want to pick a genre and a mood and get three suggestions
   back right away, without needing to care about anything else on the
   site.
7. As Alex, I want to be able to tell what on this site is written by me
   versus generated with help from an AI tool, so I'm not confused about
   what I'm reading.
8. As anyone on their phone, I want the page to reflow into one column
   with text I can actually read and buttons I can actually tap, so the
   site isn't a laptop-only experience.

## 4. Design Mockups

These are the low-fidelity wireframes I sketched out before building
anything. The boxes are layout regions, not final styling — see the
screenshot in the README for how it actually turned out.

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

At tablet and mobile widths, every multi-column layout above (the hero,
skills rows, project cards, about grid, technical-area cards, book grid,
and the finder) drops down to a single column, and the footer stacks
vertically instead of spreading out. I did this with plain CSS Grid and
Flexbox and two breakpoints (`800px` and `500px`) in `css/style.css` — no
framework involved.
