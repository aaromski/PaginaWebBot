import Image from "next/image"
import { Search, Settings2, Rocket, PlugZap, type LucideIcon } from "lucide-react"
import { Reveal } from "./reveal"

interface Step {
  icon: LucideIcon
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    icon: Search,
    title: "Análisis de Datos",
    description: "La IA analiza tu catálogo, inventario o base de conocimientos para entender qué ofrece tu negocio.",
  },
  {
    icon: Settings2,
    title: "Entrenamiento Inteligente",
    description: "Configuramos los parámetros de respuesta, tono de voz y reglas de negocio para asegurar precisión.",
  },
  {
    icon: Rocket,
    title: "Despliegue Multi-Canal",
    description: "Tu asistente queda activo en WhatsApp, Telegram o Web, listo para atender a tus clientes al instante.",
  },
  {
    icon: PlugZap,
    title: "Gestión Automatizada",
    description: "Tu sistema recibe pedidos, consultas y transacciones, centralizando todo en tu panel de control.",
  },
]






export function Steps() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-20 sm:py-28">
      <Image
        src="/images/world-map.png"
        alt=""
        aria-hidden="true"
        width={1200}
        height={700}
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover opacity-25"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Cómo funciona</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Personalización paso a paso
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Desde la primera conversación hasta el despliegue del agente, en cuatro pasos guiados.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-6 md:grid-cols-4">
          {/* ... (línea conectora se mantiene igual) */}
          {STEPS.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 120} className="relative">
                <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:ring-1 hover:ring-brand/30">
                  <div className="flex items-center gap-3">
                  <span className="relative flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand ring-1 ring-brand/30 transition-transform duration-300 group-hover:scale-110">
                    <step.icon className="size-6" aria-hidden="true" />
                  </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Paso {i + 1}
                  </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
