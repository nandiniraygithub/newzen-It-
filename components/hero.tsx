import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16 bg-[#f1f1f1">
      {/* Background Grid Pattern */}
      {/* <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f0f8ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f8ff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 z-0 bg-radial-gradient(circle_at_center,transparent_0%,rgba(240,248,255,0.3)_100%)"></div> */}

      <div className="relative py-12 container z-10 mx-auto rounded-xl px-4 bg-[#caf85a]">
        <div className="grid grid-cols-1 lg:block gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <ShieldCheck size={16} />
              <span>Authorized Lenovo Partner</span>
            </div> */}

            <h1 className="text-left max-w-4xl text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}>
              The complete platform for <span className="text-white italic">IT excellence.</span>
            </h1>

            <p className="text-left max-w-2xl text-balance text-lg text-gray-800 md:text-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}>
              Get the best deals on laptops, Apple devices, and enterprise hardware with trusted sourcing,
        bulk pricing, and end-to-end IT solutions-all in one place
            </p>
            
            {/* 
            <div className="mt-12 mb-29 flex flex-wrap items-center justify-start gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
              <Button size="lg" className="h-12 px-8 text-base font-semibold transition-all hover:scale-105">
                Explore Solutions
              </Button> 
               <Button
                variant="outline"
                size="lg"
                className="h-12 border-primary/20 px-8 text-base font-semibold hover:bg-primary/5 transition-all hover:scale-105 bg-transparent"
              >
                Contact Sales <ArrowRight className="ml-2" size={18} />
              </Button> 
            </div> */}
          </div>

          {/* Right Column - Image - Only for mobile */}
          <div className="relative lg:hidden flex justify-center items-center mt-8">
            <div className="relative h-[200px] w-full max-w-[350px]">
              <div className="w-full h-full bg-[url('/lapto_hero.png')] bg-cover bg-center drop-shadow-2xl scale-105 rotate-6"></div>
            </div>
          </div>

          {/* Desktop Image - Original absolute positioning */}
          <div className="hidden lg:block absolute top-[-80px] right-[-80px] h-[200px] w-[400px] z-15 pointer-events-none">
            <div className="w-full h-full bg-[url('/lapto_hero.png')] bg-cover bg-center drop-shadow-2xl scale-105 rotate-6"></div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="h-12 w-0.5 bg-gradient-to-b from-foreground to-transparent"></div>
      </div> */}

    </section>
  )
}
