export const styles = {
  container: {
    minHeight: "100vh",
    background: "#f4f6f8",
    padding: 16,
    paddingBottom: 90,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  header: {
    width: "100%",
    maxWidth: 600,
    marginBottom: 12
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

  card: {
    width: "100%",
    maxWidth: 600,
    background: "white",
    padding: 12,
    borderRadius: 16,
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    marginBottom: 12
  },

  input: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    border: "1px solid #ddd",
    fontSize: 14
  },

  createBtn: {
    background: "#2ecc71",
    color: "white",
    border: "none",
    padding: "10px 14px",
    borderRadius: 10,
    fontWeight: 700,
    cursor: "pointer",
    width: "100%"
  },

  list: {
    width: "100%",
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },

  userCard: {
    background: "white",
    padding: 14,
    borderRadius: 16,
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  userName: {
    fontWeight: 700,
    fontSize: 15
  },

  actions: {
    display: "flex",
    gap: 6
  },

  editBtn: {
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: 8,
    fontSize: 12,
    cursor: "pointer"
  },

  deleteBtn: {
    background: "#e74c3c",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: 8,
    fontSize: 12,
    cursor: "pointer"
  },

  saveBtn: {
    background: "#2ecc71",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: 10,
    fontWeight: 700,
    cursor: "pointer",
    flex: 1
  },

  cancelBtn: {
    background: "#bdc3c7",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: 10,
    fontWeight: 700,
    cursor: "pointer",
    flex: 1
  },

  modal: {
    overlay: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999
    },

    box: {
      background: "white",
      padding: 20,
      borderRadius: 16,
      width: 300,
      textAlign: "center"
    },

    deleteBtn: {
      background: "#e74c3c",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: 10,
      flex: 1,
      fontWeight: 700,
      cursor: "pointer"
    },

    cancelBtn: {
      background: "#bdc3c7",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: 10,
      flex: 1,
      fontWeight: 700,
      cursor: "pointer"
    }
  }
}