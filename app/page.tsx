import { SiteHeader } from "@/components/cogni/site-header"
import { Hero } from "@/components/cogni/hero"
import { Features } from "@/components/cogni/features"
import { Steps } from "@/components/cogni/steps"
import { Cta } from "@/components/cogni/cta"
import { SiteFooter } from "@/components/cogni/site-footer"
import {Pricing3D} from "@/components/cogni/Pricing3d";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Steps />
          <Pricing3D />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  )
}
