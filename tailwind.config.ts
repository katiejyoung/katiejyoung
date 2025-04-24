// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
            inter: ['var(--font-inter)'],
            knewave: ['var(--font-knewave)'], // ✅ now `font-knewave` will work
            'bricolage-grotesque': ['var(--font-bricolage-grotesque)'],
          },
      },
    },
  };
  