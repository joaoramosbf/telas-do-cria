"use client"

import { useEffect } from "react"

export function SecurityLayer() {
  useEffect(() => {
    const bloquearContexto = (e: MouseEvent) => e.preventDefault()

    const bloquearTeclado = (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey
      const shift = e.shiftKey

      if (
        e.key === "F12" ||
        (ctrl && e.key.toLowerCase() === "u") ||
        (ctrl && e.key.toLowerCase() === "s") ||
        (ctrl && e.key.toLowerCase() === "a") ||
        (ctrl && e.key.toLowerCase() === "c") ||
        (ctrl && e.key.toLowerCase() === "p") ||
        (ctrl && shift && ["i", "j", "c", "k"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    document.addEventListener("contextmenu", bloquearContexto)
    document.addEventListener("keydown", bloquearTeclado)

    return () => {
      document.removeEventListener("contextmenu", bloquearContexto)
      document.removeEventListener("keydown", bloquearTeclado)
    }
  }, [])

  return null
}
