"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { styles } from "../styles/createMatch.styles"
import BottomNav from "../components/BottomNav"

export default function CreateMatchPage() {
  const router = useRouter()

  const [location, setLocation] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [totalCost, setTotalCost] = useState("")
  const [playersCount, setPlayersCount] = useState(4)

  const [users, setUsers] = useState<any[]>([])
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const { data } = await supabase.from("users").select("*")
    setUsers(data || [])
  }

  function toggleUser(id: number) {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter((u) => u !== id))
    } else {
      setSelectedUsers([...selectedUsers, id])
    }
  }

  async function handleSubmit() {
    const { data: match, error } = await supabase
      .from("matches")
      .insert([
        {
          location,
          date_time: dateTime,
          total_cost: Number(totalCost),
          players_count: playersCount
        }
      ])
      .select()
      .single()

    if (error || !match) {
      console.error(error)
      return
    }

    if (selectedUsers.length > 0) {
      const rows = selectedUsers.map((userId) => ({
        match_id: match.id,
        user_id: userId,
        has_paid: false
      }))

      await supabase.from("match_players").insert(rows)
    }

    router.push("/")
  }

  return (
    <div style={{ ...styles.container, paddingBottom: 90 }}>

      <div style={styles.wrapper}>

        {/* HEADER */}
        <div style={styles.header}>
          <button
            style={styles.backButton}
            onClick={() => router.push("/")}
          >
            ← Volver
          </button>

          <h2 style={styles.title}>🎾 Crear partido</h2>

          <div style={{ width: 70 }} />
        </div>

        {/* FORM */}
        <div style={styles.card}>

          <input
            placeholder="Ubicación"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={styles.input}
          />

          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            style={styles.input}
          />

          <input
            placeholder="Precio total"
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Jugadores"
            value={playersCount}
            onChange={(e) => setPlayersCount(Number(e.target.value))}
            style={styles.input}
          />

        </div>

        {/* SELECT USERS */}
        <div style={styles.card}>

          <h3 style={{ marginTop: 0 }}>👥 Seleccionar jugadores</h3>

          <div style={styles.userStyles.list}>
            {users.map((u) => {
              const selected = selectedUsers.includes(u.id)

              return (
                <div
                  key={u.id}
                  onClick={() => toggleUser(u.id)}
                  style={{
                    ...styles.userStyles.chip,
                    background: selected ? "#2ecc71" : "white",
                    color: selected ? "white" : "black",
                    border: selected ? "none" : "1px solid #ddd"
                  }}
                >
                  {u.name} {u.surname}
                </div>
              )
            })}
          </div>

        </div>

        {/* SELECTED PREVIEW (PRO TOUCH) */}
        {selectedUsers.length > 0 && (
          <div style={styles.card}>
            <h4>Seleccionados ({selectedUsers.length})</h4>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {users
                .filter((u) => selectedUsers.includes(u.id))
                .map((u) => (
                  <div
                    key={u.id}
                    style={{
                      padding: "6px 10px",
                      borderRadius: 20,
                      background: "#2ecc71",
                      color: "white",
                      fontSize: 12
                    }}
                  >
                    {u.name}
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* BUTTON */}
        <button onClick={handleSubmit} style={styles.btnPrimary}>
          Crear partido
        </button>

      </div>

      <BottomNav />
    </div>
  )
}