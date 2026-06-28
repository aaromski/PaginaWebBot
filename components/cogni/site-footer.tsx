import { Bot } from "lucide-react"

const COLUMNS = [
  {
    heading: "Empresa",
    links: ["Inicio", "Sobre nosotros", "Precios", "Contacto"],
  },
  {
    heading: "Enlaces",
    links: ["Cómo funciona", "Beneficios", "Casos de éxito", "Blog"],
  },
  {
    heading: "Contacto",
    links: ["hola@cognibot.com", "+1 100 00 0000", "Bolivar, Venezuela"], // Cambiado para localización
  },
]

export function SiteFooter() {
  return (
      <footer id="pricing" className="border-t border-glass-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
            <div>
              <a href="#home" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/40">
                <Bot className="size-5" aria-hidden="true" />
              </span>
                <span className="text-lg font-semibold tracking-tight">CogniBot</span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Bots con IA a medida que automatizan tu atención al cliente y escalan conversaciones sin esfuerzo.
              </p>
            </div>

            {COLUMNS.map((col) => (
                <div key={col.heading}>
                  <h3 className="text-sm font-semibold">{col.heading}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((link) => (
                        <li key={link}>
                          <a
                              href="#"
                              className="text-sm text-muted-foreground transition-colors hover:text-brand"
                          >
                            {link}
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-glass-border pt-6 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} CogniBot. Todos los derechos reservados.</p>
            <p className="flex gap-4">
              <a href="#" className="transition-colors hover:text-foreground">
                Privacidad
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Términos
              </a>
            </p>
          </div>
        </div>
      </footer>
  )
}
