"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { styles } from "./styles/home.styles"
import BottomNav from "./components/BottomNav"

export default function HomePage() {
  const router = useRouter()

  const [matches, setMatches] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMatches()
  }, [])

  async function fetchMatches() {
    setLoading(true)

    const { data } = await supabase
      .from("matches")
      .select(`
        *,
        match_players (
          has_paid
        )
      `)
      .order("date_time", { ascending: false })

    setMatches(data || [])
    setLoading(false)
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  function getPaymentStatus(players: any[]) {
    if (!players || players.length === 0) return "🔴 Pendiente"

    const total = players.length
    const paid = players.filter((p) => p.has_paid).length

    if (paid === 0) return "🔴 Pendiente"
    if (paid === total) return "🟢 Pagado"
    return "🟡 Parcial"
  }

  function getBadgeColor(status: string) {
    if (status.includes("🟢")) return "#d4edda"
    if (status.includes("🔴")) return "#f8d7da"
    return "#fff3cd"
  }

  return (
    <div style={{ ...styles.container, paddingBottom: 90 }}>

      <div style={styles.header}>
        <h1 style={styles.title}>🎾 Mis partidos</h1>
        <p style={styles.subtitle}>Gestiona tus partidos de pádel</p>
      </div>

      <div style={styles.list}>
        {loading && <div>Cargando...</div>}

        {matches.map((m) => {
          const costPerPlayer = m.players_count
            ? (m.total_cost / m.players_count).toFixed(2)
            : "0.00"

          const status = getPaymentStatus(m.match_players)

          return (
            <div
              key={m.id}
              style={styles.card}
              onClick={() => router.push(`/match/${m.id}`)}
            >
              <div style={styles.location}>📍 {m.location}</div>

              <div style={styles.date}>
                🕒 {formatDate(m.date_time)}
              </div>

              <div style={styles.row}>
                <div>👥 {m.players_count} jugadores</div>
                <div>💰 {m.total_cost}€</div>
              </div>

              <div style={styles.cost}>
                💸 {costPerPlayer}€ por jugador
              </div>

              <div
                style={{
                  ...styles.badge,
                  background: getBadgeColor(status)
                }}
              >
                {status}
              </div>
            </div>
          )
        })}
      </div>

      <BottomNav />
    </div>
  )
}