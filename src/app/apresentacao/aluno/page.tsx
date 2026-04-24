"use client"

import Link from "next/link"

function DateSep({ children }: { children: string }) {
  return (
    <div style={{ alignSelf: "center", background: "#D5BFB0", color: "#9C7860", fontSize: 11.5, borderRadius: 8, padding: "4px 10px", margin: "6px 0" }}>
      {children}
    </div>
  )
}
function BotMsg({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start", maxWidth: "82%" }}>
      <div style={{ background: "#fff", borderRadius: "7.5px 7.5px 7.5px 0", padding: "7px 10px 6px", fontSize: 13.5, lineHeight: 1.45, color: "#1C1917", whiteSpace: "pre-wrap" }}>
        {children}
      </div>
    </div>
  )
}
function UserMsg({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-end", maxWidth: "82%" }}>
      <div style={{ background: "#FFDCC9", borderRadius: "7.5px 7.5px 0 7.5px", padding: "7px 10px 6px", fontSize: 13.5, lineHeight: 1.45, color: "#1C1917", whiteSpace: "pre-wrap" }}>
        {children}
      </div>
    </div>
  )
}

export default function ApresentacaoAlunoPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "#FEE9D6", fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif" }}>
      <div style={{ background: "#EB4200", padding: "16px 40px", position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/aluno" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </Link>
        <span style={{ fontSize: 20, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>cria</span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>/ apresentação · aluno</span>
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#EB4200", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>aluno</div>
        <div style={{ fontSize: 28, fontWeight: 900, color: "#1C1917", letterSpacing: "-0.02em", marginBottom: 6 }}>👋 apresentação do Cria</div>
        <div style={{ fontSize: 14, color: "rgba(28,25,23,0.5)", marginBottom: 32, lineHeight: 1.5 }}>
          assim que o aluno entra, o Cria se apresenta e explica como vai funcionar
        </div>

        <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 16px rgba(28,25,23,0.08)" }}>
          <div style={{ background: "#1C1917", padding: "12px 16px" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#EB4200", letterSpacing: "0.06em", textTransform: "uppercase" }}>cria → aluno</span>
          </div>
          <div style={{ background: "#EDE0D4", padding: 12, display: "flex", flexDirection: "column", gap: 4, minHeight: 400 }}>
            <DateSep>hoje</DateSep>
            <BotMsg>{`oi, Paulo! eu sou o Cria, o assistente do seu personal aqui pelo WhatsApp. 👋`}</BotMsg>
            <BotMsg>{`por aqui você consegue:\n\n🗓️ confirmar sua presença na aula\n😴 me contar como você tá antes de cada treino\n⭐ avaliar sua semana e receber seu relatório\n🏋️ consultar o treino do dia e quantas aulas ainda tem\n💳 saber quando sua mensalidade tá prestes a vencer`}</BotMsg>
            <BotMsg>pode me chamar quando precisar. to aqui 24h. 💪</BotMsg>
            <UserMsg>qual meu treino hoje?</UserMsg>
            <BotMsg>{`treino de hoje, Paulo\n\nTreino A · Peito e Tríceps\n\nsupino reto · 4x8-10\ncrucifixo inclinado · 3x12\ntríceps corda · 3x15\ntríceps testa · 3x12`}</BotMsg>
          </div>
        </div>
      </div>
    </div>
  )
}
