/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      padding: {
        xxl: '65rem', //FOR LOGIN PAGE NAV_BAR
        width: '30%',
        height: '80vh',
      },
      backgroundColor: {
        'LogIn_Frame': '#baffb8',
        'main-bg': 'rgb(236, 62, 39)' //FOR UNIVERSAL USAGE
      },

      link_underline: {
        'border-bottom-width': '0',
        'background-image': 'linear-gradient(transparent, transparent), linear-gradient(#fff, #fff)',
        'background-size': '0 3px',
        'background-position': '0 100%',
        'background-repeat': 'no-repeat',
        'transition': 'background-size .5s ease-in-out',
      },
      link_underline_black: {
        'background-image': 'linear-gradient(transparent, transparent), linear-gradient(#F2C, #F2C)',
      }

    },
  },
  plugins: [],
}

// module.exports = {
//     content: ['./src/**/*.{js,jsx,ts,tsx}'],
//     darkMode: 'class',
//     theme: {
//       fontFamily: {
//         display: ['Open Sans', 'sans-serif'],
//         body: ['Open Sans', 'sans-serif'],
//       },
//       extend: {
//         fontSize: {
//           14: '14px',
//         },
//         backgroundColor: {
//           'main-bg': '#FAFBFB',
//           'main-dark-bg': '#20232A',
//           'secondary-dark-bg': '#33373E',
//           'light-gray': '#F7F7F7',
//           'half-transparent': 'rgba(0, 0, 0, 0.5)',
//         },
//         borderWidth: {
//           1: '1px',
//         },
//         borderColor: {
//           color: 'rgba(0, 0, 0, 0.1)',
//         },
//         width: {
//           400: '400px',
//           760: '760px',
//           780: '780px',
//           800: '800px',
//           1000: '1000px',
//           1200: '1200px',
//           1400: '1400px',
//         },
//         height: {
//           80: '80px',
//         },
//         minHeight: {
//           590: '590px',
//         },
//         // backgroundImage: {
//         //   'hero-pattern':
//         //     "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
//         // },
//       },
//     },
//     plugins: [],
//   };