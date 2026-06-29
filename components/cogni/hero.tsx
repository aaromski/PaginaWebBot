"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Minus, Send, Sparkles, X } from "lucide-react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offsetY, setOffsetY] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [mensajeActual, setMensajeActual] = useState(0);
  const conversacion = [
    { sender: "user", text: "Hola, ¿tienen pizzas disponibles?" },
    { sender: "bot", text: "¡Hola! Sí, tenemos pepperoni y hawaiana. ¿Cuál deseas?" },
    { sender: "user", text: "Una pepperoni, por favor." },
    { sender: "bot", text: "Excelente. El total son 12 USD. ¿Confirmas tu pedido?" },
  ];

  const [mensajesVisibles, setMensajesVisibles] = useState<typeof conversacion>([]);

  // Scroll parallax
  useEffect(() => {
    if (mensajesVisibles.length < conversacion.length) {
      const timer = setTimeout(() => {
        setMensajesVisibles([...mensajesVisibles, conversacion[mensajesVisibles.length]]);
      }, 2000); // 2 segundos de pausa entre mensajes
      return () => clearTimeout(timer);
    } else {
      // Reiniciar la conversación después de un tiempo
      const resetTimer = setTimeout(() => setMensajesVisibles([]), 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [mensajesVisibles]);

  // Mouse parallax on the mockup
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -8, y: px * 10 })
  }

  return (
    <section id="home" ref={sectionRef} className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* ambient parallax glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 -z-10 size-[34rem] rounded-full bg-brand/15 blur-3xl"
        style={{ transform: `translateY(${offsetY * 0.6}px)` }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
            <Sparkles className="size-3.5" aria-hidden="true" />
            IA conversacional a medida
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Automatiza tus ventas y pedidos.{" "}
            <span className="bg-gradient-to-r from-brand to-chart-2 bg-clip-text text-transparent">
              Asistentes con IA a medida para negocios, tiendas y comercios digitales.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Agentes inteligentes que toman pedidos, consultan tu inventario y validan pagos automáticamente 24/7.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-xl shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand/45"
            >
              Obtener tu consulta gratuita
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Ver cómo funciona
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { v: "24/7", l: "Ventas automatizadas" }, // Antes: Disponibilidad total
              { v: "100%", l: "Pedidos organizados" }, // Antes: Respuestas más rápidas
              { v: "Cero", l: "Errores en cálculos" },  // Refleja tu manejo de tasa BCV
            ].map((s) => (
                <div key={s.l}>
                  <dt className="text-2xl font-bold text-brand">{s.v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
                </div>
            ))}
          </dl>
        </div>

        {/* Chatbot mockup with parallax */}
        <div
          className="relative [perspective:1200px]"
          style={{ transform: `translateY(${offsetY}px)` }}
          onMouseMove={onMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        >
          <Image
            src="/images/neural-network.png"
            alt=""
            aria-hidden="true"
            width={720}
            height={720}
            className="pointer-events-none absolute inset-0 -z-10 size-full scale-110 rounded-[2rem] object-cover opacity-50"
            priority
          />
          <div
            className="glass-strong mx-auto w-full max-w-sm rounded-2xl p-3 shadow-2xl shadow-black/40 transition-transform duration-200 ease-out animate-float-slow"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            {/* window bar */}
            <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-md bg-brand/20 text-brand">
                  <Sparkles className="size-3.5" />
                </span>
                <span className="text-sm font-medium">Chatbot</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Minus className="size-3.5" />
                <X className="size-3.5" />
              </div>
            </div>

            {/* Mensajes - Estilo Chat */}
            <div className="flex flex-col gap-4 px-4 py-6 h-64 overflow-y-auto">
              {mensajesVisibles.map((m, i) => (
                  <div
                      key={i}
                      className={`max-w-[85%] text-sm px-4 py-2.5 rounded-2xl ${
                          m.sender === "user"
                              ? "ml-auto bg-blue-200 text-slate-800 rounded-tr-sm" // Usuario: fondo claro, texto oscuro
                              : "mr-auto text-slate-200" // Bot: sin fondo, texto claro sobre el oscuro
                      }`}
                  >
                    {m.text}
                  </div>
              ))}
            </div>

            {/* Caja de entrada de texto */}
            <div className="mx-4 mb-4 flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 p-2">
              <span className="flex-1 px-2 text-sm text-muted-foreground">Mensaje</span>
              <button className="flex size-8 items-center justify-center rounded-lg bg-brand text-brand-foreground hover:opacity-90 transition-opacity">
                <Send className="size-4" /> {/* Asegúrate de tener importado Send */}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
