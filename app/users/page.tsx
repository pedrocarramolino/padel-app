"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import BottomNav from "../components/BottomNav"
import { styles } from "../styles/users.styles"

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([])

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  const [editingId, setEditingId] = useState<number | null>(null)
  const [editName, setEditName] = useState("")
  const [editSurname, setEditSurname] = useState("")

  const [deleteId, setDeleteId] = useState<number | null>(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const { data } = await supabase
      .from("users")
      .select("*")
      .order("id", { ascending: false })

    setUsers(data || [])
  }

  async function createUser() {
    if (!name.trim()) return

    await supabase.from("users").insert([
      {
        name,
        surname
      }
    ])

    setName("")
    setSurname("")
    fetchUsers()
  }

  async function deleteUser(id: number) {
    await supabase.from("users").delete().eq("id", id)
    fetchUsers()
  }

  function startEdit(user: any) {
    setEditingId(user.id)
    setEditName(user.name || "")
    setEditSurname(user.surname || "")
  }

  async function saveEdit(id: number) {
    await supabase
      .from("users")
      .update({
        name: editName,
        surname: editSurname
      })
      .eq("id", id)

    setEditingId(null)
    fetchUsers()
  }

  return (
    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>👥 Jugadores</h1>
        <p style={styles.subtitle}>Gestiona tus jugadores</p>
      </div>

      {/* CREATE */}
      <div style={styles.card}>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            style={styles.input}
          />

          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Apellido"
            style={styles.input}
          />
        </div>

        <button onClick={createUser} style={styles.createBtn}>
          Crear jugador
        </button>
      </div>

      {/* LIST */}
      <div style={styles.list}>
        {users.map((u) => (
          <div key={u.id} style={styles.userCard}>

            {/* VIEW MODE */}
            {editingId !== u.id && (
              <>
                <div style={styles.userName}>
                  👤 {u.name} {u.surname}
                </div>

                <div style={styles.actions}>
                  <button
                    onClick={() => startEdit(u)}
                    style={styles.editBtn}
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() => setDeleteId(u.id)}
                    style={styles.deleteBtn}
                  >
                    🗑️
                  </button>
                </div>
              </>
            )}

            {/* EDIT MODE */}
            {editingId === u.id && (
              <div style={{ width: "100%" }}>

                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    style={styles.input}
                  />

                  <input
                    value={editSurname}
                    onChange={(e) => setEditSurname(e.target.value)}
                    style={styles.input}
                  />
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => saveEdit(u.id)}
                    style={styles.saveBtn}
                  >
                    Guardar
                  </button>

                  <button
                    onClick={() => setEditingId(null)}
                    style={styles.cancelBtn}
                  >
                    Cancelar
                  </button>
                </div>

              </div>
            )}

          </div>
        ))}
      </div>

      {/* MODAL DELETE */}
      {deleteId && (
        <div style={styles.modal.overlay}>
          <div style={styles.modal.box}>
            <h3>¿Eliminar usuario?</h3>
            <p>Esta acción no se puede deshacer</p>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={async () => {
                  await deleteUser(deleteId)
                  setDeleteId(null)
                }}
                style={styles.modal.deleteBtn}
              >
                Sí, eliminar
              </button>

              <button
                onClick={() => setDeleteId(null)}
                style={styles.modal.cancelBtn}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  )
}