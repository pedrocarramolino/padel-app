"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, useParams } from "next/navigation"
import { styles } from "@/app/styles/matchDetail.styles"

export default function MatchDetailPage() {
  const router = useRouter()
  const params = useParams()

  const matchId = params.id

  const [match, setMatch] = useState<any>(null)
  const [players, setPlayers] = useState<any[]>([])

  const [editMode, setEditMode] = useState(false)

  const [location, setLocation] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [totalCost, setTotalCost] = useState("")
  const [playersCount, setPlayersCount] = useState(4)

  useEffect(() => {
    fetchMatch()
    fetchPlayers()
  }, [])

  async function fetchMatch() {
    const { data } = await supabase
      .from("matches")
      .select("*")
      .eq("id", matchId)
      .single()

    setMatch(data)

    setLocation(data.location)
    setDateTime(data.date_time)
    setTotalCost(data.total_cost)
    setPlayersCount(data.players_count)
  }

  async function fetchPlayers() {
    const { data } = await supabase
      .from("match_players")
      .select(`
        id,
        has_paid,
        users (
          name,
          surname
        )
      `)
      .eq("match_id", matchId)

    setPlayers(data || [])
  }

  async function togglePaid(player: any) {
    await supabase
      .from("match_players")
      .update({ has_paid: !player.has_paid })
      .eq("id", player.id)

    fetchPlayers()
  }

  async function saveMatch() {
    const { error } = await supabase
      .from("matches")
      .update({
        location,
        date_time: dateTime,
        total_cost: Number(totalCost),
        players_count: playersCount
      })
      .eq("id", matchId)

    if (error) {
      console.error(error)
      return
    }

    setEditMode(false)
    fetchMatch()
  }

  async function deleteMatch() {
    const ok = confirm("¿Seguro que quieres borrar este partido?")
    if (!ok) return

    await supabase
      .from("matches")
      .delete()
      .eq("id", matchId)

    router.push("/")
  }

  if (!match) return <div>Cargando...</div>

  const costPerPlayer = match.players_count
    ? (match.total_cost / match.players_count).toFixed(2)
    : "0.00"

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>

        {/* HEADER */}
        <div style={styles.header}>
          <button
            style={styles.backButton}
            onClick={() => router.push("/")}
          >
            ← Volver
          </button>

          <h2 style={styles.title}>🎾 Partido</h2>

          <div style={{ display: "flex", gap: 6 }}>
            <button
              onClick={() => setEditMode(!editMode)}
              style={{
                background: editMode ? "#f39c12" : "#3498db",
                color: "white",
                border: "none",
                padding: "6px 10px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700
              }}
            >
              ✏️
            </button>

            <button
              onClick={deleteMatch}
              style={{
                background: "#e74c3c",
                color: "white",
                border: "none",
                padding: "6px 10px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700
              }}
            >
              🗑️
            </button>
          </div>
        </div>

        {/* MATCH INFO / EDIT MODE */}
        <div style={styles.card}>

          {!editMode ? (
            <>
              <div style={{ fontSize: 18, fontWeight: 800 }}>
                📍 {match.location}
              </div>

              <div style={{ color: "#666", fontSize: 14, marginTop: 4 }}>
                🕒 {new Date(match.date_time).toLocaleString()}
              </div>

              <div style={{ marginTop: 10, fontWeight: 700 }}>
                💰 Total: {match.total_cost}€ | 💸 Por jugador: {costPerPlayer}€
              </div>
            </>
          ) : (
            <>
              <input
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
                value={totalCost}
                onChange={(e) => setTotalCost(e.target.value)}
                style={styles.input}
              />

              <input
                type="number"
                value={playersCount}
                onChange={(e) => setPlayersCount(Number(e.target.value))}
                style={styles.input}
              />

              <button
                onClick={saveMatch}
                style={{
                  background: "#2ecc71",
                  color: "white",
                  border: "none",
                  padding: 10,
                  borderRadius: 10,
                  width: "100%",
                  fontWeight: 700
                }}
              >
                Guardar cambios
              </button>
            </>
          )}
        </div>

        {/* JUGADORES */}
        <div style={styles.card}>
          <h3 style={{ marginTop: 0 }}>👥 Jugadores</h3>

          {players.map((p) => (
            <div
              key={p.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #eee"
              }}
            >
              <div>
                👤 {p.users?.name} {p.users?.surname}
              </div>

              <button
                onClick={() => togglePaid(p)}
                style={{
                  background: p.has_paid ? "#2ecc71" : "#e74c3c",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 700
                }}
              >
                {p.has_paid ? "Pagado" : "Debe"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}