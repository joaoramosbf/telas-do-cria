"use client"

import Link from "next/link"

// ── Componentes de chat ──────────────────────────────────────

function DateSep({ children }: { children: string }) {
  return (
    <div style={{
      alignSelf: "center",
      background: "#D5DEDF",
      color: "#667781",
      fontSize: 11.5,
      borderRadius: 8,
      padding: "4px 10px",
      margin: "6px 0",
    }}>{children}</div>
  )
}

function BotMsg({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start", maxWidth: "82%" }}>
      <div style={{
        background: "#FFFFFF",
        borderRadius: "7.5px 7.5px 7.5px 0",
        padding: "7px 10px 6px",
        fontSize: 13.5,
        lineHeight: 1.45,
        color: "#111B21",
        whiteSpace: "pre-wrap",
      }}>{children}</div>
    </div>
  )
}

function UserMsg({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-end", maxWidth: "82%" }}>
      <div style={{
        background: "#D9FDD3",
        borderRadius: "7.5px 7.5px 0 7.5px",
        padding: "7px 10px 6px",
        fontSize: 13.5,
        lineHeight: 1.45,
        color: "#111B21",
        whiteSpace: "pre-wrap",
      }}>{children}</div>
    </div>
  )
}

function Chat({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "#EFEAE2",
      padding: 12,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      minHeight: 320,
      flex: 1,
    }}>{children}</div>
  )
}

function Card({ id, label, desc, children }: { id: string; label: string; desc: string; children: React.ReactNode }) {
  return (
    <div id={id} style={{
      background: "white",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        background: "#1F2C34",
        padding: "12px 16px",
        fontSize: 12,
        fontWeight: 700,
        color: "#25D366",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}>{label}</div>
      <Chat>{children}</Chat>
      <div style={{
        padding: "10px 16px",
        fontSize: 12,
        color: "#8696A0",
        borderTop: "1px solid #F0F2F5",
      }}>{desc}</div>
    </div>
  )
}

// ── Página ───────────────────────────────────────────────────

export default function AlunoPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "#F0F2F5", fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif" }}>

      {/* Header */}
      <div style={{
        background: "#1F2C34",
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        gap: 20,
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: 22, fontWeight: 900, color: "#25D366", letterSpacing: "-0.02em" }}>cria</span>
        </Link>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
          / lado do aluno
        </span>
      </div>

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "48px 40px" }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: "#8696A0",
          textTransform: "uppercase",
          marginBottom: 24,
        }}>
          conversas do aluno com o Cria
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 32,
        }}>

          {/* 1. Confirmação de presença */}
          <Card id="confirmacao" label="🗓️ confirmação de presença" desc="2h antes da aula o Cria confirma presença automaticamente">
            <DateSep>hoje</DateSep>
            <BotMsg>{`oi Paulo! sua aula é hoje às 14:00. vai conseguir vir?\n\n1) sim, estarei lá\n2) não vou conseguir`}</BotMsg>
            <UserMsg>1</UserMsg>
            <BotMsg>ótimo! te vejo às 14:00. 👍</BotMsg>
          </Card>

          {/* 2. Pré-aula */}
          <Card id="pre-aula" label="😴 questionário pré-aula" desc="o personal chega na aula já sabendo o estado físico do aluno">
            <DateSep>hoje</DateSep>
            <BotMsg>{`oi Paulo! sua aula é em 2 horas. me conta rapidinho:\n\ncomo foi seu sono? manda bom, ok ou ruim.`}</BotMsg>
            <UserMsg>ok</UserMsg>
            <BotMsg>energia hoje de 0 a 10?</BotMsg>
            <UserMsg>7</UserMsg>
            <BotMsg>tem alguma dor ou incômodo muscular?</BotMsg>
            <UserMsg>ombro esquerdo tá doendo um pouco</UserMsg>
            <BotMsg>anotado! seu personal já vai saber antes da aula. boa sessão daqui a pouco 💪</BotMsg>
          </Card>

          {/* 3. Feedback semanal */}
          <Card id="feedback" label="⭐ feedback semanal" desc="todo sábado o aluno avalia a semana — Cria gera o relatório automático">
            <DateSep>sábado</DateSep>
            <BotMsg>{`oi Paulo! como foi sua semana de treinos?\n\nqual nota você dá pra semana? (1 a 10)`}</BotMsg>
            <UserMsg>8</UserMsg>
            <BotMsg>quantos treinos você conseguiu fazer essa semana?</BotMsg>
            <UserMsg>3</UserMsg>
            <BotMsg>como você se sentiu nos treinos?</BotMsg>
            <UserMsg>bem, mas no último tava bem cansado</UserMsg>
            <BotMsg>teve alguma dor ou desconforto durante a semana?</BotMsg>
            <UserMsg>não, nada</UserMsg>
            <BotMsg>valeu, Paulo! seu relatório da semana já tá no caminho 🙌</BotMsg>
          </Card>

          {/* 4. Relatório da semana */}
          <Card id="relatorio" label="📈 relatório pós-semana" desc="relatório personalizado com IA enviado automaticamente todo domingo">
            <DateSep>domingo</DateSep>
            <BotMsg>{`Paulo, aqui está o seu resumo da semana 17! 🎯\n\nvocê treinou 3 de 3 vezes — frequência perfeita.\n\nsua nota da semana foi 8/10 — acima da média das últimas 4 semanas (7,2).\n\no cansaço no último treino é normal — seu corpo tá respondendo ao estímulo. descanse bem hoje e você vai entrar na próxima semana recuperado.\n\ncontinue assim, tá indo muito bem! 💪`}</BotMsg>
          </Card>

          {/* 5. Consultar treino */}
          <Card id="treino" label="🏋️ consultar treino e saldo" desc="o aluno consulta treino e saldo a qualquer hora pelo WhatsApp">
            <DateSep>hoje</DateSep>
            <UserMsg>qual o meu treino hoje?</UserMsg>
            <BotMsg>{`treino de hoje — Paulo\n\nTreino A · Peito e Tríceps\n\nsupino reto · 4x8-10\ncrucifixo inclinado · 3x12\ntríceps corda · 3x15\ntríceps testa · 3x12\n\nfoco: carga progressiva no supino.\nobs: cuidado na amplitude do ombro.`}</BotMsg>
            <UserMsg>quantas aulas tenho esse mês?</UserMsg>
            <BotMsg>{`seu saldo em abril:\n\nfeitas: 9\nrestantes: 3\npacote: 12 aulas/mês`}</BotMsg>
          </Card>

          {/* 6. Mensalidade */}
          <Card id="pagamento" label="💳 lembrete de mensalidade" desc="lembrete automático 3 dias antes — sem precisar cobrar na mão">
            <DateSep>hoje</DateSep>
            <BotMsg>{`oi Paulo! só passando pra lembrar que sua mensalidade de R$ 350,00 vence em 3 dias.\n\ncombina o pagamento com seu personal quando puder.`}</BotMsg>
            <UserMsg>qual meu status de pagamento?</UserMsg>
            <BotMsg>{`seu pagamento em abril:\n\nvalor: R$ 350,00\nvencimento: dia 27\nstatus: em aberto\n\nqualquer dúvida, fala com seu personal.`}</BotMsg>
          </Card>

        </div>
      </div>
    </div>
  )
}
