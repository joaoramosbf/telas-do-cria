"use client"

import Link from "next/link"
import { useState } from "react"

const FLUXOS = [
  { href: "/personal/fechar-aula",  emoji: "✅", label: "fechar aula",           desc: "registro completo em menos de 2 minutos — sem app, só WhatsApp" },
  { href: "/personal/pre-aula",     emoji: "📋", label: "briefing pré-aula",     desc: "tudo que o personal precisa saber antes de entrar na sala" },
  { href: "/personal/falta",        emoji: "❌", label: "falta e reposição",     desc: "Cria avisa quando o aluno não aparece e agenda a reposição na hora" },
  { href: "/personal/financeiro",   emoji: "💰", label: "controle financeiro",   desc: "alertas automáticos de vencimento e confirmação de pagamento" },
  { href: "/personal/cadastro",     emoji: "➕", label: "cadastrar aluno",       desc: "cadastro completo sem abrir nenhum app — só respondendo no WhatsApp" },
  { href: "/personal/relatorio",    emoji: "📊", label: "relatório semanal",     desc: "toda semana o Cria envia o resumo de cada aluno com análise de IA" },
]

export default function PersonalPage() {
  const [hov, setHov] = useState<number | null>(null)

  return (
    <div style={{ minHeight: "100dvh", background: "#EFE5D8", fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif" }}>

      {/* Header */}
      <div style={{
        background: "#1C1917", padding: "20px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </Link>
          <span style={{ fontSize: 22, fontWeight: 900, color: "#EB4200", letterSpacing: "-0.02em" }}>cria</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>/ personal</span>
        </div>
        <Link href="/apresentacao" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: 12, color: "rgba(235,66,0,0.7)", fontWeight: 600 }}>ver apresentação</span>
        </Link>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(28,25,23,0.4)", textTransform: "uppercase", marginBottom: 8 }}>
          conversas do personal com o Cria
        </div>
        <div style={{ fontSize: 28, fontWeight: 900, color: "#1C1917", letterSpacing: "-0.02em", marginBottom: 32 }}>
          o que o personal faz pelo WhatsApp
        </div>

        {/* Apresentação */}
        <Link href="/apresentacao/personal" style={{ textDecoration: "none", display: "block", marginBottom: 12 }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "16px 24px", borderRadius: 10,
            background: "#1C1917", cursor: "pointer",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 18 }}>👋</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#EB4200" }}>apresentação do Cria</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>como o Cria se apresenta pro personal no primeiro contato</div>
              </div>
            </div>
            <svg width="14" height="14" fill="none" stroke="#EB4200" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </Link>

        {/* Lista unificada */}
        <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 8px rgba(28,25,23,0.07)" }}>
          {FLUXOS.map((f, i) => (
            <Link key={i} href={f.href} style={{ textDecoration: "none" }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            >
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "18px 24px",
                background: hov === i ? "rgba(235,66,0,0.04)" : "#fff",
                borderBottom: i < FLUXOS.length - 1 ? "1px solid rgba(28,25,23,0.07)" : "none",
                transition: "background 0.12s", cursor: "pointer",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: hov === i ? "#EB4200" : "rgba(28,25,23,0.2)", width: 20, flexShrink: 0, transition: "color 0.12s" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{f.emoji}</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#1C1917", marginBottom: 2 }}>{f.label}</div>
                    <div style={{ fontSize: 12, color: "rgba(28,25,23,0.45)", lineHeight: 1.4 }}>{f.desc}</div>
                  </div>
                </div>
                <svg width="14" height="14" fill="none" stroke={hov === i ? "#EB4200" : "rgba(28,25,23,0.15)"} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, transition: "stroke 0.12s" }}>
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
