import Link from "next/link"
import { ArrowRight } from "lucide-react"

const approaches = [
  {
    title: "Personalized Care",
    description: "We tailor our treatments to your unique needs and health goals.",
    href: "/our-approach/personalized-care",
  },
  {
    title: "Holistic Wellness",
    description: "We address the root cause of your issues, not just the symptoms.",
    href: "/our-approach/holistic-wellness",
  },
  {
    title: "Cutting-edge Techniques",
    description: "We utilize the latest advancements in chiropractic care and wellness.",
    href: "/our-approach/cutting-edge-techniques",
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous guidance and education throughout your journey.",
    href: "/our-approach/ongoing-support",
  },
]

export default function OurApproach() {
  return (
    <section id="our-approach" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">Our Approach to Wellness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-light mb-4">{approach.title}</h3>
              <p className="text-gray-300 mb-6">{approach.description}</p>
              <Link href={approach.href} className="inline-flex items-center text-[#e3f677] hover:text-[#e3f677]">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

