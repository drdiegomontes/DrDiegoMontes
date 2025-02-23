import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function PatientSuccess({ onConsultationClick }: { onConsultationClick: () => void }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="relative overflow-hidden rounded-3xl bg-black text-white p-12 md:p-24">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
            <div className="h-full w-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Experience the Transformation</h2>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              Join our satisfied patients and start your journey to optimal health and wellness with Dr. Diego Montes.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 px-6 py-3 rounded-full text-lg"
              onClick={onConsultationClick}
            >
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-6 left-6 w-24 h-24 border-t-2 border-l-2 border-white/20 rounded-tl-3xl" />
          <div className="absolute bottom-6 right-6 w-24 h-24 border-b-2 border-r-2 border-white/20 rounded-br-3xl" />
        </div>
      </div>
    </section>
  )
}

