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
        background: "#111B21",
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

export default function PersonalPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "#F0F2F5", fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif" }}>

      {/* Header */}
      <div style={{
        background: "#111B21",
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
          / lado do personal
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
          conversas do personal com o Cria
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 32,
        }}>

          {/* 1. Fechar aula */}
          <Card id="fechar-aula" label="✅ fechar aula" desc="registro completo em menos de 2 minutos — sem app, só WhatsApp">
            <DateSep>hoje</DateSep>
            <UserMsg>Paulo fechou o treino</UserMsg>
            <BotMsg>{`fechou a aula do Paulo! qual treino foi hoje?\n\n1) treino A · peito e tríceps\n2) treino B · costas e bíceps\n3) treino C · pernas\n4) outro`}</BotMsg>
            <UserMsg>1</UserMsg>
            <BotMsg>{`treino A anotado! como foi a aula no geral?\n\n1) excelente, aluno arrasou\n2) boa, dentro do esperado\n3) regular, aluno veio cansado\n4) abaixo, tive que reduzir volume`}</BotMsg>
            <UserMsg>1</UserMsg>
            <BotMsg>{`teve PR ou evolução de carga hoje?\n\n1) sim  2) não`}</BotMsg>
            <UserMsg>supino 80kg, bateu o recorde dele</UserMsg>
            <BotMsg>{`aula do Paulo registrada! ✅\n\ntreino: A · peito e tríceps\navaliação: excelente, aluno arrasou\nPR: supino 80kg 🏆\n\ngerando feedback pro aluno...`}</BotMsg>
          </Card>

          {/* 2. Briefing pré-aula */}
          <Card id="pre-aula" label="📋 briefing pré-aula" desc="tudo que o personal precisa saber antes de entrar na sala">
            <DateSep>hoje</DateSep>
            <UserMsg>como tá o Paulo antes da aula?</UserMsg>
            <BotMsg>{`pré-aula do Paulo respondido:\n\nsono: bom\nenergia: 8/10\ndor/incômodo: ombro esquerdo\n\nobs ativa: cuidado com ombro esq. — lesão antiga`}</BotMsg>
            <UserMsg>quem confirmou hoje?</UserMsg>
            <BotMsg>{`confirmações de hoje:\n\n✅ Paulo · 14:00\n✅ Maria · 16:00\n⏳ Rodolfo · 18:00 — sem resposta`}</BotMsg>
            <UserMsg>quantas aulas o Paulo fez esse mês?</UserMsg>
            <BotMsg>{`aulas do Paulo em abril:\n\nfeitas: 9\nrestantes: 3\npacote: 12 aulas/mês`}</BotMsg>
          </Card>

          {/* 3. Falta e reposição */}
          <Card id="falta" label="❌ falta e reposição" desc="Cria avisa quando o aluno não aparece e agenda a reposição na hora">
            <DateSep>hoje</DateSep>
            <BotMsg>{`Rodolfo não apareceu pra aula das 18:00. Marco como falta?\n\n1) sim\n2) não`}</BotMsg>
            <UserMsg>1</UserMsg>
            <BotMsg>falta do Rodolfo registrada.</BotMsg>
            <UserMsg>quero marcar reposição pra ele</UserMsg>
            <BotMsg>{`reposição pro Rodolfo.\n\nqual a nova data e horário?\n(ex: sex às 09:00)`}</BotMsg>
            <UserMsg>sábado às 10h</UserMsg>
            <BotMsg>reposição marcada — Rodolfo · sáb às 10:00 ✅</BotMsg>
          </Card>

          {/* 4. Financeiro */}
          <Card id="financeiro" label="💰 controle financeiro" desc="alertas automáticos de vencimento e confirmação de pagamento em segundos">
            <DateSep>hoje</DateSep>
            <BotMsg>{`Mensalidade do Rodolfo vence em 3 dias (R$ 350,00).`}</BotMsg>
            <BotMsg>{`Carlos está com 5 dias de atraso no pagamento.`}</BotMsg>
            <UserMsg>quem não pagou esse mês?</UserMsg>
            <BotMsg>{`pendências de abril:\n\n• Carlos — venceu 19/04 — R$ 400\n• Rodolfo — vence 27/04 — R$ 350\n\ntotal em aberto: R$ 750,00`}</BotMsg>
            <UserMsg>Carlos pagou</UserMsg>
            <BotMsg>pagamento do Carlos confirmado para abril! ✅</BotMsg>
          </Card>

          {/* 5. Cadastrar aluno */}
          <Card id="cadastro" label="➕ cadastrar aluno" desc="cadastro completo sem abrir nenhum app — só respondendo no WhatsApp">
            <DateSep>hoje</DateSep>
            <UserMsg>tenho um aluno novo</UserMsg>
            <BotMsg>{`vamos cadastrar! vou te fazer algumas perguntas — uma de cada vez.\n\nqual o nome completo do aluno?`}</BotMsg>
            <UserMsg>Fernanda Lima</UserMsg>
            <BotMsg>{`qual o objetivo principal da Fernanda?\n\n1) hipertrofia\n2) emagrecimento\n3) força\n4) condicionamento\n5) recomposição corporal`}</BotMsg>
            <UserMsg>2</UserMsg>
            <BotMsg>{`confirma o cadastro da Fernanda?\n\nnome: Fernanda Lima\nobjetivo: emagrecimento\npacote: 12 aulas/mês · R$ 350,00\nfrequência: 3x/semana\n\n1) sim, cadastra\n2) corrigir algo`}</BotMsg>
            <UserMsg>1</UserMsg>
            <BotMsg>{`Fernanda cadastrada! ✅\n\nmandei o link de convite pro WhatsApp dela.`}</BotMsg>
          </Card>

          {/* 6. Relatório semanal */}
          <Card id="relatorio" label="📊 relatório semanal" desc="toda semana o Cria envia o resumo de cada aluno com análise gerada por IA">
            <DateSep>domingo</DateSep>
            <BotMsg>{`Paulo · semana 17\n\nnota do aluno: 8/10\ntreinos feitos: 3 de 3\ncomo se sentiu: bem, mas cansado no último\ndores reportadas: nenhuma\n\nAnálise: semana consistente. frequência perfeita. energia caiu no treino C — pode ajustar volume na quinta. Paulo está evoluindo bem em força de empurrar.`}</BotMsg>
          </Card>

        </div>
      </div>
    </div>
  )
}
