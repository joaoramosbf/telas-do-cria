"use client"

import Link from "next/link"
import { useState } from "react"

type Tela = { href: string; label: string; desc: string }

const PERSONAL: Tela[] = [
  { href: "/personal/fechar-aula",  label: "fechar aula",           desc: "registra treino, avaliação, PR e exercícios em menos de 2 minutos" },
  { href: "/personal/pre-aula",     label: "briefing pré-aula",     desc: "sono, energia, dores e confirmações de todos os alunos do dia" },
  { href: "/personal/falta",        label: "falta e reposição",     desc: "Cria avisa quando aluno não aparece e agenda reposição na hora" },
  { href: "/personal/financeiro",   label: "controle financeiro",   desc: "alertas de vencimento, quem pagou, quem está devendo" },
  { href: "/personal/cadastro",     label: "cadastrar aluno",       desc: "cadastro completo passo a passo só pelo WhatsApp" },
  { href: "/personal/relatorio",    label: "relatório semanal",     desc: "resumo de cada aluno com análise de IA todo domingo" },
]

const ALUNO: Tela[] = [
  { href: "/aluno/confirmacao",   label: "confirmação de presença",  desc: "Cria confirma presença 2h antes da aula automaticamente" },
  { href: "/aluno/pre-aula",      label: "questionário pré-aula",    desc: "sono, energia e dores enviados pro personal antes da sessão" },
  { href: "/aluno/feedback",      label: "feedback semanal",         desc: "aluno avalia a semana — Cria gera o relatório automático" },
  { href: "/aluno/relatorio",     label: "relatório da semana",      desc: "relatório personalizado com IA enviado todo domingo" },
  { href: "/aluno/treino",        label: "consultar treino e saldo", desc: "aluno vê o treino do dia e o saldo de aulas a qualquer hora" },
  { href: "/aluno/pagamento",     label: "lembrete de mensalidade",  desc: "lembrete automático 3 dias antes do vencimento" },
]

export default function Home() {
  const [hovP, setHovP] = useState<number | null>(null)
  const [hovA, setHovA] = useState<number | null>(null)

  return (
    <div style={{
      minHeight: "100dvh",
      fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "auto 1fr auto",
      background: "#FEE9D6",
    }}>

      {/* Topbar esquerda — Personal */}
      <div style={{
        background: "#1C1917",
        padding: "20px 40px",
        display: "flex", flexDirection: "column", gap: 4,
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
          PERSONAL
        </span>
        <span style={{ fontSize: 22, fontWeight: 900, color: "#EB4200", letterSpacing: "-0.02em" }}>
          cria
        </span>
      </div>

      {/* Topbar direita — Aluno */}
      <div style={{
        background: "#EB4200",
        padding: "20px 40px",
        display: "flex", flexDirection: "column", gap: 4,
        borderLeft: "1px solid rgba(255,255,255,0.1)",
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>
          ALUNO
        </span>
        <span style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
          cria
        </span>
      </div>

      {/* Lista — Personal */}
      <div style={{ background: "#EFE5D8", padding: "32px 40px", display: "flex", flexDirection: "column", gap: 2 }}>
        {PERSONAL.map((t, i) => (
          <Link key={i} href={t.href} style={{ textDecoration: "none" }}
            onMouseEnter={() => setHovP(i)}
            onMouseLeave={() => setHovP(null)}
          >
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 16px", borderRadius: 6,
              background: hovP === i ? "rgba(235,66,0,0.06)" : "transparent",
              transition: "background 0.12s",
              cursor: "pointer",
              borderBottom: i < PERSONAL.length - 1 ? "1px solid rgba(28,25,23,0.06)" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: hovP === i ? "#EB4200" : "rgba(28,25,23,0.2)", width: 20, flexShrink: 0, transition: "color 0.12s" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1C1917", margin: "0 0 2px" }}>{t.label}</p>
                  <p style={{ fontSize: 12, color: "rgba(28,25,23,0.4)", margin: 0 }}>{t.desc}</p>
                </div>
              </div>
              <svg width="14" height="14" fill="none" stroke={hovP === i ? "#EB4200" : "rgba(28,25,23,0.15)"} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, transition: "stroke 0.12s" }}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Lista — Aluno */}
      <div style={{ background: "#FEE9D6", padding: "32px 40px", display: "flex", flexDirection: "column", gap: 2, borderLeft: "1px solid rgba(28,25,23,0.06)" }}>
        {ALUNO.map((t, i) => (
          <Link key={i} href={t.href} style={{ textDecoration: "none" }}
            onMouseEnter={() => setHovA(i)}
            onMouseLeave={() => setHovA(null)}
          >
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 16px", borderRadius: 6,
              background: hovA === i ? "rgba(235,66,0,0.08)" : "transparent",
              transition: "background 0.12s",
              cursor: "pointer",
              borderBottom: i < ALUNO.length - 1 ? "1px solid rgba(28,25,23,0.06)" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: hovA === i ? "#EB4200" : "rgba(28,25,23,0.2)", width: 20, flexShrink: 0, transition: "color 0.12s" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1C1917", margin: "0 0 2px" }}>{t.label}</p>
                  <p style={{ fontSize: 12, color: "rgba(28,25,23,0.4)", margin: 0 }}>{t.desc}</p>
                </div>
              </div>
              <svg width="14" height="14" fill="none" stroke={hovA === i ? "#EB4200" : "rgba(28,25,23,0.15)"} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, transition: "stroke 0.12s" }}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Rodapé */}
      <div style={{
        gridColumn: "1 / -1",
        background: "#1C1917",
        borderTop: "1px solid rgba(235,66,0,0.2)",
        padding: "16px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20,
      }}>
        <Link href="/apresentacao" style={{ textDecoration: "none" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 16px", borderRadius: 8,
            background: "rgba(235,66,0,0.18)", border: "1px solid rgba(235,66,0,0.4)",
            cursor: "pointer",
          }}>
            <span style={{ fontSize: 13 }}>👋</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#EB4200" }}>apresentação do Cria</span>
            <svg width="12" height="12" fill="none" stroke="#EB4200" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </Link>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
          cria · agente de IA pra personal trainers · R$ 97/mês
        </span>
      </div>

    </div>
  )
}
