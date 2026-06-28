import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

export function Cta() {
  return (
      <section id="contact" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-2xl shadow-black/30 sm:p-12">
              {/* ... (mantén el componente Image igual) */}
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Contacto</span>
                  <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                    ¿Listo para automatizar? Hablemos.
                  </h2>
                  <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                    Agenda una consulta gratuita y diseñaremos un bot con IA personalizado para tus flujos de atención al cliente.
                  </p>
                </div>

                <form className="space-y-4" aria-label="Solicitud de consulta">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="name" label="Nombre" placeholder="Tu nombre" />
                    <Field id="email" label="Correo" type="email" placeholder="tu@correo.com" />
                  </div>
                  <Field id="company" label="Empresa" placeholder="Nombre de tu negocio" />
                  <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand/45"
                  >
                    Obtener tu consulta gratuita
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
  )
}


function Field({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-200 focus:border-brand/60 focus:ring-2 focus:ring-brand/30"
      />
    </div>
  )
}
