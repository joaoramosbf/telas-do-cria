"use client"

import Link from "next/link"
import { useState } from "react"

const FLUXOS = [
  { href: "/aluno/confirmacao",  emoji: "🗓️", label: "confirmação de presença",  desc: "Cria confirma presença 2h antes da aula automaticamente" },
  { href: "/aluno/pre-aula",     emoji: "😴", label: "questionário pré-aula",    desc: "sono, energia e dores enviados pro personal antes da sessão" },
  { href: "/aluno/feedback",     emoji: "⭐", label: "feedback semanal",         desc: "aluno avalia a semana — Cria gera o relatório automático" },
  { href: "/aluno/relatorio",    emoji: "📈", label: "relatório da semana",      desc: "relatório personalizado com IA enviado todo domingo" },
  { href: "/aluno/treino",       emoji: "🏋️", label: "consultar treino e saldo", desc: "aluno vê o treino do dia e o saldo de aulas a qualquer hora" },
  { href: "/aluno/pagamento",    emoji: "💳", label: "lembrete de mensalidade",  desc: "lembrete automático 3 dias antes do vencimento" },
]

export default function AlunoPage() {
  const [hov, setHov] = useState<number | null>(null)

  return (
    <div style={{ minHeight: "100dvh", background: "#FEE9D6", fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif" }}>

      {/* Header */}
      <div style={{
        background: "#EB4200", padding: "20px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </Link>
          <span style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>cria</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>/ aluno</span>
        </div>
        <Link href="/apresentacao" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>ver apresentação</span>
        </Link>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(28,25,23,0.4)", textTransform: "uppercase", marginBottom: 8 }}>
          conversas do aluno com o Cria
        </div>
        <div style={{ fontSize: 28, fontWeight: 900, color: "#1C1917", letterSpacing: "-0.02em", marginBottom: 40 }}>
          o que o aluno recebe pelo WhatsApp
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {FLUXOS.map((f, i) => (
            <Link key={i} href={f.href} style={{ textDecoration: "none" }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            >
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 20px", borderRadius: 8,
                background: hov === i ? "rgba(235,66,0,0.06)" : "rgba(255,255,255,0.5)",
                border: hov === i ? "1px solid rgba(235,66,0,0.2)" : "1px solid transparent",
                transition: "all 0.12s", cursor: "pointer",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: hov === i ? "#EB4200" : "rgba(28,25,23,0.2)", width: 20, flexShrink: 0, transition: "color 0.12s" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{f.emoji}</span>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#1C1917", marginBottom: 3 }}>{f.label}</div>
                    <div style={{ fontSize: 13, color: "rgba(28,25,23,0.45)", lineHeight: 1.4 }}>{f.desc}</div>
                  </div>
                </div>
                <svg width="16" height="16" fill="none" stroke={hov === i ? "#EB4200" : "rgba(28,25,23,0.15)"} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, transition: "stroke 0.12s" }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
