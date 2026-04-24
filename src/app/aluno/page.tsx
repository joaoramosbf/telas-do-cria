"use client"

import Link from "next/link"
import { useState } from "react"

const FLUXOS = [
  { href: "/aluno/confirmacao",  emoji: "🗓️", label: "confirmação de presença",  desc: "Cria confirma presença 2h antes da aula automaticamente" },
  { href: "/aluno/pre-aula",     emoji: "😴", label: "questionário pré-aula",    desc: "sono, energia e dores enviados pro personal antes da sessão" },
  { href: "/aluno/feedback",     emoji: "⭐", label: "feedback semanal",         desc: "aluno avalia a semana e o Cria gera o relatório automático" },
  { href: "/aluno/relatorio",    emoji: "📈", label: "relatório da semana",      desc: "relatório personalizado com IA enviado todo domingo" },
  { href: "/aluno/treino",       emoji: "🏋️", label: "consultar treino e saldo", desc: "aluno vê o treino do dia e o saldo de aulas a qualquer hora" },
  { href: "/aluno/pagamento",    emoji: "💳", label: "lembrete de mensalidade",  desc: "lembrete automático 3 dias antes do vencimento" },
]

export default function AlunoPage() {
  const [hov, setHov] = useState<number | null>(null)

  return (
    <div style={{ minHeight: "100dvh", background: "#FEE9D6", fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif" }}>

      <div style={{ background: "#EB4200", padding: "14px 20px", position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", gap: 14 }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </Link>
        <span style={{ fontSize: 20, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>cria</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>/ aluno</span>
      </div>

      <div style={{ padding: "20px 16px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(28,25,23,0.4)", textTransform: "uppercase", marginBottom: 4 }}>
          conversas do aluno com o Cria
        </div>
        <div style={{ fontSize: 22, fontWeight: 900, color: "#1C1917", letterSpacing: "-0.02em", marginBottom: 16 }}>
          o que o aluno recebe pelo WhatsApp
        </div>

        <Link href="/apresentacao/aluno" style={{ textDecoration: "none", display: "block", marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 16px", borderRadius: 8, background: "#EB4200" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 16 }}>👋</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>apresentação do Cria</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>como o Cria se apresenta no primeiro contato</div>
              </div>
            </div>
            <svg width="12" height="12" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </Link>

        <div style={{ background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 6px rgba(28,25,23,0.07)" }}>
          {FLUXOS.map((f, i) => (
            <Link key={i} href={f.href} style={{ textDecoration: "none" }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            >
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 16px",
                background: hov === i ? "rgba(235,66,0,0.04)" : "#fff",
                borderBottom: i < FLUXOS.length - 1 ? "1px solid rgba(28,25,23,0.07)" : "none",
                transition: "background 0.12s", cursor: "pointer",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, flex: 1, paddingRight: 10 }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{f.emoji}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1C1917", marginBottom: 2 }}>{f.label}</div>
                    <div style={{ fontSize: 11, color: "rgba(28,25,23,0.45)", lineHeight: 1.4 }}>{f.desc}</div>
                  </div>
                </div>
                <svg width="13" height="13" fill="none" stroke={hov === i ? "#EB4200" : "rgba(28,25,23,0.15)"} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
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
