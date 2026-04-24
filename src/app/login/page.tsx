"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro(false)
    setLoading(true)

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, senha }),
    })

    if (res.ok) {
      router.push("/")
      router.refresh()
    } else {
      setErro(true)
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: "100dvh",
      background: "#1C1917",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 24px",
      fontFamily: "var(--font-sans), 'Figtree', system-ui, sans-serif",
    }}>
      <div style={{ marginBottom: 40, textAlign: "center" }}>
        <div style={{ fontSize: 52, fontWeight: 900, color: "#EB4200", letterSpacing: "-0.04em", lineHeight: 1 }}>
          cria
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 8, fontWeight: 500 }}>
          galeria de telas
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 320, display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          type="text"
          placeholder="login"
          value={login}
          onChange={e => setLogin(e.target.value)}
          autoCapitalize="none"
          autoCorrect="off"
          required
          style={{
            width: "100%",
            padding: "14px 16px",
            borderRadius: 10,
            border: erro ? "1.5px solid rgba(235,66,0,0.6)" : "1.5px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.06)",
            color: "#fff",
            fontSize: 15,
            outline: "none",
            fontFamily: "inherit",
          }}
        />
        <input
          type="password"
          placeholder="senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "14px 16px",
            borderRadius: 10,
            border: erro ? "1.5px solid rgba(235,66,0,0.6)" : "1.5px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.06)",
            color: "#fff",
            fontSize: 15,
            outline: "none",
            fontFamily: "inherit",
          }}
        />

        {erro && (
          <div style={{ fontSize: 13, color: "#EB4200", textAlign: "center", fontWeight: 600 }}>
            login ou senha incorretos
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: 10,
            background: loading ? "rgba(235,66,0,0.5)" : "#EB4200",
            color: "#fff",
            fontWeight: 800,
            fontSize: 15,
            border: "none",
            cursor: loading ? "default" : "pointer",
            fontFamily: "inherit",
            marginTop: 4,
            transition: "background 0.15s",
          }}
        >
          {loading ? "entrando..." : "entrar"}
        </button>
      </form>
    </div>
  )
}
