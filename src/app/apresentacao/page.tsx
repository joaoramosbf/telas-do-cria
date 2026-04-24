"use client"

import Link from "next/link"

const PERSONAL_FEATURES = [
  { icon: "✅", label: "fechar aula", desc: "registro em 2 minutos pelo WhatsApp" },
  { icon: "📋", label: "briefing pré-aula", desc: "sono, energia e dores de cada aluno antes de entrar na sala" },
  { icon: "❌", label: "falta e reposição", desc: "alerta automático e agendamento imediato" },
  { icon: "💰", label: "controle financeiro", desc: "vencimentos, atrasos e confirmações de pagamento" },
  { icon: "➕", label: "cadastrar aluno", desc: "cadastro completo sem abrir nenhum app" },
  { icon: "📊", label: "relatório semanal", desc: "análise por IA de cada aluno todo domingo" },
]

const ALUNO_FEATURES = [
  { icon: "🗓️", label: "confirmação de presença", desc: "Cria confirma automaticamente 2h antes" },
  { icon: "😴", label: "questionário pré-aula", desc: "estado físico chega pro personal antes da sessão" },
  { icon: "⭐", label: "feedback semanal", desc: "avalia a semana — relatório gerado automaticamente" },
  { icon: "📈", label: "relatório da semana", desc: "análise personalizada com IA todo domingo" },
  { icon: "🏋️", label: "treino e saldo", desc: "consulta treino do dia e aulas restantes a qualquer hora" },
  { icon: "💳", label: "lembrete de mensalidade", desc: "aviso 3 dias antes — sem precisar cobrar manualmente" },
]

