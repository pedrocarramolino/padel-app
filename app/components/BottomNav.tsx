"use client"

import { useRouter, usePathname } from "next/navigation"

export default function BottomNav() {
  const router = useRouter()
  const pathname = usePathname()

  function isActive(path: string) {
    return pathname === path
  }

  return (
    <div style={styles.container}>

      <button
        onClick={() => router.push("/")}
        style={{
          ...styles.btn,
          ...(isActive("/") ? styles.active : {})
        }}
      >
        🏠
      </button>

      <button
        onClick={() => router.push("/create-match")}
        style={{
          ...styles.btn,
          ...(isActive("/create-match") ? styles.active : {})
        }}
      >
        🎾
      </button>

      <button
        onClick={() => router.push("/users")}
        style={{
          ...styles.btn,
          ...(isActive("/users") ? styles.active : {})
        }}
      >
        👥
      </button>

    </div>
  )
}

const styles = {
  container: {
    position: "fixed" as const,
    bottom: 0,
    left: 0,
    right: 0,

    height: 64,
    background: "white",
    borderTop: "1px solid #eee",

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    boxShadow: "0 -2px 10px rgba(0,0,0,0.08)",
    zIndex: 9999
  },

  btn: {
    fontSize: 22,
    background: "transparent",
    border: "none",
    padding: 10,
    borderRadius: 12,
    cursor: "pointer",
    opacity: 0.5
  },

  active: {
    opacity: 1,
    background: "#f4f6f8"
  }
}