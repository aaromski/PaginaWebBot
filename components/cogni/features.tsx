import {
  Clock,
  SlidersHorizontal,
  Plug,
  LineChart,
  ShieldCheck,
  Globe,
  type LucideIcon,
} from "lucide-react"
import { Reveal } from "./reveal"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  featured?: boolean
}

const FEATURES: Feature[] = [
  {
    icon: Clock,
    title: "Ventas 24/7",
    description: "Toma pedidos automáticamente, sin importar la hora, eliminando tiempos de espera.",
  },
  {
    icon: SlidersHorizontal,
    title: "Catálogo Inteligente",
    description: "El bot conoce tus productos, precios y disponibilidad en tiempo real.",
  },
  {
    icon: LineChart,
    title: "Dashboard de Caja",
    description: "Visualiza tus ventas y gestiona tus ingresos en un solo lugar con métricas claras.",
  },
  {
    icon: ShieldCheck,
    title: "Cálculos Precisos",
    description: "Conversiones de divisas y tasas BCV automáticas, eliminando errores matemáticos manuales.",
  },
  {
    icon: Plug,
    title: "Canales de Venta",
    description: "Atención nativa en WhatsApp y Telegram donde tus clientes ya están.",
  },
  {
    icon: Globe,
    title: "Escalabilidad Total",
    description: "Un asistente que crece con tu negocio, manejando múltiples pedidos simultáneamente.",
  },
]

export function Features() {
  return (
      <section id="benefits" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Beneficios</span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Todo lo que necesitas para automatizar tu soporte
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Agentes conversacionales diseñados a medida, integrados con tu stack tecnológico y listos para escalar desde el primer día.
            </p>
          </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 90} className="h-full">
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, description, featured }: Feature) {
  return (
    <article
      className={`group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 ${
        featured
          ? "glass-strong ring-1 ring-brand/40 shadow-xl shadow-brand/10"
          : "glass hover:ring-1 hover:ring-brand/30"
      }`}
    >
      {/* hover sheen */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px -z-0 bg-[radial-gradient(220px_circle_at_var(--x,50%)_0%,oklch(0.78_0.13_195/0.18),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative z-10">
        <span className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/30 transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  )
}
