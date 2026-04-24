import { NextResponse } from "next/server"

const LOGIN = "admin"
const SENHA = "Aqueceapp2025@"

export async function POST(request: Request) {
  const { login, senha } = await request.json()

  if (login === LOGIN && senha === SENHA) {
    const res = NextResponse.json({ ok: true })
    res.cookies.set("cria-auth", "1", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    })
    return res
  }

  return NextResponse.json({ ok: false }, { status: 401 })
}
