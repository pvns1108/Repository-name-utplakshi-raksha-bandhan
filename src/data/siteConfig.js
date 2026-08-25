// ============================================================================
// siteConfig.js
// ----------------------------------------------------------------------------
// Everything personal about this film lives here: names, words, photos, music.
// You should not need to touch any component or CSS file to make this site
// yours -- just edit the values below.
// ============================================================================

const BASE = import.meta.env.BASE_URL;

const photo = (name) => `${BASE}photos/${name}`;
const music = (name) => `${BASE}music/${name}`;
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
export const siteConfig = {
  // The name that appears in the finale.
  sisterName: "Utplakshi",

  // --------------------------------------------------------------------------
  // SCENE 01 -- THE OPENING
  // The first thing she sees. Keep it quiet. Use "\n" for a manual line break.
  // --------------------------------------------------------------------------
  opening: {
    eyebrow: "A little something for you.",
    title: "For the girl who made growing up\na little less boring.",
    subtitle:
      "Some things are difficult to put into words.\nSo I decided to make something instead.",
    beginLabel: "Begin",
  },

  // --------------------------------------------------------------------------
  // SCENE 02 -- THE QUESTION
  // A small, playful pause before the film really starts.
  // --------------------------------------------------------------------------
  question: {
    eyebrow: "Before we begin\u2026",
    title: "Are you excited to move next?",
    yesText: "I\u2019m ready.",
    noText: "Maybe not\u2026",
    // Shown if she picks "I'm ready."
    yesResponse: "Good answer.",
    // Shown if she picks "Maybe not..." -- playful, not childish.
    teasingText: "Too late.\nYou\u2019re already here.",
    continueLabel: "Continue",
  },

  // --------------------------------------------------------------------------
  // SCENE 03 -- THE MEMORIES
  // 3 to 6 cards. If an image path doesn't exist, a tasteful placeholder
  // is shown automatically -- the site will never show a broken image icon.
  // Replace the "image" paths once you've added real photos to
  // public/photos/ (see the README for exact filenames).
  // --------------------------------------------------------------------------
  memories: [
    {
      image: "/photos/memory-1.jpg",
      number: "01",
      title: "The Beginning",
      text: "Before either of us knew what siblings were supposed to be, we were already figuring it out -- one argument, one alliance at a time.",
    },
    {
      image: "/photos/memory-2.jpg",
      number: "02",
      title: "Partners In Crime",
      text: "Every plan that wasn't supposed to work somehow did, mostly because we refused to tell on each other.",
    },
    {
      image: "/photos/memory-3.jpg",
      number: "03",
      title: "The Arguments",
      text: "We fought about everything and nothing. None of it mattered by the next morning. All of it, somehow, still does.",
    },
    {
      image: "/photos/memory-4.jpg",
      number: "04",
      title: "Growing Apart, Sort Of",
      text: "Different rooms, different cities, different lives -- and somehow still the first person I want to tell things to.",
    },
    {
      image: "/photos/memory-5.jpg",
      number: "05",
      title: "Every Rakhi",
      text: "One thread, tied the same way, every single year. The one tradition that never once felt like an obligation.",
    },
  
  ],

  // --------------------------------------------------------------------------
  // SCENE 04 -- THE EMOTIONAL MESSAGE
  // Each line is revealed on its own as she scrolls. Keep lines short --
  // that's what makes them land.
  // --------------------------------------------------------------------------
  message: {
    eyebrow: "If I don\u2019t say it enough\u2026",
    lines: [
      "Thank you.",
      "For being there.",
      "For putting up with me.",
      "For all the laughs.",
      "For all the arguments.",
      "For being my sister.",
    ],
  },

  // --------------------------------------------------------------------------
  // SCENE 05 -- THE FINAL REVEAL
  // The emotional payoff. "title" supports "\n" for a stacked headline.
  // --------------------------------------------------------------------------
  finale: {
    preTitle: "And finally\u2026",
    title: "Happy\nRaksha\nBandhan",
    name: "Utplakshi.",
    message:
      "No matter how much we grow,\nhow far we go,\nor how much life changes \u2014\nyou\u2019ll always be my sister,\nand I\u2019ll always have your back.",
    signature: "\u2014 Your brother",
  },

  // --------------------------------------------------------------------------
  // BACKGROUND MUSIC
  // Music never autoplays -- she has to press play herself. If the file at
  // "src" is missing, the control quietly hides itself instead of breaking.
  // --------------------------------------------------------------------------
  music: {
    enabled: true,
    src: "/music/rakhi.mp3",
  },
};
