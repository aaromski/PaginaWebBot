"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const PLANS = [
    { id: 0, name: "Básico", price: "Consultar", features: ["1 Bot personalizado", "Integración básica", "Soporte 24/7"], details: "Ideal para automatizar tareas repetitivas sencillas." },
    { id: 1, name: "Pro", price: "Consultar", features: ["Hasta 5 Bots", "CRM avanzado", "Analítica en tiempo real", "Soporte prioritario"], details: "Solución para escalabilidad con integraciones profundas." },
    { id: 2, name: "Enterprise", price: "Personalizado", features: ["Bots ilimitados", "API propia", "Seguridad nivel bancario", "Gerente de cuenta"], details: "Despliegue robusto y personalizado para alto volumen." },
];

export function Pricing3D() {
    const [activeId, setActiveId] = useState<number | null>(1);

    return (
        <section className="py-24 px-4">
            {/* Contenedor flexible con separación (gap-6) */}
            <div className="mx-auto max-w-5xl flex flex-wrap justify-center items-start gap-6">
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
                                            Contactar asesor
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