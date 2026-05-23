"use client"

import { useEffect, useState } from "react"

type Props = {
  open: boolean
  title?: string
  message?: string
  onCancel: () => void
  onConfirm: () => void
}

export default function ConfirmModal({
  open,
  title = "¿Estás seguro?",
  message = "Esta acción no se puede deshacer",
  onCancel,
  onConfirm
}: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) setVisible(true)
    else {
      setTimeout(() => setVisible(false), 200)
    }
  }, [open])

  if (!visible) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: open ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.2s ease",
        zIndex: 9999
      }}
      onClick={onCancel}
    >
      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 16,
          width: 300,
          transform: open ? "scale(1)" : "scale(0.9)",
          transition: "all 0.2s ease"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ marginTop: 0 }}>{title}</h3>
        <p style={{ color: "#666", fontSize: 14 }}>{message}</p>

        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
          <button
            onClick={onCancel}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 10,
              border: "none",
              background: "#eee",
              fontWeight: 700
            }}
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 10,
              border: "none",
              background: "#e74c3c",
              color: "white",
              fontWeight: 700
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}