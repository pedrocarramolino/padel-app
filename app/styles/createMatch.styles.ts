export const styles = {
  container: {
    minHeight: "100vh",
    background: "#f4f6f8",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    paddingBottom: 90
  },

  wrapper: {
    width: "100%",
    maxWidth: 600
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12
  },

  title: {
    margin: 0,
    fontSize: 20,
    fontWeight: 800
  },

  backButton: {
    background: "#111",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: 10,
    fontWeight: 700,
    cursor: "pointer"
  },

  card: {
    background: "white",
    borderRadius: 16,
    padding: 14,
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    marginBottom: 12
  },

  input: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    border: "1px solid #ddd",
    marginBottom: 10,
    fontSize: 14
  },

  btnPrimary: {
    width: "100%",
    padding: 14,
    borderRadius: 12,
    border: "none",
    background: "#2ecc71",
    color: "white",
    fontWeight: 800,
    fontSize: 15,
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(46, 204, 113, 0.25)"
  },

  /* =========================
     👥 USERS SELECTOR (CHIPS)
  ========================= */
  userStyles: {
    list: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 8
    },

    chip: {
      padding: "8px 12px",
      borderRadius: 20,
      cursor: "pointer",
      fontSize: 13,
      userSelect: "none",
      transition: "all 0.2s ease",
      border: "1px solid #ddd",
      background: "white"
    }
  }
}