"use client"

import Link from "next/link"
import { useState } from "react"

type Tela = { href: string; label: string; desc: string }

const PERSONAL: Tela[] = [
  { href: "/personal/fechar-aula",  label: "fechar aula",           desc: "registro completo em menos de 2 minutos, sem app, só WhatsApp" },
  { href: "/personal/pre-aula",     label: "briefing pré-aula",     desc: "sono, energia, dores e confirmações de todos os alunos do dia" },
  { href: "/personal/falta",        label: "falta e reposição",     desc: "Cria avisa quando aluno não aparece e agenda reposição na hora" },
  { href: "/personal/financeiro",   label: "controle financeiro",   desc: "alertas de vencimento, quem pagou, quem está devendo" },
  { href: "/personal/cadastro",     label: "cadastrar aluno",       desc: "cadastro completo passo a passo só pelo WhatsApp" },
  { href: "/personal/relatorio",    label: "relatório semanal",     desc: "resumo de cada aluno com análise de IA todo domingo" },
]

const ALUNO: Tela[] = [
  { href: "/aluno/confirmacao",   label: "confirmação de presença",  desc: "Cria confirma presença 2h antes da aula automaticamente" },
  { href: "/aluno/pre-aula",      label: "questionário pré-aula",    desc: "sono, energia e dores enviados pro personal antes da sessão" },
  { href: "/aluno/feedback",      label: "feedback semanal",         desc: "aluno avalia a semana e o Cria gera o relatório automático" },
  { href: "/aluno/relatorio",     label: "relatório da semana",      desc: "relatório personalizado com IA enviado todo domingo" },
  { href: "/aluno/treino",        label: "consultar treino e saldo", desc: "aluno vê o treino do dia e o saldo de aulas a qualquer hora" },
  { href: "/aluno/pagamento",     label: "lembrete de mensalidade",  desc: "lembrete automático 3 dias antes do vencimento" },
]

function ListItem({ href, label, desc, accent }: { href: string; label: string; desc: string; accent: boolean }) {
  const [hov, setHov] = useState(false)
  return (
    <Link href={href} style={{ textDecoration: "none" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 16px",
        background: hov ? "rgba(235,66,0,0.06)" : "transparent",
        transition: "background 0.12s", cursor: "pointer",
      }}>
        <div style={{ flex: 1, paddingRight: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#1C1917", marginBottom: 2 }}>{label}</div>
          <div style={{ fontSize: 12, color: "rgba(28,25,23,0.45)", lineHeight: 1.4 }}>{desc}</div>
        </div>
        <svg width="14" height="14" fill="none" stroke={hov ? "#EB4200" : "rgba(28,25,23,0.2)"} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div style={{ minHeight: "100dvh", fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif", display: "flex", flexDirection: "column", background: "#EFE5D8" }}>

      {/* Header */}
      <div style={{ background: "#1C1917", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 24, fontWeight: 900, color: "#EB4200", letterSpacing: "-0.02em" }}>cria</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 500, letterSpacing: "0.05em" }}>galeria de telas</span>
      </div>

      {/* Bloco Personal */}
      <div>
        <div style={{ background: "#1C1917", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em" }}>PERSONAL</span>
        </div>
        <div style={{ background: "#EFE5D8" }}>
          <Link href="/apresentacao/personal" style={{ textDecoration: "none", display: "block", padding: "10px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", borderRadius: 8, background: "#1C1917" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 14 }}>👋</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#EB4200" }}>apresentação do Cria</span>
              </div>
              <svg width="12" height="12" fill="none" stroke="#EB4200" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </Link>
          <div style={{ background: "#fff", marginBottom: 12, marginLeft: 16, marginRight: 16, borderRadius: 10, overflow: "hidden" }}>
            {PERSONAL.map((t, i) => (
              <div key={i} style={{ borderBottom: i < PERSONAL.length - 1 ? "1px solid rgba(28,25,23,0.07)" : "none" }}>
                <ListItem href={t.href} label={t.label} desc={t.desc} accent={false} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bloco Aluno */}
      <div>
        <div style={{ background: "#EB4200", padding: "10px 20px" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em" }}>ALUNO</span>
        </div>
        <div style={{ background: "#FEE9D6" }}>
          <Link href="/apresentacao/aluno" style={{ textDecoration: "none", display: "block", padding: "10px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", borderRadius: 8, background: "#EB4200" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 14 }}>👋</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>apresentação do Cria</span>
              </div>
              <svg width="12" height="12" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </Link>
          <div style={{ background: "#fff", marginBottom: 12, marginLeft: 16, marginRight: 16, borderRadius: 10, overflow: "hidden" }}>
            {ALUNO.map((t, i) => (
              <div key={i} style={{ borderBottom: i < ALUNO.length - 1 ? "1px solid rgba(28,25,23,0.07)" : "none" }}>
                <ListItem href={t.href} label={t.label} desc={t.desc} accent={true} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div style={{ background: "#1C1917", padding: "16px 20px", marginTop: "auto", borderTop: "1px solid rgba(235,66,0,0.15)" }}>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>cria · agente de IA pra personal trainers · R$ 97/mês</span>
      </div>

    </div>
  )
}
