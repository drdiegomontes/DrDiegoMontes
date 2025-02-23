import Image from "next/image"

export default function Generations() {
  return (
    <section className="bg-white pt-12 pb-6">
      <div className="max-w-[1800px] mx-auto px-4">
        {/* Image Grid */}
        <div className="grid grid-cols-5 gap-4 mb-2">
          {/* Dad + Grandad */}
          <div className="relative w-full">
            <div className="relative aspect-[1/1.9] w-full mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1_.jpg-NKmIqDNl0VyQ8EDlGpZSVSNTZT1Y1Y.png"
                alt="Trusted Hands, Lasting Relief"
                fill
                className="object-cover rounded-xl"
                sizes="(min-width: 1024px) 20vw, 100vw"
                objectPosition="70% center"
              />
            </div>
            <div className="text-center p-4">
              <h3 className="text-2xl font-serif mb-2 whitespace-nowrap">Trusted Hands, Lasting Relief</h3>
              <p className="text-sm text-gray-600 whitespace-nowrap">visited june 11, 2024</p>
            </div>
          </div>
          {/* Miguel */}
          <div className="relative w-full">
            <div className="relative aspect-[1/1.7] w-full mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2_.jpg-yZsEsczgDSHpuPedv3113VJ3Tdt12F.jpeg"
                alt="Miguel"
                fill
                className="object-cover rounded-xl"
                sizes="(min-width: 1024px) 20vw, 100vw"
              />
            </div>
            <div className="text-center p-4">
              <h3 className="text-2xl font-serif mb-2 whitespace-nowrap">Your Wellness, His Priority</h3>
              <p className="text-sm text-gray-600 whitespace-nowrap">visited November 1, 2024</p>
            </div>
          </div>
          {/* Happy Patient Visit */}
          <div className="relative w-full">
            <div className="relative aspect-[1/1.7] w-full mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5029.jpg-nzpYmKaCIAzouSllYNF1Ax0COExpKs.jpeg"
                alt="Happy Patient Visit"
                fill
                className="object-cover rounded-xl"
                sizes="(min-width: 1024px) 20vw, 100vw"
              />
            </div>
            <div className="text-center p-4">
              <h3 className="text-2xl font-serif mb-2 whitespace-nowrap">Feel Better, Live Better</h3>
              <p className="text-sm text-gray-600 whitespace-nowrap">visited December 4, 2024</p>
            </div>
          </div>
          {/* A Doctor Who Cares */}
          <div className="relative w-full">
            <div className="relative aspect-[1/1.6] w-full mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4_.jpg-Zeqh7l0Xx9CpEvKNnBBJaYUichiEMY.jpeg"
                alt="A Doctor Who Cares"
                fill
                className="object-cover rounded-xl"
                sizes="(min-width: 1024px) 20vw, 100vw"
              />
            </div>
            <div className="text-center p-4">
              <h3 className="text-2xl font-serif mb-2 whitespace-nowrap">A Doctor Who Cares</h3>
              <p className="text-sm text-gray-600 whitespace-nowrap">visited December 4, 2024</p>
            </div>
          </div>
          {/* Uncle Ken */}
          <div className="relative w-full">
            <div className="relative aspect-[1/1.3] w-full mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img9_.jpg-vwn3MjQKedhLkT8i1pO0hdTqh4ZRc2.jpeg"
                alt="Uncle Ken"
                fill
                className="object-cover rounded-xl"
                sizes="(min-width: 1024px) 20vw, 100vw"
              />
            </div>
            <div className="text-center p-4">
              <h3 className="text-2xl font-serif mb-2 whitespace-nowrap">Wellness You Can Feel</h3>
              <p className="text-sm text-gray-600 whitespace-nowrap">visited July 31, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Large Text Section */}
      <div className="bg-white overflow-hidden px-[1vw] mb-[-2rem]">
        <h1 className="text-[8.7vw] sm:text-[10.7vw] font-black text-black text-center leading-none tracking-tighter">
          TRANSFORMATION
        </h1>
      </div>
    </section>
  )
}