export default function ApresentacaoPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif" }}>

      {/* Nav */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(28,25,23,0.95)", backdropFilter: "blur(12px)",
        padding: "14px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 600, letterSpacing: "0.05em" }}>voltar</span>
        </Link>
        <span style={{ fontSize: 18, fontWeight: 900, color: "#EB4200", letterSpacing: "-0.02em" }}>cria</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontWeight: 600 }}>apresentação</span>
      </div>

      {/* 1. Hero */}
      <section style={{
        minHeight: "100dvh", background: "#1C1917",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "120px 40px 80px", textAlign: "center",
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#EB4200", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>
          apresentando
        </div>
        <div style={{ fontSize: "clamp(80px, 16vw, 160px)", fontWeight: 900, color: "#EB4200", letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 32 }}>
          cria
        </div>
        <div style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em", marginBottom: 16, maxWidth: 600 }}>
          o agente de IA pra personal trainers
        </div>
        <div style={{ fontSize: "clamp(14px, 2vw, 20px)", color: "rgba(255,255,255,0.45)", marginBottom: 48, maxWidth: 480, lineHeight: 1.6 }}>
          pelo WhatsApp. sem app novo. automático.
        </div>
        <div style={{
          display: "inline-block",
          background: "#EB4200",
          color: "#fff",
          fontSize: "clamp(22px, 4vw, 36px)",
          fontWeight: 900,
          padding: "16px 36px",
          borderRadius: 12,
          letterSpacing: "-0.02em",
        }}>
          R$ 97/mês
        </div>
      </section>

      {/* 2. O Problema */}
      <section style={{
        minHeight: "100dvh", background: "#FEE9D6",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "100px 40px",
      }}>
        <div style={{ maxWidth: 800, width: "100%", margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#EB4200", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
            o problema
          </div>
          <div style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#1C1917", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 56 }}>
            você trabalha muito além da hora paga
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              "confirmar presença de cada aluno todo dia no WhatsApp",
              "cobrar mensalidade um por um — e ainda passar constrangimento",
              "responder 'qual meu treino hoje?' às 6h da manhã",
              "anotar avaliação de aula no caderno ou na memória",
              "ligar pra avisar quando aluno falta e tentar remarcar",
              "montar relatório semanal de cada aluno manualmente",
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 20,
                padding: "20px 0",
                borderBottom: i < 5 ? "1px solid rgba(28,25,23,0.08)" : "none",
              }}>
                <span style={{ fontSize: 20, color: "#EB4200", flexShrink: 0, marginTop: 2 }}>—</span>
                <span style={{ fontSize: "clamp(15px, 2vw, 20px)", color: "#1C1917", lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. A Solução */}
      <section style={{
        minHeight: "100dvh", background: "#EB4200",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "100px 40px", textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
            a solução
          </div>
          <div style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 32 }}>
            o Cria faz tudo isso por você
          </div>
          <div style={{ fontSize: "clamp(16px, 2.5vw, 24px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: 56 }}>
            sem precisar abrir nenhum app novo.<br />
            sem treinamento. sem configuração complicada.<br />
            tudo pelo WhatsApp que você já usa.
          </div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["automático", "WhatsApp", "IA", "sem app novo"].map(tag => (
              <div key={tag} style={{
                padding: "10px 20px", borderRadius: 100,
                background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)",
                fontSize: 14, fontWeight: 700, color: "#fff",
              }}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Funcionalidades */}
      <section style={{
        background: "#EFE5D8",
        padding: "100px 40px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#EB4200", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
            o que o Cria faz
          </div>
          <div style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1C1917", letterSpacing: "-0.03em", marginBottom: 56 }}>
            para o personal e para o aluno
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            {/* Personal */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(28,25,23,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
                lado do personal
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {PERSONAL_FEATURES.map((f, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 16,
                    padding: "18px 0",
                    borderBottom: i < PERSONAL_FEATURES.length - 1 ? "1px solid rgba(28,25,23,0.08)" : "none",
                  }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{f.icon}</span>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#1C1917", marginBottom: 3 }}>{f.label}</div>
                      <div style={{ fontSize: 13, color: "rgba(28,25,23,0.5)", lineHeight: 1.4 }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aluno */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(28,25,23,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
                lado do aluno
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {ALUNO_FEATURES.map((f, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 16,
                    padding: "18px 0",
                    borderBottom: i < ALUNO_FEATURES.length - 1 ? "1px solid rgba(28,25,23,0.08)" : "none",
                  }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{f.icon}</span>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#1C1917", marginBottom: 3 }}>{f.label}</div>
                      <div style={{ fontSize: 13, color: "rgba(28,25,23,0.5)", lineHeight: 1.4 }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Como funciona */}
      <section style={{
        minHeight: "80dvh", background: "#1C1917",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "100px 40px",
      }}>
        <div style={{ maxWidth: 900, width: "100%", margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#EB4200", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
            como funciona
          </div>
          <div style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", marginBottom: 56 }}>
            três passos e o Cria começa a trabalhar
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
            {[
              { n: "01", title: "conecta", desc: "você conecta seu WhatsApp Business ao Cria em menos de 5 minutos" },
              { n: "02", title: "configura", desc: "cadastra seus alunos e o Cria aprende tudo que precisa saber" },
              { n: "03", title: "deixa rolar", desc: "o Cria cuida das confirmações, cobranças, registros e relatórios automaticamente" },
            ].map(step => (
              <div key={step.n} style={{ padding: "28px", background: "rgba(255,255,255,0.04)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: "#EB4200", marginBottom: 16, letterSpacing: "-0.02em" }}>{step.n}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF", marginBottom: 10 }}>{step.title}</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Preço */}
      <section style={{
        minHeight: "80dvh", background: "#FEE9D6",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "100px 40px", textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#EB4200", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
            investimento
          </div>
          <div style={{ fontSize: "clamp(64px, 12vw, 112px)", fontWeight: 900, color: "#1C1917", letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 12 }}>
            R$97
          </div>
          <div style={{ fontSize: 20, color: "rgba(28,25,23,0.45)", marginBottom: 48, fontWeight: 600 }}>por mês</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left", marginBottom: 48 }}>
            {[
              "todas as funcionalidades do personal",
              "todas as funcionalidades do aluno",
              "relatórios semanais com IA incluídos",
              "suporte pelo WhatsApp",
              "sem contrato de fidelidade",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#EB4200", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="10" height="10" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <span style={{ fontSize: 16, color: "#1C1917" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div style={{
        background: "#1C1917",
        padding: "24px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderTop: "1px solid rgba(235,66,0,0.2)",
      }}>
        <span style={{ fontSize: 20, fontWeight: 900, color: "#EB4200", letterSpacing: "-0.02em" }}>cria</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>agente de IA pra personal trainers</span>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>ver as telas</span>
        </Link>
      </div>

    </div>
  )
}
