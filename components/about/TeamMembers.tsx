import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Diego Montes",
    role: "Lead Chiropractor",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Wellness Specialist",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Chen",
    role: "Physical Therapist",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emily Rodriguez",
    role: "Nutritionist",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function TeamMembers() {
  return (
    <section className="py-24 bg-[#F0F1FA]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-light mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

