"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function TeamSection() {
  return (
    <section className="bg-black text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,minmax(0,1.5fr)] gap-16">
          {/* Left Column - Image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1774-3cacLNcvFZXaRXN2ZVJcDAyhn85YaJ.jpeg"
              alt="Our team of wellness experts"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#e3f677] text-sm tracking-wider"
            >
              WE ARE MORE THAN JUST PRACTITIONERS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[4rem] md:text-[5rem] font-light leading-none text-[#e3f677] mb-8"
            >
              A TEAM OF
              <br />
              WELLNESS
              <br />
              EXPERTS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl mb-6"
            >
              We speak your language and understand your concerns. What's more, we believe in making wellness accessible
              and enjoyable.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl mb-8"
            >
              In short: we're just a team of experts who love what they do, and we love sharing our knowledge even more.
              Come to us with your health concerns, and we'll turn them into wellness solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/about#our-team"
                className="inline-flex items-center text-[#e3f677] hover:text-white transition-colors group"
              >
                MEET THE TEAM <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

