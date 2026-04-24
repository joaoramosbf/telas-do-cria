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

export default function FinanceiroPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "#EFE5D8", fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif" }}>
      <div style={{ background: "#1C1917", padding: "16px 40px", position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/personal" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </Link>
        <span style={{ fontSize: 20, fontWeight: 900, color: "#EB4200", letterSpacing: "-0.02em" }}>cria</span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>/ controle financeiro</span>
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#EB4200", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>personal</div>
        <div style={{ fontSize: 28, fontWeight: 900, color: "#1C1917", letterSpacing: "-0.02em", marginBottom: 6 }}>💰 controle financeiro</div>
        <div style={{ fontSize: 14, color: "rgba(28,25,23,0.5)", marginBottom: 32, lineHeight: 1.5 }}>
          alertas automáticos de vencimento e confirmação de pagamento em segundos
        </div>

        <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 16px rgba(28,25,23,0.08)" }}>
          <div style={{ background: "#1C1917", padding: "12px 16px" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#EB4200", letterSpacing: "0.06em", textTransform: "uppercase" }}>personal → cria</span>
          </div>
          <div style={{ background: "#EDE0D4", padding: 12, display: "flex", flexDirection: "column", gap: 4, minHeight: 300 }}>
            <DateSep>hoje</DateSep>
            <BotMsg>{`Mensalidade do Rodolfo vence em 3 dias (R$ 350,00).`}</BotMsg>
            <BotMsg>{`Carlos está com 5 dias de atraso no pagamento.`}</BotMsg>
            <UserMsg>quem não pagou esse mês?</UserMsg>
            <BotMsg>{`pendências de abril:\n\n• Carlos: venceu 19/04, R$ 400\n• Rodolfo: vence 27/04, R$ 350\n\ntotal em aberto: R$ 750,00`}</BotMsg>
            <UserMsg>Carlos pagou</UserMsg>
            <BotMsg>pagamento do Carlos confirmado para abril! ✅</BotMsg>
          </div>
        </div>
      </div>
    </div>
  )
}
