import Image from "next/image"

export default function HealthJourney() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">Clinical Excellence Award Recipient</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dr. Diego Montes has been honored with the prestigious Clinical Excellence Award. This distinguished
              recognition celebrates his exceptional commitment to patient care and outstanding contributions to the
              field of chiropractic medicine. Dr. Montes is dedicated to providing the highest quality of care to his
              patients and advancing the practice of chiropractic medicine.
            </p>
            <ul className="space-y-4">
              {[
                "Recognition for outstanding clinical practice",
                "Excellence in patient care and outcomes",
                "Distinguished leadership in chiropractic medicine",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
                    <circle cx="12" cy="12" r="6" fill="black" />
                    <circle cx="10" cy="10" r="3" fill="#e3f677" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Tablet Frame */}
            <div className="relative aspect-[4/3] bg-black rounded-[2.5rem] p-6 shadow-xl">
              {/* Content Area with Gold Border */}
              <div className="relative h-full rounded-[1.5rem] overflow-hidden border-4 border-[#9b8b3d]/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8938.JPEG-IeyB0zDcgmMZNGFhCMuwkU94igWOVL.jpeg"
                  alt="Dr. Diego Montes receiving Clinical Excellence Award"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

