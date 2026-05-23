import { CSSProperties } from "react"

type Styles = {
  [key: string]: CSSProperties
}

export const styles: Styles = {
  container: {
    minHeight: "100vh",
    background: "#f4f6f8",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  header: {
    width: "100%",
    maxWidth: 600,
    marginBottom: 16
  },

  title: {
    margin: 0,
    fontSize: 28,
    fontWeight: 800,
    color: "#111"
  },

  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#666"
  },

  list: {
    width: "100%",
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    gap: 14
  },

  card: {
    background: "white",
    borderRadius: 20,
    padding: 16,
    cursor: "pointer",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    transition: "all 0.2s ease"
  },

  location: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 8,
    color: "#111"
  },

  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    fontSize: 14,
    color: "#333"
  },

  cost: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 12,
    color: "#111"
  },

  badge: {
    alignSelf: "flex-start",
    padding: "6px 12px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  }
}