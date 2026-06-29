"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const PLANS = [
    {
        id: 0,
        name: "Básico",
        price: "$10/mes",
        features: ["1 Bot personalizado", "Integración estándar", "Soporte 24/7"],
        details: "Automatización eficiente para negocios en etapa inicial."
    },
    {
        id: 1,
        name: "Pro",
        price: "$50/mes",
        features: ["Hasta 5 Bots", "CRM avanzado", "Analítica en tiempo real", "Soporte técnico dedicado"],
        details: "Optimización de flujos con herramientas de gestión profesional."
    },
    {
        id: 2,
        name: "Empresa",
        price: "$100/mes",
        features: ["Bots ilimitados", "Acceso a API", "Seguridad avanzada y auditoría", "Asesor de éxito exclusivo"],
        details: "Infraestructura robusta con acompañamiento estratégico personalizado."
    },
];

export function Pricing3D() {
    const [activeId, setActiveId] = useState<number | null>(1);

    return (
        <section className="py-26 px-4">
            {/* Contenedor flexible con separación (gap-6) */}

            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Planes de Automatización</h2>
                <p className="text-slate-400">Elige el plan que mejor se adapte al crecimiento de tu negocio.</p>
            </div>

            <div className="py-20 mx-auto max-w-5xl flex flex-wrap justify-center items-start gap-6">
                {PLANS.map((plan) => {
                    const isActive = plan.id === activeId;

                    return (
                        <motion.div
                            key={plan.id}
                            layout // Anima la expansión/contracción automáticamente
                            onClick={() => setActiveId(isActive ? null : plan.id)}
                            className={`cursor-pointer rounded-3xl border p-8 transition-all duration-300 flex flex-col 
                ${isActive
                                ? "w-72 bg-slate-900/90 border-brand shadow-2xl shadow-brand/30" // Mantiene el ancho original (w-72)
                                : "w-72 bg-slate-950/50 border-white/5 opacity-60 hover:opacity-100"
                            }`}
                        >
                            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                            <p className="text-3xl font-bold my-4 text-brand">{plan.price}</p>

                            <ul className="space-y-3 flex-grow">
                                {plan.features.map((f) => (
                                    <li key={f} className="text-sm flex items-center gap-2 text-slate-300">
                                        <Check className="size-4 text-brand" /> {f}
                                    </li>
                                ))}
                            </ul>

                            {/* Contenido expandible */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-4 border-t border-white/10 pt-6 overflow-hidden"
                                    >
                                        <p className="text-sm text-slate-400 mb-6">{plan.details}</p>
                                        <button className="w-full py-3 rounded-xl bg-brand font-bold text-slate-950 hover:opacity-90 transition">
                                            Seleccionar Plan
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}