"use client"

import { useEffect, useState } from "react"
import { Bot, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Inicio", href: "#home" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Beneficios", href: "#benefits" },
  { label: "Precios", href: "#pricing" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
        <div
            className={cn(
                "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6",
                scrolled ? "glass-strong shadow-lg shadow-black/20" : "glass",
            )}
        >
          <a href="#home" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/40">
            <Bot className="size-5" aria-hidden="true" />
          </span>
            <span className="text-lg font-semibold tracking-tight">CogniBot</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            {NAV.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
                href="#contact"
                className="hidden rounded-xl bg-brand px-5 py-2 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand/40 sm:inline-block"
            >
              Contactanos
            </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-white/5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

        {open && (
            <div className="glass-strong mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden">
              <nav className="flex flex-col gap-1" aria-label="Móvil">
                {NAV.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                ))}
                <a
                    href="#login"
                    onClick={() => setOpen(false)}
                    className="mt-1 rounded-lg bg-brand px-3 py-2.5 text-center text-sm font-medium text-brand-foreground"
                >
                  Iniciar sesión
                </a>
              </nav>
            </div>
        )}
      </header>
  )
}
