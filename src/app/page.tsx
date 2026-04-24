"use client"

import Link from "next/link"
import { useState } from "react"

type Tela = { href: string; label: string; desc: string }

const PERSONAL: Tela[] = [
  { href: "/personal#fechar-aula",    label: "fechar aula",              desc: "registra treino, avaliação, PR e exercícios em menos de 2 minutos" },
  { href: "/personal#pre-aula",       label: "briefing pré-aula",        desc: "sono, energia, dores e confirmações de todos os alunos do dia" },
  { href: "/personal#falta",          label: "falta e reposição",        desc: "Cria avisa quando aluno não aparece e agenda reposição na hora" },
  { href: "/personal#financeiro",     label: "controle financeiro",      desc: "alertas de vencimento, quem pagou, quem está devendo" },
  { href: "/personal#cadastro",       label: "cadastrar aluno",          desc: "cadastro completo passo a passo só pelo WhatsApp" },
  { href: "/personal#relatorio",      label: "relatório semanal",        desc: "resumo de cada aluno com análise de IA todo domingo" },
]

const ALUNO: Tela[] = [
  { href: "/aluno#confirmacao",  label: "confirmação de presença",  desc: "Cria confirma presença 2h antes da aula automaticamente" },
  { href: "/aluno#pre-aula",     label: "questionário pré-aula",    desc: "sono, energia e dores enviados pro personal antes da sessão" },
  { href: "/aluno#feedback",     label: "feedback semanal",         desc: "aluno avalia a semana — Cria gera o relatório automático" },
  { href: "/aluno#relatorio",    label: "relatório da semana",      desc: "relatório personalizado com IA enviado todo domingo" },
  { href: "/aluno#treino",       label: "consultar treino e saldo", desc: "aluno vê o treino do dia e o saldo de aulas a qualquer hora" },
  { href: "/aluno#pagamento",    label: "lembrete de mensalidade",  desc: "lembrete automático 3 dias antes do vencimento" },
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
      background: "#F0F2F5",
    }}>

      {/* Topbar esquerda — Personal */}
      <div style={{
        background: "#111B21",
        padding: "20px 40px",
        display: "flex", flexDirection: "column", gap: 4,
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
          PERSONAL
        </span>
        <span style={{ fontSize: 22, fontWeight: 900, color: "#25D366", letterSpacing: "-0.02em" }}>
          cria
        </span>
      </div>

      {/* Topbar direita — Aluno */}
      <div style={{
        background: "#1F2C34",
        padding: "20px 40px",
        display: "flex", flexDirection: "column", gap: 4,
        borderLeft: "1px solid rgba(255,255,255,0.06)",
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
          ALUNO
        </span>
        <span style={{ fontSize: 22, fontWeight: 900, color: "#25D366", letterSpacing: "-0.02em" }}>
          cria
        </span>
      </div>

      {/* Lista — Personal */}
      <div style={{ background: "#1C2631", padding: "32px 40px", display: "flex", flexDirection: "column", gap: 4 }}>
        {PERSONAL.map((t, i) => (
          <Link key={i} href={t.href} style={{ textDecoration: "none" }}>
            <div
              onMouseEnter={() => setHovP(i)}
              onMouseLeave={() => setHovP(null)}
              style={{
                padding: "14px 16px",
                borderRadius: 8,
                cursor: "pointer",
                background: hovP === i ? "rgba(37,211,102,0.08)" : "transparent",
                transition: "background 0.12s",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 600, color: hovP === i ? "#25D366" : "#E9EDEF", marginBottom: 3 }}>
                {t.label}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.4 }}>
                {t.desc}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Lista — Aluno */}
      <div style={{ background: "#0D1B22", padding: "32px 40px", display: "flex", flexDirection: "column", gap: 4, borderLeft: "1px solid rgba(255,255,255,0.04)" }}>
        {ALUNO.map((t, i) => (
          <Link key={i} href={t.href} style={{ textDecoration: "none" }}>
            <div
              onMouseEnter={() => setHovA(i)}
              onMouseLeave={() => setHovA(null)}
              style={{
                padding: "14px 16px",
                borderRadius: 8,
                cursor: "pointer",
                background: hovA === i ? "rgba(37,211,102,0.08)" : "transparent",
                transition: "background 0.12s",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 600, color: hovA === i ? "#25D366" : "#E9EDEF", marginBottom: 3 }}>
                {t.label}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.4 }}>
                {t.desc}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Rodapé */}
      <div style={{
        gridColumn: "1 / -1",
        background: "#111B21",
        padding: "16px 40px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
          cria · agente de IA pra personal trainers · R$ 97/mês
        </span>
      </div>

    </div>
  )
}
