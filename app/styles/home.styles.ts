export const styles = {
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
    fontSize: 22,
    fontWeight: 800
  },

  subtitle: {
    margin: 0,
    fontSize: 13,
    color: "#666"
  },

  list: {
    width: "100%",
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    gap: 12
  },

  card: {
    background: "white",
    padding: 14,
    borderRadius: 16,
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    cursor: "pointer",
    transition: "transform 0.15s ease"
  },

  location: {
    fontSize: 16,
    fontWeight: 800,
    marginBottom: 6
  },

  date: {
    fontSize: 13,
    color: "#666",
    marginBottom: 10
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13,
    color: "#444"
  },

  cost: {
    marginTop: 8,
    fontWeight: 700,
    fontSize: 13
  },

  badge: {
    marginTop: 10,
    fontSize: 12,
    padding: "4px 8px",
    borderRadius: 8,
    background: "#fff3cd",
    display: "inline-block"
  },

  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 999,
    background: "#2ecc71",
    color: "white",
    fontSize: 28,
    border: "none",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    cursor: "pointer"
  }
}