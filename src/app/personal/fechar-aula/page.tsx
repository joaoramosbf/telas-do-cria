"use client"

import Link from "next/link"

function DateSep({ children }: { children: string }) {
  return <div style={{ alignSelf: "center", background: "#D5BFB0", color: "#9C7860", fontSize: 11, borderRadius: 8, padding: "3px 9px", margin: "5px 0" }}>{children}</div>
}
function BotMsg({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ alignSelf: "flex-start", maxWidth: "84%" }}>
      <div style={{ background: "#fff", borderRadius: "7.5px 7.5px 7.5px 0", padding: "7px 10px 6px", fontSize: 13, lineHeight: 1.45, color: "#1C1917", whiteSpace: "pre-wrap" }}>{children}</div>
    </div>
  )
}
function UserMsg({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ alignSelf: "flex-end", maxWidth: "84%" }}>
      <div style={{ background: "#FFDCC9", borderRadius: "7.5px 7.5px 0 7.5px", padding: "7px 10px 6px", fontSize: 13, lineHeight: 1.45, color: "#1C1917", whiteSpace: "pre-wrap" }}>{children}</div>
    </div>
  )
}

export default function FecharAulaPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "#EFE5D8", fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif" }}>
      <div style={{ background: "#1C1917", padding: "13px 20px", position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", gap: 14 }}>
        <Link href="/personal" style={{ textDecoration: "none" }}>
          <svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </Link>
        <span style={{ fontSize: 18, fontWeight: 900, color: "#EB4200", letterSpacing: "-0.02em" }}>cria</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>/ fechar aula</span>
      </div>
      <div style={{ padding: "20px 16px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#EB4200", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>personal</div>
        <div style={{ fontSize: 22, fontWeight: 900, color: "#1C1917", letterSpacing: "-0.02em", marginBottom: 4 }}>✅ fechar aula</div>
        <div style={{ fontSize: 13, color: "rgba(28,25,23,0.5)", marginBottom: 20, lineHeight: 1.5 }}>registro completo em menos de 2 minutos, sem app, só WhatsApp</div>
        <div style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(28,25,23,0.08)" }}>
          <div style={{ background: "#1C1917", padding: "10px 14px" }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#EB4200", letterSpacing: "0.06em", textTransform: "uppercase" }}>personal → cria</span>
          </div>
          <div style={{ background: "#EDE0D4", padding: 10, display: "flex", flexDirection: "column", gap: 4 }}>
            <DateSep>hoje</DateSep>
            <UserMsg>Paulo fechou o treino</UserMsg>
            <BotMsg>{`qual treino foi hoje?\n\n1) treino A · peito e tríceps\n2) treino B · costas e bíceps\n3) treino C · pernas\n4) outro`}</BotMsg>
            <UserMsg>1</UserMsg>
            <BotMsg>{`treino A anotado! como foi a aula no geral?\n\n1) excelente, aluno arrasou\n2) boa, dentro do esperado\n3) regular, aluno veio cansado\n4) abaixo, tive que reduzir volume`}</BotMsg>
            <UserMsg>1</UserMsg>
            <BotMsg>{`teve PR ou evolução de carga hoje?\n\n1) sim  2) não`}</BotMsg>
            <UserMsg>supino 80kg, bateu o recorde dele</UserMsg>
            <BotMsg>{`aula do Paulo registrada! ✅\n\ntreino: A · peito e tríceps\navaliação: excelente, aluno arrasou\nPR: supino 80kg 🏆\n\ngerando feedback pro aluno...`}</BotMsg>
          </div>
        </div>
      </div>
    </div>
  )
}
