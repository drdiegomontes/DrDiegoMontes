import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: "spinal-adjustment",
    title: "Spinal Adjustment",
    category: "CORE TREATMENT • PAIN RELIEF • MOBILITY",
    image:
      "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/spinal-adjustment",
  },
  {
    id: "sports-rehabilitation",
    title: "Sports Rehabilitation",
    category: "INJURY RECOVERY • PERFORMANCE • PREVENTION",
    image:
      "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/sports-rehabilitation",
  },
  {
    id: "posture-correction",
    title: "Posture Correction",
    category: "ALIGNMENT • PREVENTION • WELLNESS",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/posture-correction",
  },
  {
    id: "massage-therapy",
    title: "Massage Therapy",
    category: "RELAXATION • RECOVERY • HEALING",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/massage-therapy",
  },
  {
    id: "nutritional-counseling",
    title: "Nutritional Counseling",
    category: "WELLNESS • LIFESTYLE • HEALTH",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/nutritional-counseling",
  },
  {
    id: "movement-therapy",
    title: "Movement Therapy",
    category: "MOBILITY • STRENGTH • PREVENTION",
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/movement-therapy",
  },
]

export default function MobileServicesSection() {
  return (
    <section id="our-services" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-between items-start mb-8">
          <h2 className="text-3xl font-light leading-none mb-4">Our Services</h2>
          <p className="text-sm max-w-full tracking-wide text-gray-600">
            DISCOVER OUR SPECIALIZED CHIROPRACTIC TREATMENTS DESIGNED TO ENHANCE YOUR OVERALL WELL-BEING AND QUALITY OF
            LIFE.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {services.map((service) => (
            <div key={service.id} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 cursor-pointer">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <p className="text-sm tracking-wide text-gray-600">{service.category}</p>
                  <span className="text-gray-400">|</span>
                  <Link href={service.href} className="text-sm text-black hover:underline flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <h3 className="text-2xl font-light mb-2 cursor-pointer">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

