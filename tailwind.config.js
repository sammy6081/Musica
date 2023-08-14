/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'lead-image': "linear-gradient(to bottom, transparent, #000000), url(/Musica media/Lead-image.png)",
        'card-1': "url('/Musica media/Rectangle 14 (2).png')",
        'card-2': "url('/Musica media/Rectangle 26 (2).png')",
        'card-3': "url('/Musica media/Rectangle 26 (1).png')",
        'card-4': "url('/Musica media/Rectangle 26.png')",
      },
    },
  },
  plugins: [],
}
