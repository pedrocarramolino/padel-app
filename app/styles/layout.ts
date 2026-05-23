export const layout = {
  screen: {
    minHeight: "100vh",
    background: "#f4f6f8",
    display: "flex",
    justifyContent: "center"
  },

  container: {
    width: "100%",
    maxWidth: 480, // móvil-first
    padding: 16
  },

  // 💻 override para desktop grande
  desktop: {
    maxWidth: 900,
    padding: 24
  }
}