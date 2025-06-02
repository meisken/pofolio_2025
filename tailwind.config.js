
module.exports = {

  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      '3xl': {'max': '1680px'},
      '2xl': {'max': '1440px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm': {'max': '640px'},
      'xs': {'max': '480px'},

      'portrait' : {'raw': '(orientation: portrait)'},
      'landscape' : {'raw': '(orientation: landscape)'},
    
      'mouse': {'raw': "(hover: hover)"},
      'touch': {'raw': "(hover: none)"},
      
    },
    extend: {
      fontFamily: {
        acumin: ["acumin-pro","sans-serif"],
        "acumin-semi-cond": ["acumin-pro-semi-condensed","sans-serif"],
        "elza": ["elza","sans-serif"],
        "noto-sans-hk": ["Noto Sans HK", "sans-serif"]
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "primary-dark": "var(--primary-dark-color)"
      },
    },

  },
  variants: {
    extend: {},
  },
}
