import { CSSProperties } from "react"

type Styles = {
  [key: string]: CSSProperties | any
}

export const styles: Styles = {
  container: {
    minHeight: "100vh",
    background: "#f4f6f8",
    display: "flex",
    justifyContent: "center"
  },

  wrapper: {
    width: "100%",
    maxWidth: 520,
    padding: 16,

    // 🧠 espacio extra en desktop
    paddingTop: 24,
    paddingBottom: 40
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 20
  },

  backButton: {
    background: "#111",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: 10,
    fontWeight: 700
  },

  title: {
    margin: 0,
    fontSize: 20,
    fontWeight: 800
  },

  card: {
    background: "white",
    padding: 16,
    borderRadius: 16,

    // 🧠 más separación entre cards
    marginBottom: 16,

    boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
  },

  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    border: "1px solid #ddd"
  },

  playerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "12px 0",
    borderBottom: "1px solid #eee"
  },

  /* =========================
     📱 RESPONSIVE
  ========================= */
  desktopWrapper: {
    maxWidth: 900
  },

  gridDesktop: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  }
}