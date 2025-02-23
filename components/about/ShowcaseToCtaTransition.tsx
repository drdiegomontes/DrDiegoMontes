import Image from "next/image"

export default function ShowcaseToCtaTransition() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light leading-tight">Your Journey to Better Health Starts Here</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Diego Montes and his team are committed to providing personalized care that addresses your unique
              needs. Whether you're dealing with chronic pain, recovering from an injury, or simply want to improve your
              overall well-being, we're here to guide you every step of the way.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-[#7FFFD4]">&#8226;</span>
                Customized treatment plans
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#7FFFD4]">&#8226;</span>
                Holistic approach to wellness
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#7FFFD4]">&#8226;</span>
                Ongoing support and education
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%202-Wq5JyjmeoOKbKz1ND4y6NHrAoHsj8B.webp"
              alt="Dr. Diego Montes performing a chiropractic adjustment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

