import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "spinal-adjustment",
    title: "Spinal Adjustment",
    category: "CORE TREATMENT • PAIN RELIEF • MOBILITY",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-VhmOuPes7VrdRHHz5og6jCcl3dOP7L.webp",
    href: "/services/spinal-adjustment",
  },
  {
    id: "sports-rehabilitation",
    title: "Sports Rehabilitation",
    category: "INJURY RECOVERY • PERFORMANCE • PREVENTION",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%202-Wq5JyjmeoOKbKz1ND4y6NHrAoHsj8B.webp",
    href: "/services/sports-rehabilitation",
  },
]

export default function FeaturedServices() {
  return (
    <section className="min-h-screen bg-[#f5f2ff] px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <h2 className="text-[4rem] md:text-[5.5rem] font-light leading-none mb-8 lg:mb-0">Featured Services</h2>
          <p className="text-sm max-w-[400px] tracking-wide">
            DISCOVER OUR SPECIALIZED CHIROPRACTIC TREATMENTS DESIGNED TO ENHANCE YOUR OVERALL WELL-BEING AND QUALITY OF
            LIFE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={service.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm tracking-wide text-gray-600">{service.category}</p>
                <h3 className="text-4xl font-light">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Holistic Approach section */}
        <div className="mt-32 relative">
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path
                fill="#7FFFD4"
                d="M47.1,-57.8C59.9,-47.4,68.5,-31.6,71.8,-14.6C75.1,2.4,73,20.6,64.5,34.8C56,49,41,59.2,24.6,65.1C8.2,71,-9.6,72.6,-25.5,67.4C-41.4,62.2,-55.4,50.1,-65.1,34.9C-74.8,19.7,-80.2,1.3,-76.6,-15.1C-73,-31.5,-60.4,-45.9,-46,-56.1C-31.6,-66.3,-15.8,-72.3,0.8,-73.3C17.4,-74.3,34.3,-68.2,47.1,-57.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-[3rem] md:text-[4rem] font-light leading-none mb-8">
                A Holistic
                <br />
                Approach to
                <br />
                Your Health
              </h2>
              <div className="max-w-md">
                <p className="text-lg mb-6">
                  At Dr. Diego Montes' practice, we believe in addressing the whole person, not just the symptoms. Our
                  holistic approach combines chiropractic care with lifestyle advice to promote long-term health and
                  wellness.
                </p>
                <p className="text-lg">
                  Experience the difference of personalized care that goes beyond quick fixes, focusing on sustainable
                  health improvements and empowering you to take control of your well-being.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative w-full max-w-2xl mx-auto bg-[#f5f2ff]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tablet-CPDqGqVgAn9jjVtf0DpTkowhQxkByc.png"
                  alt="Holistic health illustration"
                  width={700}
                  height={532}
                  className="w-full h-auto"
                />
                <div className="absolute inset-[4%] rounded-[5%] overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%203-DKcQV3RTCDynztWrgkGVN9snFFXSOZ.webp"
                    alt="Dr. Diego Montes consulting with a patient"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

