module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        large: "1400px"
      },
      backgroundColor: {
        customPrimary: "#0085d4",
        customGray: "#f2f2f2",
        customPurple: "#d2def8",
        customYellow: "#fdc564",
        customBlue: "#eff3fc",
        customLightGray: "#eef0f2"
      },
      width: {
        15: "3.75rem",
        56: "56px",
        74: "74px",
        128: "32rem",
        160: "40rem",
        350: "350px",
        28: "7rem",
        36: "9rem"
      },
      height: {
        15: "3.75rem",
        56: "56px",
        74: "74px",
        86: "86px"
      },
      padding: {
        15: "3.75rem",
        22: "5.5rem"
      },
      cursor: {
        grab: "grab"
      },
      borderRadius: {
        large: "58px"
      },
      inset: {
        8: "32px"
      }
    },
  },
  variants: {},
  plugins: [],
}
