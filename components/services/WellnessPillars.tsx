import Image from "next/image"

export default function WellnessPillars() {
  return (
    <section className="bg-black text-white pt-16 pb-4 px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Pillars */}
          <div>
            <div className="mb-8">
              <div className="inline-block">
                <span className="text-sm tracking-wider text-[#e3f677] flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  PILLARS OF OPTIMAL WELLNESS
                </span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Physical Alignment",
                "Natural Healing",
                "Movement",
                "Recovery",
                "Prevention",
                "Vitality",
                "Balance",
              ].map((pillar, index) => (
                <div
                  key={index}
                  className="text-[3.5rem] md:text-[4.5rem] leading-[1.1] font-light hover:text-gray-300 transition-colors cursor-default"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[800px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="https://5ewb4vaux1.ufs.sh/f/r8GWM0suYH8Mn99hpfoQGbkTIgsZSMKwWvpiConh8DymPVLu"
                alt="Dr. Diego Montes demonstrating chiropractic care"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-24 h-24 border-t-2 border-r-2 border-[#e3f677]" />
            <div className="absolute bottom-4 left-4 w-24 h-24 border-b-2 border-l-2 border-[#e3f677]" />
          </div>
        </div>
      </div>
    </section>
  )
}

